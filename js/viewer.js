(function() {
    'use strict';

    // ---- TRANSLATION INITIALIZATION ----
    const savedLang = Translations.init('view');
    Translations.apply('view');

    // ---- DOM ELEMENTS ----
    const elements = {
        passwordOverlay: document.getElementById('passwordOverlay'),
        passwordForm: document.getElementById('passwordForm'),
        passwordInput: document.getElementById('passwordInput'),
        passwordError: document.getElementById('passwordError'),
        mainView: document.getElementById('mainView'),
        timerBanner: document.getElementById('timerBanner'),
        timerDisplay: document.getElementById('timerDisplay'),
        viewCountDisplay: document.getElementById('viewCountDisplay'),
        burnOverlay: document.getElementById('burnOverlay'),
        imageContainer: document.getElementById('imageContainer'),
        destroyImage: document.getElementById('destroyImage'),
        imageOverlay: document.getElementById('imageOverlay'),
        watermark: document.getElementById('watermark'),
        viewsInfo: document.getElementById('viewsInfo'),
        closeView: document.getElementById('closeView'),
        errorView: document.getElementById('errorView'),
        protectionIndicator: null
    };

    // ---- STATE ----
    let state = {
        id: null,
        metadata: null,
        timerInterval: null,
        timerSecondsRemaining: 0,
        destroyed: false
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
                Translations.apply('view');
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

    // ---- LINK ----
    function getLinkId() {
        const id = window.location.hash.substring(1);
        return /^[A-Za-z0-9_-]{6,40}$/.test(id) ? id : null;
    }

    const SERVER_ERROR = 'Could not reach the server. Check your connection and try again.';

    // ---- OPEN (counts one view on the server) ----
    async function openShot(password) {
        let res;
        try {
            res = await window.UploadApp.rpc('open_shot', {
                p_id: state.id,
                p_password: password
            });
        } catch (err) {
            showError(SERVER_ERROR);
            return;
        }

        switch (res.status) {
            case 'ok':
                elements.passwordOverlay.classList.add('hidden');
                state.metadata = {
                    imageUrl: res.image,
                    views: res.max_views,
                    viewsCount: res.views,
                    timer: Number(res.timer) || 0
                };
                showImage();
                break;
            case 'wrong_password':
                elements.passwordError.classList.remove('hidden');
                elements.passwordInput.value = '';
                elements.passwordInput.focus();
                break;
            case 'destroyed':
            case 'expired':
                showBurnScreen();
                break;
            default:
                showError();
        }
    }

    elements.passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        openShot(elements.passwordInput.value.trim());
    });

    // ---- SHOW IMAGE ----
    function showImage() {
        const meta = state.metadata;

        elements.mainView.classList.remove('hidden');
        elements.imageContainer.classList.remove('hidden');
        elements.destroyImage.src = meta.imageUrl;

        const remaining = Math.max(0, meta.views - meta.viewsCount);
        elements.viewCountDisplay.textContent = `Views: ${meta.viewsCount}/${meta.views}`;
        elements.viewsInfo.textContent = `${remaining} view${remaining !== 1 ? 's' : ''} remaining`;

        // Set the title before protection starts, since it watches for title changes
        document.title = `${Translations.t('appTitle').split(' - ')[0]} - ${meta.views} view${meta.views !== 1 ? 's' : ''}`;

        if (meta.timer > 0) {
            startTimer();
        } else {
            elements.timerBanner.classList.add('hidden');
        }

        ContentProtection.activate({
            enablePointerLock: true,
            enableCanvasProtection: true,
            onDetected: () => {
                if (!state.destroyed) {
                    destroyImage();
                }
            }
        });
    }

    // ---- TIMER ----
    function startTimer() {
        state.timerSecondsRemaining = Math.floor(state.metadata.timer);
        updateTimerDisplay();
        elements.timerBanner.classList.remove('hidden');

        state.timerInterval = setInterval(() => {
            if (state.destroyed) return;

            state.timerSecondsRemaining--;
            updateTimerDisplay();

            if (state.timerSecondsRemaining <= 0) {
                clearInterval(state.timerInterval);
                state.timerInterval = null;
                destroyImage();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const totalSeconds = Math.max(0, Math.floor(Number(state.timerSecondsRemaining) || 0));
        elements.timerDisplay.textContent = `${totalSeconds}s`;
    }

    // ---- DESTROY (ends this viewing; the server already counted the view) ----
    function destroyImage() {
        if (state.destroyed) return;
        state.destroyed = true;

        ContentProtection.deactivate();
        if (state.timerInterval) clearInterval(state.timerInterval);

        elements.destroyImage.removeAttribute('src');
        elements.imageContainer.classList.add('hidden');
        elements.timerBanner.classList.add('hidden');
        elements.burnOverlay.classList.remove('hidden');
    }

    function showBurnScreen() {
        state.destroyed = true;
        ContentProtection.deactivate();

        elements.passwordOverlay.classList.add('hidden');
        elements.mainView.classList.remove('hidden');
        elements.imageContainer.classList.add('hidden');
        elements.timerBanner.classList.add('hidden');
        elements.burnOverlay.classList.remove('hidden');
    }

    function showError(message) {
        elements.passwordOverlay.classList.add('hidden');
        elements.mainView.classList.remove('hidden');
        elements.imageContainer.classList.add('hidden');
        elements.timerBanner.classList.add('hidden');
        elements.errorView.classList.remove('hidden');
        if (message) {
            elements.errorView.querySelector('h2').textContent = 'Error';
            elements.errorView.querySelector('p').textContent = message;
        }
    }

    // ---- CLOSE VIEW ----
    elements.closeView.addEventListener('click', () => {
        if (state.metadata && !state.destroyed) {
            destroyImage();
        } else {
            window.location.href = 'index.html';
        }
    });

    // ---- BLOCK EXTERNAL ACCESS ----
    document.addEventListener('contextmenu', (e) => {
        if (!elements.passwordOverlay.classList.contains('hidden') ||
            !elements.mainView.classList.contains('hidden')) {
            e.preventDefault();
        }
    });

    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
    });

    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // ---- ON PAGE UNLOAD ----
    window.addEventListener('beforeunload', () => {
        if (state.timerInterval) clearInterval(state.timerInterval);
    });

    // ---- INITIALIZE ----
    async function init() {
        const id = getLinkId();
        if (!id) {
            showError();
            return;
        }
        state.id = id;

        // Peek first so a view is only counted once the image is actually shown
        let info;
        try {
            info = await window.UploadApp.rpc('peek_shot', { p_id: id });
        } catch (err) {
            showError(SERVER_ERROR);
            return;
        }

        if (info.status === 'destroyed' || info.status === 'expired') {
            showBurnScreen();
            return;
        }
        if (info.status !== 'ok') {
            showError();
            return;
        }

        if (info.has_password) {
            elements.passwordOverlay.classList.remove('hidden');
            elements.passwordInput.focus();
            return;
        }

        openShot(null);
    }

    // ---- EXPOSE TO GLOBAL ----
    window.VanishotViewer = {
        init,
        destroyImage,
        getState: () => state
    };

    init();

})();
