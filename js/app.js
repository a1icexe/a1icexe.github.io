(function() {
    'use strict';

    // ---- TRANSLATION INITIALIZATION ----
    const savedLang = Translations.init('upload');
    Translations.apply('upload');

    // ---- CONFIGURATION ----
    const CONFIG = {
        supabaseUrl: 'https://ynruhmdoivcyhcwfvwqh.supabase.co',
        supabaseKey: 'sb_publishable_DqUJjMtwFDn2wnSTxS4MgQ_9YH_wu6T',
        maxFileSize: 10 * 1024 * 1024,
        maxEncodedSize: 5 * 1000 * 1000,
        maxImageDimension: 1000,
        jpegQuality: 0.65,
        skipCompressBelow: 100 * 1024
    };

    // ---- LANGUAGE SELECTOR ----
    function setupLanguageSelector() {
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        if (!langBtn || !langDropdown) return;

        const languages = Translations.getLanguages();
        const currentLang = Translations.getCurrentLang();

        // Populate dropdown
        languages.forEach(lang => {
            const btn = document.createElement('button');
            btn.className = 'lang-option' + (lang.code === currentLang ? ' active' : '');
            btn.dataset.lang = lang.code;
            btn.innerHTML = `
                <span class="lang-flag">${lang.flag}</span>
                <span class="lang-name">${lang.name}</span>
                <span class="lang-native">${lang.nativeName}</span>
            `;
            btn.addEventListener('click', () => {
                Translations.load(lang.code);
                // Update active state
                langDropdown.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Update button text
                langBtn.innerHTML = `${lang.flag} ${lang.code.toUpperCase()}`;
                langDropdown.classList.add('hidden');
                // Re-apply translations after language change
                Translations.apply('upload');
            });
            langDropdown.appendChild(btn);
        });

        // Toggle dropdown
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });

        // Close on outside click
        document.addEventListener('click', () => {
            langDropdown.classList.add('hidden');
        });
    }

    setupLanguageSelector();

    // ---- THEME ----
    const THEME_KEY = 'vanishot_theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const btn = document.getElementById('themeBtn');
        if (!btn) return;
        btn.textContent = Translations.t(theme === 'dark' ? 'themeLight' : 'themeDark') || (theme === 'dark' ? 'Light' : 'Dark');
        btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }

    function setupThemeToggle() {
        const current = document.documentElement.getAttribute('data-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(current);

        const btn = document.getElementById('themeBtn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
        });
    }

    // keep the label in the chosen language
    document.addEventListener('vanishot:langchange', () => {
        applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupThemeToggle);
    } else {
        setupThemeToggle();
    }

    // ---- BACKEND (Supabase REST, no library needed) ----
    async function rpc(fn, args) {
        const headers = {
            'Content-Type': 'application/json',
            apikey: CONFIG.supabaseKey
        };
        // legacy anon keys are JWTs and also go in Authorization; new publishable keys don't
        if (CONFIG.supabaseKey.startsWith('eyJ')) {
            headers.Authorization = `Bearer ${CONFIG.supabaseKey}`;
        }
        const res = await fetch(`${CONFIG.supabaseUrl}/rest/v1/rpc/${fn}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(args)
        });
        if (!res.ok) {
            let msg = `Server error (${res.status})`;
            try { msg = (await res.json()).message || msg; } catch (e) {}
            throw new Error(msg);
        }
        return res.json();
    }

    // ---- PUBLIC API (exposed to viewer.js) ----
    window.UploadApp = { rpc };

    // Clear leftovers from the old version that kept images in the browser
    try {
        [localStorage, sessionStorage].forEach(store => {
            Object.keys(store).forEach(k => {
                if (/^vanishot_v/.test(k)) store.removeItem(k);
            });
        });
    } catch (e) {}

    if (!document.getElementById('uploadForm')) return;

    // ---- DOM ELEMENTS ----
    const elements = {
        dropZone: document.getElementById('dropZone'),
        imageInput: document.getElementById('imageInput'),
        previewContainer: document.getElementById('previewContainer'),
        imagePreview: document.getElementById('imagePreview'),
        removeImage: document.getElementById('removeImage'),
        viewLimit: document.getElementById('viewLimit'),
        timerType: document.getElementById('timerType'),
        countdownSetting: document.getElementById('countdownSetting'),
        timerSeconds: document.getElementById('timerSeconds'),
        passwordProtection: document.getElementById('passwordProtection'),
        uploadForm: document.getElementById('uploadForm'),
        submitBtn: document.getElementById('submitBtn'),
        btnText: document.querySelector('.btn-text'),
        btnLoader: document.querySelector('.btn-loader'),
        resultSection: document.getElementById('resultSection'),
        shareLink: document.getElementById('shareLink'),
        copyLink: document.getElementById('copyLink'),
        statViews: document.getElementById('statViews'),
        statTimer: document.getElementById('statTimer'),
        newUpload: document.getElementById('newUpload'),
        uploadingOverlay: document.getElementById('uploadingOverlay')
    };

    let selectedFile = null;
    let uploadedImageUrl = null;

    // ---- TIMER TYPE SELECTOR ----
    const timerTypeButtons = document.querySelectorAll('.timer-type-btn');
    timerTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timerTypeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const type = btn.dataset.type;
            elements.countdownSetting.style.display = type === 'countdown' ? 'block' : 'none';
        });
    });

    // ---- DRAG AND DROP ----
    elements.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.dropZone.classList.add('dragover');
    });

    elements.dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.dropZone.classList.remove('dragover');
    });

    elements.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handleFileSelect(files[0]);
        }
    });

    elements.dropZone.addEventListener('click', () => {
        elements.imageInput.click();
    });

    elements.imageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });

    elements.removeImage.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetUploadState();
    });

    function handleFileSelect(file) {
        if (!file.type.startsWith('image/')) {
            alert(Translations.t('alertImageFormat'));
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert(Translations.t('alertImageSize'));
            return;
        }

        selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            elements.imagePreview.src = e.target.result;
            elements.previewContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }

    function resetUploadState() {
        selectedFile = null;
        uploadedImageUrl = null;
        elements.imageInput.value = '';
        elements.imagePreview.src = '';
        elements.previewContainer.classList.add('hidden');
        elements.resultSection.classList.add('hidden');
        elements.uploadForm.classList.remove('hidden');
    }

    // ---- UPLOAD IMAGE ----
    function readAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Failed to read image file'));
            reader.readAsDataURL(file);
        });
    }

    function loadImage(file) {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(file);
            const img = new Image();
            img.onload = () => {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error('Failed to decode image'));
            };
            img.src = url;
        });
    }

    async function compressImage(file) {
        const img = await loadImage(file);
        const scale = Math.min(1, CONFIG.maxImageDimension / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL('image/jpeg', CONFIG.jpegQuality);
    }

    async function uploadImage(file) {
        const original = await readAsDataURL(file);
        if (file.size <= CONFIG.skipCompressBelow) return original;

        try {
            const compressed = await compressImage(file);
            return compressed.length < original.length ? compressed : original;
        } catch (e) {
            return original;
        }
    }

    // ---- FORM SUBMISSION ----
    elements.uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert(Translations.t('alertSelectImage'));
            return;
        }

        const viewLimit = Math.min(1000, Math.max(1, parseInt(elements.viewLimit.value) || 1));
        const timerType = document.querySelector('.timer-type-btn.active').dataset.type;
        const timerSeconds = Math.min(300, Math.max(1, parseInt(elements.timerSeconds.value) || 1));
        const password = elements.passwordProtection.value.trim();

        elements.submitBtn.disabled = true;
        elements.btnText.textContent = Translations.t('uploading');
        elements.btnLoader.classList.remove('hidden');
        elements.uploadingOverlay.classList.remove('hidden');

        try {
            const methodHint = document.getElementById('uploadMethod');
            if (methodHint) methodHint.textContent = Translations.t('preparingImage');
            uploadedImageUrl = await uploadImage(selectedFile);

            if (uploadedImageUrl.length > CONFIG.maxEncodedSize) {
                throw new Error('Image is too large. Try one under about 3MB.');
            }

            if (methodHint) methodHint.textContent = Translations.t('uploadMethod');
            const id = await rpc('create_shot', {
                p_image: uploadedImageUrl,
                p_max_views: viewLimit,
                p_timer: timerType === 'countdown' ? timerSeconds : 0,
                p_password: password || null
            });

            const basePath = window.location.pathname.replace(/[^/]*$/, '');
            const shareLink = `${window.location.origin}${basePath}view.html#${id}`;

            elements.shareLink.value = shareLink;
            elements.statViews.textContent = `${viewLimit} ${viewLimit === 1 ? 'view' : 'views'}`;
            elements.statTimer.textContent = timerType === 'countdown'
                ? `${timerSeconds}s`
                : 'Never';

            elements.resultSection.classList.remove('hidden');
            elements.resultSection.scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            console.error('Upload error:', error);
            alert(Translations.t('uploadFailed') + ' ' + error.message);
        } finally {
            elements.submitBtn.disabled = false;
            elements.btnText.textContent = Translations.t('createLink');
            elements.btnLoader.classList.add('hidden');
            elements.uploadingOverlay.classList.add('hidden');
        }
    });

    // ---- COPY LINK ----
    elements.copyLink.addEventListener('click', () => {
        const link = elements.shareLink.value;
        navigator.clipboard.writeText(link).then(() => {
            const originalText = elements.copyLink.textContent;
            elements.copyLink.textContent = 'Copied!';
            elements.copyLink.style.background = 'var(--success)';
            setTimeout(() => {
                elements.copyLink.textContent = originalText;
                elements.copyLink.style.background = '';
            }, 2000);
        }).catch(() => {
            // Fallback
            elements.shareLink.select();
            document.execCommand('copy');
            elements.copyLink.textContent = Translations.t('copied');
            setTimeout(() => {
                elements.copyLink.textContent = Translations.t('copyLink');
            }, 2000);
        });
    });

    // ---- NEW UPLOAD ----
    elements.newUpload.addEventListener('click', () => {
        resetUploadState();
    });

})();
