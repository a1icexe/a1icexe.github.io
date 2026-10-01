const ContentProtection = (() => {
    const DEVTOOLS_THRESHOLD = 160;

    const BLOCKED_KEYS = ['F12', 'F11', 'F5', 'F9', 'ScrollLock', 'Pause'];

    // shift left undefined means the combo matches with or without Shift
    const BLOCKED_COMBOS = [
        { key: 'i', ctrl: true, shift: true },
        { key: 'j', ctrl: true },
        { key: 'c', ctrl: true, shift: true },
        { key: 'a', ctrl: true, shift: true },
        { key: 'u', ctrl: true },
        { key: 'p', ctrl: true },
        { key: 's', ctrl: true },
        { key: 'd', ctrl: true },
        { key: 'f', ctrl: true },
        { key: 'h', ctrl: true }
    ];

    let protectionActive = false;
    let intervalIds = [];
    let listeners = [];
    let originalTitle = '';

    function addListener(target, event, handler, options) {
        target.addEventListener(event, handler, options);
        listeners.push({ target, event, handler, options });
    }

    function removeAllListeners() {
        listeners.forEach(({ target, event, handler, options }) => {
            target.removeEventListener(event, handler, options);
        });
        listeners = [];
    }

    function addInterval(fn, ms) {
        const id = setInterval(fn, ms);
        intervalIds.push(id);
        return id;
    }

    function clearIntervals() {
        intervalIds.forEach(id => clearInterval(id));
        intervalIds = [];
    }

    function block(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function handleKeyDown(e) {
        if (BLOCKED_KEYS.includes(e.key)) return block(e);

        const key = e.key.toLowerCase();
        const ctrl = e.ctrlKey || e.metaKey;

        for (const combo of BLOCKED_COMBOS) {
            if (key === combo.key &&
                ctrl === combo.ctrl &&
                (combo.shift === undefined || e.shiftKey === combo.shift)) {
                return block(e);
            }
        }

        return true;
    }

    // PrintScreen usually fires keyup only, and it can't be cancelled
    function handleKeyUp(e) {
        if (e.key !== 'PrintScreen') return;
        try { navigator.clipboard.writeText(''); } catch (err) {}
        triggerBurnSequence();
    }

    function handleDevTools() {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > DEVTOOLS_THRESHOLD || heightDiff > DEVTOOLS_THRESHOLD) {
            triggerBurnSequence();
        }
    }

    function handleBeforeUnload(e) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }

    function requestPointerLock() {
        const request = document.body.requestPointerLock();
        if (request && request.catch) {
            request.catch(() => {});
        }
    }

    function startPeriodicChecks() {
        addInterval(() => {
            if (protectionActive && document.title !== originalTitle) {
                triggerBurnSequence();
            }
        }, 1000);

        addInterval(() => {
            if (protectionActive) handleDevTools();
        }, 1000);
    }

    function protectCanvases() {
        document.querySelectorAll('canvas').forEach(canvas => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            addInterval(() => {
                if (!protectionActive) return;
                try {
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    for (let i = 0; i < data.length; i += 1000) {
                        data[i] = (data[i] + Math.random() * 5) % 256;
                    }
                    ctx.putImageData(imageData, 0, 0);
                } catch (err) {
                    triggerBurnSequence();
                }
            }, 1500);
        });
    }

    function triggerBurnSequence() {
        window.dispatchEvent(new CustomEvent('vanishot:screenshot-detected'));
        removeAllListeners();
        clearIntervals();

        try { document.exitPointerLock(); } catch (err) {}
    }

    return {
        /**
         * @param {Object} options
         * @param {boolean} [options.enablePointerLock=true]
         * @param {boolean} [options.enableCanvasProtection=true]
         * @param {Function} [options.onDetected] called when a capture attempt is detected
         */
        activate(options = {}) {
            const {
                enablePointerLock = true,
                enableCanvasProtection = true,
                onDetected = null
            } = options;

            if (protectionActive) return;
            protectionActive = true;
            originalTitle = document.title;

            addListener(document, 'keydown', handleKeyDown);
            addListener(document, 'keyup', handleKeyUp);
            addListener(document, 'contextmenu', block);
            addListener(document, 'copy', block);
            addListener(document, 'cut', block);
            addListener(document, 'paste', block);
            addListener(window, 'beforeprint', triggerBurnSequence);
            addListener(window, 'beforeunload', handleBeforeUnload);
            addListener(window, 'resize', handleDevTools);

            if (onDetected) {
                addListener(window, 'vanishot:screenshot-detected', onDetected);
            }

            startPeriodicChecks();

            if (enablePointerLock) {
                setTimeout(requestPointerLock, 800);
                addInterval(requestPointerLock, 3000);
            }

            if (enableCanvasProtection) {
                protectCanvases();
            }

            document.body.style.userSelect = 'none';
            document.body.style.webkitUserSelect = 'none';
            document.body.style.MozUserSelect = 'none';
            document.body.style.webkitUserDrag = 'none';

            return { active: true };
        },

        deactivate() {
            if (!protectionActive) return;
            protectionActive = false;

            removeAllListeners();
            clearIntervals();

            document.body.style.userSelect = '';
            document.body.style.webkitUserSelect = '';
            document.body.style.MozUserSelect = '';
            document.body.style.webkitUserDrag = '';

            try { document.exitPointerLock(); } catch (err) {}

            document.title = originalTitle;

            return { active: false };
        },

        isActive() {
            return protectionActive;
        },

        getProtectionInfo() {
            return {
                pointerLockAvailable: !!document.pointerLockElement || !!document.mozPointerLockElement,
                clipboardWrite: !!navigator.clipboard?.write,
                screenCaptureAvailable: !!navigator.mediaDevices?.getDisplayMedia,
                canvasProtection: true,
                isActive: protectionActive
            };
        }
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentProtection;
}
