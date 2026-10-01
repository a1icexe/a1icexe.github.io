# Vanishot

**Upload it. Share it. Watch it disappear.**

Vanishot is a self-destructing image sharing platform. Upload an image, set how many times it can be viewed and/or a countdown timer, and share the generated link — once the limit is hit, the image is destroyed and the link stops working.

## Features

- **Drag-and-drop upload** — drop an image or click to browse
- **View limit** — set a maximum number of views (1–1000); counted on the server, so it holds across browsers and devices
- **Timer options** — choose "Never" or a countdown (up to 300 seconds) after which the image self-destructs
- **Optional password protection** — checked on the server; 5 wrong attempts destroy the image
- **Short shareable links** — links look like `view.html#Ab3dE_9xKq1z`, short enough for Discord and other chats, with a copy-to-clipboard button
- **Live viewer experience** — the view page shows a countdown timer, remaining view count, and a "burn" screen once the image has expired or hit its view limit
- **Watermarked viewing** — images are watermarked with "Vanishot" while being viewed

## Tech Stack

- Vanilla HTML, CSS, and JavaScript — no frontend framework or build step
- [`serve`](https://www.npmjs.com/package/serve) for local development
- [Supabase](https://supabase.com) (free tier) as the backend: a Postgres table plus three RPC functions, called with plain `fetch` (no client library)
- The frontend stays a static site (see [Deployment](#deployment))

## Project Structure

```
vanishot/
├── index.html          # Upload page
├── view.html           # Viewing page (handles password gate, timer, view count, burn screen)
├── css/
│   └── style.css
├── js/
│   ├── app.js              # Upload flow, form handling, Supabase config and RPC helper
│   ├── content-protection.js   # Screenshot deterrents (blocked shortcuts, DevTools/print detection)
│   └── viewer.js           # Viewer page logic (password gate, countdown, burn screen)
└── package.json
```

## Backend Setup (Supabase)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor**, paste the script below, and run it.
3. Go to **Project Settings → API** and copy the **Project URL** and the **anon / publishable key**.
4. Paste both into `CONFIG` at the top of `js/app.js`.

The anon key is designed to be public. The table has no public access; the browser can only call the three functions in the script.

<details>
<summary>SQL script</summary>

```sql
-- Vanishot backend: run this once in Supabase (SQL Editor -> New query -> Run)

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.shots (
  id              text primary key,
  image           text,                       -- data URL; set to null once burned
  max_views       int  not null check (max_views between 1 and 1000),
  views           int  not null default 0,
  timer_seconds   int  not null default 0 check (timer_seconds between 0 and 300),
  password_hash   text,
  failed_attempts int  not null default 0,
  burned          boolean not null default false,
  created_at      timestamptz not null default now()
);

-- Lock the table: the browser can only use the three functions below
alter table public.shots enable row level security;
revoke all on public.shots from anon, authenticated;

-- 1) Create a shot, returns a short id
create or replace function public.create_shot(
  p_image text, p_max_views int, p_timer int, p_password text default null
) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare v_id text;
begin
  if p_image is null or p_image not like 'data:image/%' or length(p_image) > 6000000 then
    raise exception 'Invalid or too large image';
  end if;

  v_id := replace(replace(encode(gen_random_bytes(9), 'base64'), '+', '-'), '/', '_');

  insert into public.shots (id, image, max_views, timer_seconds, password_hash)
  values (
    v_id,
    p_image,
    greatest(1, least(coalesce(p_max_views, 1), 1000)),
    greatest(0, least(coalesce(p_timer, 0), 300)),
    case when coalesce(p_password, '') = '' then null
         else crypt(p_password, gen_salt('bf')) end
  );

  return v_id;
end $$;

-- 2) Check a link without using up a view
create or replace function public.peek_shot(p_id text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare s public.shots;
begin
  select * into s from public.shots where id = p_id;
  if not found then return jsonb_build_object('status', 'not_found'); end if;
  if s.burned then return jsonb_build_object('status', 'destroyed'); end if;

  if now() > s.created_at + interval '7 days' then
    update public.shots set burned = true, image = null where id = p_id;
    return jsonb_build_object('status', 'expired');
  end if;

  return jsonb_build_object('status', 'ok', 'has_password', s.password_hash is not null);
end $$;

-- 3) Open a shot: checks password, counts the view, burns it on the last view
create or replace function public.open_shot(p_id text, p_password text default null)
returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare s public.shots;
begin
  select * into s from public.shots where id = p_id for update;
  if not found then return jsonb_build_object('status', 'not_found'); end if;
  if s.burned then return jsonb_build_object('status', 'destroyed'); end if;

  if now() > s.created_at + interval '7 days' then
    update public.shots set burned = true, image = null where id = p_id;
    return jsonb_build_object('status', 'expired');
  end if;

  if s.password_hash is not null
     and (p_password is null or crypt(p_password, s.password_hash) <> s.password_hash) then
    if s.failed_attempts + 1 >= 5 then      -- 5 wrong passwords burns the image
      update public.shots
        set burned = true, image = null, failed_attempts = failed_attempts + 1
        where id = p_id;
      return jsonb_build_object('status', 'destroyed');
    end if;
    update public.shots set failed_attempts = failed_attempts + 1 where id = p_id;
    return jsonb_build_object('status', 'wrong_password');
  end if;

  update public.shots
    set views = views + 1,
        burned = (views + 1 >= max_views),
        image = case when views + 1 >= max_views then null else image end
    where id = p_id;

  return jsonb_build_object(
    'status', 'ok',
    'image', s.image,
    'timer', s.timer_seconds,
    'views', s.views + 1,
    'max_views', s.max_views
  );
end $$;

revoke all on function public.create_shot(text, int, int, text) from public;
revoke all on function public.peek_shot(text) from public;
revoke all on function public.open_shot(text, text) from public;
grant execute on function public.create_shot(text, int, int, text) to anon;
grant execute on function public.peek_shot(text) to anon;
grant execute on function public.open_shot(text, text) to anon;
```

</details>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for running the local dev server via `npx serve`)

### Installation

```bash
git clone https://github.com/<your-username>/vanishot.git
cd vanishot
npm install
```

### Running Locally

```bash
npm start
```

or, to run on port 3000:

```bash
npm run dev
```

Then open the URL printed in your terminal (e.g. `http://localhost:3000`).

## Deployment

Vanishot is a static site and can be hosted directly on **GitHub Pages**:

1. Push the repository to GitHub.
2. In the repo settings, go to **Pages** and set the source to your default branch (root).
3. GitHub will publish the site at `https://<your-username>.github.io/vanishot/`.

## How It Works

1. A user uploads an image and sets a view limit and/or countdown timer on `index.html`.
2. The image is compressed in the browser and stored in Supabase; only a short ID goes in the link.
3. Anyone who opens the link lands on `view.html`, which:
   - Prompts for a password if one was set
   - Counts the view on the server and displays the image with the live countdown and remaining views
   - Shows the "Image Destroyed" screen once the timer runs out or the view limit is hit
4. On the last allowed view the image is deleted from the database. Unopened links expire after 7 days.

Each page load (including a reload) counts as one view, so a 1-view link can't be opened twice.

## License

MIT