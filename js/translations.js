const Translations = (() => {
    // ---- SUPPORTED LANGUAGES ----
    const LANGUAGES = {
        en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
        es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
        fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
        de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
        pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
        ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
        zh: { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
        ko: { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
        ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
        hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
        ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
        it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
        tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
        vi: { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
        pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
        th: { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' }
    };

    // ---- TRANSLATION DICTIONARIES ----
    const dicts = {
        en: {
            // Upload page
            appTitle: 'Vanishot - Self-Destructing Image Sharing',
            tagline: 'Upload it. Share it. Watch it disappear.',
            dropZone: 'Drag & drop your image here',
            dropSubtext: 'or click to browse',
            removeImage: 'Remove image',
            expirationSettings: 'Expiration Settings',
            maxViews: 'Maximum Views',
            viewsUnit: 'views',
            viewHint: 'Image will be destroyed after this many views',
            timerType: 'Timer Type',
            never: 'Never',
            countdown: 'Countdown',
            timerDuration: 'Timer Duration',
            secondsUnit: 'seconds',
            timerHint: 'Image will self-destruct after this time',
            passwordProtection: 'Password Protection (Optional)',
            passwordPlaceholder: 'Set a password (optional)',
            createLink: 'Create Vanishing Link',
            uploading: 'Uploading...',
            linkCreated: 'Link Created',
            resultSubtitle: 'Share this link. It will vanish on its own.',
            copyLink: 'Copy',
            maxViewsStat: 'Max Views',
            timerStat: 'Timer',
            uploadAnother: 'Upload Another',
            uploadingOverlay: 'Uploading and processing your image...',
            uploadMethod: 'Using image hosting service',
            preparingImage: 'Preparing image...',
            imageEmbedded: 'Image embedded!',
            footer: 'Vanishot © 2025 | Images self-destruct after viewing or timer expiry | Owner: Alice',
            alertSelectImage: 'Please select an image to upload',
            alertImageSize: 'Image size must be less than 10MB',
            alertImageFormat: 'Please select an image file (JPEG, PNG, GIF, WebP, etc.)',
            uploadFailed: 'Upload failed:',
            uploadFailedSmall: 'Upload failed. Try a smaller image (<3MB) for direct embedding, or the image host is unavailable.',
            uploadFailedLarge: 'Upload failed: File too large for direct embedding. Try a smaller image (<3MB) or the image hosting service is temporarily unavailable.',
            uploadFailedParse: 'Upload succeeded but could not get image URL. The image hosting service may be down.',
            uploadFailedHost: 'Upload failed: The image hosting service returned an error. Please try again.',
            copied: 'Copied!',
            // View page
            passwordRequired: 'Password Required',
            passwordProtected: 'This image is password protected.',
            enterPassword: 'Enter password',
            unlock: 'Unlock',
            incorrectPassword: 'Incorrect password',
            timerDisplay: 's',
            viewsRemaining: 'view(s) remaining',
            closeView: 'Close',
            imageDestroyed: 'Image Destroyed',
            imageDestroyedText: 'This image has self-destructed as scheduled.',
            imageDestroyedSubtitle: 'It is no longer accessible.',
            linkExpired: 'Link Expired or Invalid',
            linkExpiredText: 'The link has expired, has been destroyed, or is invalid.',
            returnToUpload: 'Return to Upload',
            viewFooter: 'Vanishot © 2025 | This image will self-destruct | Owner: Alice',
            themeDark: 'Dark',
            themeLight: 'Light',
            viewsCountFormat: 'Views: {count}/{total}',
            // Screenshot protection API
            screenshotProtection: {
                activate: 'Activate',
                deactivate: 'Deactivate',
                isActive: 'Is Active',
                protectionInfo: 'Protection Info',
                fullscreenAvailable: 'Fullscreen Available',
                pointerLockAvailable: 'Pointer Lock Available',
                clipboardWrite: 'Clipboard Write',
                screenCaptureAvailable: 'Screen Capture Available',
                canvasProtection: 'Canvas Protection'
            }
        },

        es: {
            appTitle: 'Vanishot - Compartición de Imágenes Autodestructivas',
            tagline: 'Subítelo. Compártalo. Mire cómo desaparece.',
            dropZone: 'Arrastre y suelte su imagen aquí',
            dropSubtext: 'o haga clic para explorar',
            removeImage: 'Eliminar imagen',
            expirationSettings: 'Configuración de Expiración',
            maxViews: 'Máximo de Vistas',
            viewsUnit: 'vistas',
            viewHint: 'La imagen se destruirá después de estas vistas',
            timerType: 'Tipo de Temporizador',
            never: 'Nunca',
            countdown: 'Cuenta Regresiva',
            timerDuration: 'Duración del Temporizador',
            secondsUnit: 'segundos',
            timerHint: 'La imagen se autodestruirá después de este tiempo',
            passwordProtection: 'Protección con Contraseña (Opcional)',
            passwordPlaceholder: 'Establecer una contraseña (opcional)',
            createLink: 'Crear Enlace que Desaparece',
            uploading: 'Subiendo...',
            linkCreated: 'Enlace Creado',
            resultSubtitle: 'Comparte este enlace. Desaparecerá solo.',
            copyLink: 'Copiar',
            maxViewsStat: 'Máximo de Vistas',
            timerStat: 'Temporizador',
            uploadAnother: 'Subir Otra',
            uploadingOverlay: 'Subiendo y procesando tu imagen...',
            uploadMethod: 'Usando servicio de alojamiento de imágenes',
            preparingImage: 'Preparando imagen...',
            imageEmbedded: '¡Imagen insertada!',
            footer: 'Vanishot © 2025 | Las imágenes se autodestruyen después de verlas o al expirar el temporizador | Propietario: Alice',
            alertSelectImage: 'Por favor seleccione una imagen para subir',
            alertImageSize: 'El tamaño de la imagen debe ser menor a 10MB',
            alertImageFormat: 'Por favor seleccione un archivo de imagen (JPEG, PNG, GIF, WebP, etc.)',
            uploadFailed: 'Error en la subida:',
            uploadFailedSmall: 'Error en la subida. Intente con una imagen más pequeña (<3MB) para inserción directa, o el servicio de alojamiento no está disponible.',
            uploadFailedLarge: 'Error en la subida: Archivo demasiado grande para inserción directa. Intente con una imagen más pequeña (<3MB) o el servicio de alojamiento no está disponible temporalmente.',
            uploadFailedParse: 'La subida fue exitosa pero no se pudo obtener la URL de la imagen. Es posible que el servicio de alojamiento esté caído.',
            uploadFailedHost: 'Error en la subida: El servicio de alojamiento devolvió un error. Inténtelo de nuevo.',
            copied: '¡Copiado!',
            passwordRequired: 'Contraseña Requerida',
            passwordProtected: 'Esta imagen está protegida con contraseña.',
            enterPassword: 'Ingrese la contraseña',
            unlock: 'Desbloquear',
            incorrectPassword: 'Contraseña incorrecta',
            viewsRemaining: 'vista(s) restante(s)',
            closeView: 'Cerrar',
            imageDestroyed: 'Imagen Destruida',
            imageDestroyedText: 'Esta imagen se ha autodestruido según lo programado.',
            imageDestroyedSubtitle: 'Ya no es accesible.',
            linkExpired: 'Enlace Expirado o Inválido',
            linkExpiredText: 'El enlace ha expirado, ha sido destruido o es inválido.',
            returnToUpload: 'Volver a Subir',
            viewFooter: 'Vanishot © 2025 | Esta imagen se autodestruirá | Propietario: Alice',
            themeDark: 'Oscuro',
            themeLight: 'Claro',
            viewsCountFormat: 'Vistas: {count}/{total}',
            screenshotProtection: {
                activate: 'Activar',
                deactivate: 'Desactivar',
                isActive: 'Activo',
                protectionInfo: 'Información de Protección',
                fullscreenAvailable: 'Pantalla Completa Disponible',
                pointerLockAvailable: 'Bloqueo de Puntero Disponible',
                clipboardWrite: 'Escritura de Portapapeles',
                screenCaptureAvailable: 'Captura de Pantalla Disponible',
                canvasProtection: 'Protección de Canvas'
            }
        },

        fr: {
            appTitle: 'Vanishot - Partage d\'Images Autodestructrices',
            tagline: 'Téléchargez. Partagez. Regardez disparaître.',
            dropZone: 'Glissez-déposez votre image ici',
            dropSubtext: 'ou cliquez pour parcourir',
            removeImage: 'Supprimer l\'image',
            expirationSettings: 'Paramètres d\'Expiration',
            maxViews: 'Vues Maximum',
            viewsUnit: 'vues',
            viewHint: 'L\'image sera détruite après ce nombre de vues',
            timerType: 'Type de Minuterie',
            never: 'Jamais',
            countdown: 'Compte à Rebours',
            timerDuration: 'Durée du Minuterie',
            secondsUnit: 'secondes',
            timerHint: 'L\'image s\'autodétruira après ce délai',
            passwordProtection: 'Protection par Mot de Passe (Optionnel)',
            passwordPlaceholder: 'Définir un mot de passe (optionnel)',
            createLink: 'Créer un Lien Éphémère',
            uploading: 'Chargement...',
            linkCreated: 'Lien Créé',
            resultSubtitle: 'Partagez ce lien. Il disparaîtra de lui-même.',
            copyLink: 'Copier',
            maxViewsStat: 'Vues Max',
            timerStat: 'Minuterie',
            uploadAnother: 'Télécharger Autre',
            uploadingOverlay: 'Chargement et traitement de votre image...',
            uploadMethod: 'Utilisation d\'un service d\'hébergement d\'images',
            preparingImage: 'Préparation de l\'image...',
            imageEmbedded: 'Image intégrée !',
            footer: 'Vanishot © 2025 | Les images s\'autodétruisent après visualisation ou expiration du minuteur | Propriétaire: Alice',
            alertSelectImage: 'Veuillez sélectionner une image à télécharger',
            alertImageSize: 'La taille de l\'image doit être inférieure à 10 Mo',
            alertImageFormat: 'Veuillez sélectionner un fichier image (JPEG, PNG, GIF, WebP, etc.)',
            uploadFailed: 'Échec du chargement :',
            uploadFailedSmall: 'Échec du chargement. Essayez une image plus petite (<3 Mo) pour l\'intégration directe, ou l\'hébergeur est indisponible.',
            uploadFailedLarge: 'Échec du chargement : Fichier trop grand pour l\'intégration directe. Essayez une image plus petite (<3 Mo) ou le service d\'hébergement est temporairement indisponible.',
            uploadFailedParse: 'Le chargement a réussi mais impossible d\'obtenir l\'URL de l\'image. Le service d\'hébergement peut être hors service.',
            uploadFailedHost: 'Échec du chargement : Le service d\'hébergement a retourné une erreur. Veuillez réessayer.',
            copied: 'Copié !',
            passwordRequired: 'Mot de Passe Requis',
            passwordProtected: 'Cette image est protégée par un mot de passe.',
            enterPassword: 'Entrez le mot de passe',
            unlock: 'Déverrouiller',
            incorrectPassword: 'Mot de passe incorrect',
            viewsRemaining: 'vue(s) restante(s)',
            closeView: 'Fermer',
            imageDestroyed: 'Image Détruite',
            imageDestroyedText: 'Cette image s\'est autodétruite comme prévu.',
            imageDestroyedSubtitle: 'Elle n\'est plus accessible.',
            linkExpired: 'Lien Expiré ou Invalide',
            linkExpiredText: 'Le lien a expiré, a été détruit ou est invalide.',
            returnToUpload: 'Retourner à l\'Upload',
            viewFooter: 'Vanishot © 2025 | Cette image s\'autodétruira | Propriétaire: Alice',
            themeDark: 'Sombre',
            themeLight: 'Clair',
            viewsCountFormat: 'Vues : {count}/{total}',
            screenshotProtection: {
                activate: 'Activer',
                deactivate: 'Désactiver',
                isActive: 'Actif',
                protectionInfo: 'Informations de Protection',
                fullscreenAvailable: 'Plein Écran Disponible',
                pointerLockAvailable: 'Verrouillage du Pointeur Disponible',
                clipboardWrite: 'Écriture Presse-papiers',
                screenCaptureAvailable: 'Capture d\'Écran Disponible',
                canvasProtection: 'Protection Canvas'
            }
        },

        de: {
            appTitle: 'Vanishot - Selbstzerstörte Bildfreigabe',
            tagline: 'Hochladen. Teilen. Verschwinden sehen.',
            dropZone: 'Bild hierher ziehen und ablegen',
            dropSubtext: 'oder zum Durchsuchen klicken',
            removeImage: 'Bild entfernen',
            expirationSettings: 'Ablaufeinstellungen',
            maxViews: 'Maximale Ansichten',
            viewsUnit: 'Ansichten',
            viewHint: 'Bild wird nach diesen Ansichten zerstört',
            timerType: 'Zeitgeberart',
            never: 'Nie',
            countdown: 'Countdown',
            timerDuration: 'Zeitgeberdauer',
            secondsUnit: 'Sekunden',
            timerHint: 'Bild zerstört sich selbst nach dieser Zeit',
            passwordProtection: 'Passwortschutz (Optional)',
            passwordPlaceholder: 'Passwort festlegen (optional)',
            createLink: 'Verschwindenden Link erstellen',
            uploading: 'Wird hochgeladen...',
            linkCreated: 'Link erstellt',
            resultSubtitle: 'Teilen Sie diesen Link. Er wird von selbst verschwinden.',
            copyLink: 'Kopieren',
            maxViewsStat: 'Max. Ansichten',
            timerStat: 'Zeitgeber',
            uploadAnother: 'Andere hochladen',
            uploadingOverlay: 'Bild wird hochgeladen und verarbeitet...',
            uploadMethod: 'Bildhosting-Dienst wird verwendet',
            preparingImage: 'Bild wird vorbereitet...',
            imageEmbedded: 'Bild eingebettet!',
            footer: 'Vanishot © 2025 | Bilder zerstören sich selbst nach Ansicht oder Timerablauf | Eigentümer: Alice',
            alertSelectImage: 'Bitte wählen Sie ein Bild zum Hochladen aus',
            alertImageSize: 'Bildgröße muss weniger als 10 MB sein',
            alertImageFormat: 'Bitte wählen Sie eine Bilddatei (JPEG, PNG, GIF, WebP, etc.)',
            uploadFailed: 'Upload fehlgeschlagen:',
            uploadFailedSmall: 'Upload fehlgeschlagen. Versuchen Sie ein kleineres Bild (<3 MB) für die direkte Einbettung oder der Host ist nicht verfügbar.',
            uploadFailedLarge: 'Upload fehlgeschlagen: Datei zu groß für direkte Einbettung. Versuchen Sie ein kleineres Bild (<3 MB) oder der Hosting-Dienst ist vorübergehend nicht verfügbar.',
            uploadFailedParse: 'Upload erfolgreich, aber Bild-URL konnte nicht abgerufen werden. Der Hosting-Dienst ist möglicherweise ausgefallen.',
            uploadFailedHost: 'Upload fehlgeschlagen: Der Hosting-Dienst hat einen Fehler zurückgegeben. Bitte versuchen Sie es erneut.',
            copied: 'Kopiert!',
            passwordRequired: 'Passwort erforderlich',
            passwordProtected: 'Dieses Bild ist passwortgeschützt.',
            enterPassword: 'Passwort eingeben',
            unlock: 'Entsperren',
            incorrectPassword: 'Falsches Passwort',
            viewsRemaining: 'Ansicht(en) verbleibend',
            closeView: 'Schließen',
            imageDestroyed: 'Bild zerstört',
            imageDestroyedText: 'Dieses Bild hat sich wie geplant selbst zerstört.',
            imageDestroyedSubtitle: 'Es ist nicht mehr zugänglich.',
            linkExpired: 'Link abgelaufen oder ungültig',
            linkExpiredText: 'Der Link ist abgelaufen, wurde zerstört oder ist ungültig.',
            returnToUpload: 'Zurück zum Upload',
            viewFooter: 'Vanishot © 2025 | Dieses Bild zerstört sich selbst | Eigentümer: Alice',
            themeDark: 'Dunkel',
            themeLight: 'Hell',
            viewsCountFormat: 'Ansichten: {count}/{total}',
            screenshotProtection: {
                activate: 'Aktivieren',
                deactivate: 'Deaktivieren',
                isActive: 'Aktiv',
                protectionInfo: 'Schutzinformationen',
                fullscreenAvailable: 'Vollbild verfügbar',
                pointerLockAvailable: 'Zeigersperre verfügbar',
                clipboardWrite: 'Zwischenablage-Schreiben',
                screenCaptureAvailable: 'Bildschirmaufnahme verfügbar',
                canvasProtection: 'Canvas-Schutz'
            }
        },

        pt: {
            appTitle: 'Vanishot - Compartilhamento de Imagens Autodestrutivas',
            tagline: 'Envie. Compartilhe. Assista desaparecer.',
            dropZone: 'Arraste e solte sua imagem aqui',
            dropSubtext: 'ou clique para explorar',
            removeImage: 'Remover imagem',
            expirationSettings: 'Configurações de Expiração',
            maxViews: 'Máximo de Visualizações',
            viewsUnit: 'visualizações',
            viewHint: 'A imagem será destruída após estas visualizações',
            timerType: 'Tipo de Temporizador',
            never: 'Nunca',
            countdown: 'Contagem Regressiva',
            timerDuration: 'Duração do Temporizador',
            secondsUnit: 'segundos',
            timerHint: 'A imagem se autodestruirá após este tempo',
            passwordProtection: 'Proteção por Senha (Opcional)',
            passwordPlaceholder: 'Definir uma senha (opcional)',
            createLink: 'Criar Link que Desaparece',
            uploading: 'Enviando...',
            linkCreated: 'Link Criado',
            resultSubtitle: 'Compartilhe este link. Ele desaparecerá sozinho.',
            copyLink: 'Copiar',
            maxViewsStat: 'Máx. Visualizações',
            timerStat: 'Temporizador',
            uploadAnother: 'Enviar Outra',
            uploadingOverlay: 'Enviando e processando sua imagem...',
            uploadMethod: 'Usando serviço de hospedagem de imagens',
            preparingImage: 'Preparando imagem...',
            imageEmbedded: 'Imagem incorporada!',
            footer: 'Vanishot © 2025 | Imagens se autodestroem após visualização ou expiração do temporizador | Proprietário: Alice',
            alertSelectImage: 'Por favor, selecione uma imagem para enviar',
            alertImageSize: 'O tamanho da imagem deve ser menor que 10MB',
            alertImageFormat: 'Por favor, selecione um arquivo de imagem (JPEG, PNG, GIF, WebP, etc.)',
            uploadFailed: 'Falha no upload:',
            uploadFailedSmall: 'Falha no upload. Tente uma imagem menor (<3MB) para incorporação direta ou o host está indisponível.',
            uploadFailedLarge: 'Falha no upload: Arquivo grande demais para incorporação direta. Tente uma imagem menor (<3MB) ou o serviço de hospedagem está temporariamente indisponível.',
            uploadFailedParse: 'Upload bem-sucedido, mas não foi possível obter a URL da imagem. O serviço de hospedagem pode estar fora do ar.',
            uploadFailedHost: 'Falha no upload: O serviço de hospedagem retornou um erro. Tente novamente.',
            copied: 'Copiado!',
            passwordRequired: 'Senha Necessária',
            passwordProtected: 'Esta imagem é protegida por senha.',
            enterPassword: 'Digite a senha',
            unlock: 'Desbloquear',
            incorrectPassword: 'Senha incorreta',
            viewsRemaining: 'visualização(ões) restante(s)',
            closeView: 'Fechar',
            imageDestroyed: 'Imagem Destruída',
            imageDestroyedText: 'Esta imagem se autodestruiu conforme programado.',
            imageDestroyedSubtitle: 'Não está mais acessível.',
            linkExpired: 'Link Expirado ou Inválido',
            linkExpiredText: 'O link expirou, foi destruído ou é inválido.',
            returnToUpload: 'Voltar para Upload',
            viewFooter: 'Vanishot © 2025 | Esta imagem se autodestruirá | Proprietário: Alice',
            themeDark: 'Escuro',
            themeLight: 'Claro',
            viewsCountFormat: 'Visualizações: {count}/{total}',
            screenshotProtection: {
                activate: 'Ativar',
                deactivate: 'Desativar',
                isActive: 'Ativo',
                protectionInfo: 'Informações de Proteção',
                fullscreenAvailable: 'Tela Cheia Disponível',
                pointerLockAvailable: 'Bloqueio de Ponteiro Disponível',
                clipboardWrite: 'Escrita de Área de Transferência',
                screenCaptureAvailable: 'Captura de Tela Disponível',
                canvasProtection: 'Proteção de Canvas'
            }
        },

        ja: {
            appTitle: 'Vanishot - 自己破壊イメージ共有',
            tagline: 'アップロードする。共有する。消えるのを見る。',
            dropZone: 'ここに画像をドラッグ＆ドロップ',
            dropSubtext: 'またはクリックして参照',
            removeImage: '画像を削除',
            expirationSettings: '期限設定',
            maxViews: '最大ビュー数',
            viewsUnit: 'ビュー',
            viewHint: 'このビュー数に達すると画像が破壊されます',
            timerType: 'タイマータイプ',
            never: 'なし',
            countdown: 'カウントダウン',
            timerDuration: 'タイマー期間',
            secondsUnit: '秒',
            timerHint: 'この時間後、画像が自己破壊されます',
            passwordProtection: 'パスワード保護 (オプション)',
            passwordPlaceholder: 'パスワードを設定 (オプション)',
            createLink: '消えるリンクを作成',
            uploading: 'アップロード中...',
            linkCreated: 'リンクが作成されました',
            resultSubtitle: 'このリンクを共有してください。自分で消えます。',
            copyLink: 'コピー',
            maxViewsStat: '最大ビュー数',
            timerStat: 'タイマー',
            uploadAnother: '別のアップロード',
            uploadingOverlay: '画像をアップロードおよび処理中...',
            uploadMethod: '画像ホスティングサービスを使用',
            preparingImage: '画像を準備中...',
            imageEmbedded: '画像が埋め込まれました！',
            footer: 'Vanishot © 2025 | 画像は表示後またはタイマー終了後に自己破壊されます | 所有者: Alice',
            alertSelectImage: 'アップロードする画像を選択してください',
            alertImageSize: '画像サイズは10MB未満でなければなりません',
            alertImageFormat: '画像ファイルを選択してください (JPEG, PNG, GIF, WebPなど)',
            uploadFailed: 'アップロード失敗：',
            uploadFailedSmall: 'アップロード失敗。直接埋め込みには小さい画像(<3MB)を試すか、ホストが利用できません。',
            uploadFailedLarge: 'アップロード失敗：ファイルが大きすぎて直接埋め込みできません。小さい画像(<3MB)を試すか、ホスティングサービスが一時的に利用できません。',
            uploadFailedParse: 'アップロードは成功しましたが、画像URLを取得できませんでした。ホスティングサービスがダウンしている可能性があります。',
            uploadFailedHost: 'アップロード失敗：ホスティングサービスがエラーを返しました。もう一度お試しください。',
            copied: 'コピーしました！',
            passwordRequired: 'パスワードが必要',
            passwordProtected: 'この画像はパスワードで保護されています。',
            enterPassword: 'パスワードを入力',
            unlock: 'アンロック',
            incorrectPassword: 'パスワードが間違っています',
            viewsRemaining: '残りビュー数',
            closeView: '閉じる',
            imageDestroyed: '画像が破壊されました',
            imageDestroyedText: 'この画像は予定通り自己破壊されました。',
            imageDestroyedSubtitle: 'もうアクセスできません。',
            linkExpired: 'リンクが期限切れまたは無効',
            linkExpiredText: 'リンクは期限切れ、破壊された、または無効です。',
            returnToUpload: 'アップロードに戻る',
            viewFooter: 'Vanishot © 2025 | この画像は自己破壊します | 所有者: Alice',
            themeDark: 'ダーク',
            themeLight: 'ライト',
            viewsCountFormat: 'ビュー: {count}/{total}',
            screenshotProtection: {
                activate: 'アクティブ化',
                deactivate: '無効化',
                isActive: 'アクティブ',
                protectionInfo: '保護情報',
                fullscreenAvailable: 'フルスクリーン利用可能',
                pointerLockAvailable: 'ポインタロック利用可能',
                clipboardWrite: 'クリップボード書き込み',
                screenCaptureAvailable: '画面キャプチャ利用可能',
                canvasProtection: 'キャンバス保護'
            }
        },

        zh: {
            appTitle: 'Vanishot - 自我销毁图像分享',
            tagline: '上传。分享。观看它消失。',
            dropZone: '在此拖放您的图像',
            dropSubtext: '或点击浏览',
            removeImage: '移除图像',
            expirationSettings: '过期设置',
            maxViews: '最大浏览次数',
            viewsUnit: '次浏览',
            viewHint: '图像将在此次数浏览后销毁',
            timerType: '计时器类型',
            never: '从不',
            countdown: '倒计时',
            timerDuration: '计时器时长',
            secondsUnit: '秒',
            timerHint: '图像将在此时间后自我销毁',
            passwordProtection: '密码保护 (可选)',
            passwordPlaceholder: '设置密码 (可选)',
            createLink: '创建消失链接',
            uploading: '上传中...',
            linkCreated: '链接已创建',
            resultSubtitle: '分享此链接。它会自行消失。',
            copyLink: '复制',
            maxViewsStat: '最大浏览次数',
            timerStat: '计时器',
            uploadAnother: '上传另一个',
            uploadingOverlay: '正在上传并处理您的图像...',
            uploadMethod: '使用图像托管服务',
            preparingImage: '准备图像中...',
            imageEmbedded: '图像已嵌入！',
            footer: 'Vanishot © 2025 | 图像在查看后或计时器到期后自行销毁 | 所有者: Alice',
            alertSelectImage: '请选择要上传的图像',
            alertImageSize: '图像大小必须小于10MB',
            alertImageFormat: '请选择图像文件 (JPEG, PNG, GIF, WebP等)',
            uploadFailed: '上传失败：',
            uploadFailedSmall: '上传失败。请尝试较小的图像 (<3MB) 进行直接嵌入，或主机不可用。',
            uploadFailedLarge: '上传失败：文件太大，无法直接嵌入。请尝试较小的图像 (<3MB)，或托管服务暂时不可用。',
            uploadFailedParse: '上传成功，但无法获取图像URL。托管服务可能已宕机。',
            uploadFailedHost: '上传失败：托管服务返回了错误。请重试。',
            copied: '已复制！',
            passwordRequired: '需要密码',
            passwordProtected: '此图像受密码保护。',
            enterPassword: '输入密码',
            unlock: '解锁',
            incorrectPassword: '密码错误',
            viewsRemaining: '剩余浏览次数',
            closeView: '关闭',
            imageDestroyed: '图像已销毁',
            imageDestroyedText: '此图像已按计划自我销毁。',
            imageDestroyedSubtitle: '不再可访问。',
            linkExpired: '链接已过期或无效',
            linkExpiredText: '链接已过期、已销毁或无效。',
            returnToUpload: '返回上传',
            viewFooter: 'Vanishot © 2025 | 此图像将自我销毁 | 所有者: Alice',
            themeDark: '深色',
            themeLight: '浅色',
            viewsCountFormat: '浏览：{count}/{total}',
            screenshotProtection: {
                activate: '激活',
                deactivate: '停用',
                isActive: '活跃',
                protectionInfo: '保护信息',
                fullscreenAvailable: '全屏可用',
                pointerLockAvailable: '指针锁定可用',
                clipboardWrite: '剪贴板写入',
                screenCaptureAvailable: '屏幕捕获可用',
                canvasProtection: '画布保护'
            }
        },

        ko: {
            appTitle: 'Vanishot - 자멸 이미지 공유',
            tagline: '업로드하세요. 공유하세요. 사라지는 것을 보세요.',
            dropZone: '여기에 이미지를 드래그하여 놓으세요',
            dropSubtext: '또는 클릭하여 찾아보세요',
            removeImage: '이미지 제거',
            expirationSettings: '만료 설정',
            maxViews: '최대 조회수',
            viewsUnit: '조회',
            viewHint: '이 조회수 이후 이미지가 파괴됩니다',
            timerType: '타이머 유형',
            never: '없음',
            countdown: '카운트다운',
            timerDuration: '타이머 시간',
            secondsUnit: '초',
            timerHint: '이 시간 후 이미지가 자멸합니다',
            passwordProtection: '비밀번호 보호 (선택)',
            passwordPlaceholder: '비밀번호 설정 (선택)',
            createLink: '사라지는 링크 생성',
            uploading: '업로드 중...',
            linkCreated: '링크가 생성되었습니다',
            resultSubtitle: '이 링크를 공유하세요. 스스로 사라집니다.',
            copyLink: '복사',
            maxViewsStat: '최대 조회수',
            timerStat: '타이머',
            uploadAnother: '다시 업로드',
            uploadingOverlay: '이미지를 업로드하고 처리하는 중...',
            uploadMethod: '이미지 호스팅 서비스 사용 중',
            preparingImage: '이미지를 준비하는 중...',
            imageEmbedded: '이미지 삽입 완료!',
            footer: 'Vanishot © 2025 | 이미지는 조회 후 또는 타이머 만료 시 자멸합니다 | 소유자: Alice',
            alertSelectImage: '업로드할 이미지를 선택하세요',
            alertImageSize: '이미지 크기는 10MB 미만이어야 합니다',
            alertImageFormat: '이미지 파일을 선택하세요 (JPEG, PNG, GIF, WebP 등)',
            uploadFailed: '업로드 실패:',
            uploadFailedSmall: '업로드 실패. 직접 삽입하려면 더 작은 이미지(<3MB)를 시도하거나 호스트를 사용할 수 없습니다.',
            uploadFailedLarge: '업로드 실패: 파일이 너무 커서 직접 삽입할 수 없습니다. 더 작은 이미지(<3MB)를 시도하거나 호스팅 서비스가 일시적으로 사용할 수 없습니다.',
            uploadFailedParse: '업로드는 성공했지만 이미지 URL을 가져올 수 없습니다. 호스팅 서비스가 다운되었을 수 있습니다.',
            uploadFailedHost: '업로드 실패: 호스팅 서비스가 오류를 반환했습니다. 다시 시도하세요.',
            copied: '복사됨!',
            passwordRequired: '비밀번호 필요',
            passwordProtected: '이 이미지는 비밀번호로 보호됩니다.',
            enterPassword: '비밀번호 입력',
            unlock: '해제',
            incorrectPassword: '비밀번호가 잘못되었습니다',
            viewsRemaining: '남은 조회수',
            closeView: '닫기',
            imageDestroyed: '이미지 파괴됨',
            imageDestroyedText: '이 이미지는 예정대로 자멸했습니다.',
            imageDestroyedSubtitle: '더 이상 접근할 수 없습니다.',
            linkExpired: '링크 만료 또는 무효',
            linkExpiredText: '링크가 만료되었거나 파괴되었거나 무효입니다.',
            returnToUpload: '업로드로 돌아가기',
            viewFooter: 'Vanishot © 2025 | 이미지는 자멸합니다 | 소유자: Alice',
            themeDark: '다크',
            themeLight: '라이트',
            viewsCountFormat: '조회: {count}/{total}',
            screenshotProtection: {
                activate: '활성화',
                deactivate: '비활성화',
                isActive: '활성',
                protectionInfo: '보호 정보',
                fullscreenAvailable: '전체 화면 사용 가능',
                pointerLockAvailable: '포인터 잠금 사용 가능',
                clipboardWrite: '클립보드 쓰기',
                screenCaptureAvailable: '화면 캡처 사용 가능',
                canvasProtection: '캔버스 보호'
            }
        },

        ar: {
            appTitle: 'فانيشوت - مشاركة الصور التي تنتهي تلقائياً',
            tagline: 'حمّله. شاركه. شاهده يختفي.',
            dropZone: 'اسحب وأفلت صورتك هنا',
            dropSubtext: 'أو انقر للتصفح',
            removeImage: 'إزالة الصورة',
            expirationSettings: 'إعدادات الانتهاء',
            maxViews: 'الحد الأقصى للعرض',
            viewsUnit: 'عرض',
            viewHint: 'سيتم تدمير الصورة بعد هذا العدد من المشاهدات',
            timerType: 'نوع المؤقت',
            never: 'أبداً',
            countdown: 'عد تنازلي',
            timerDuration: 'مدة المؤقت',
            secondsUnit: 'ثواني',
            timerHint: 'ستتدمر الصورة تلقائياً بعد هذا الوقت',
            passwordProtection: 'حماية بكلمة مرور (اختياري)',
            passwordPlaceholder: 'تعيين كلمة مرور (اختياري)',
            createLink: 'إنشاء رابط ينتهي',
            uploading: 'جاري الرفع...',
            linkCreated: 'تم إنشاء الرابط',
            resultSubtitle: 'شارك هذا الرابط. سيختفي من تلقاء نفسه.',
            copyLink: 'نسخ',
            maxViewsStat: 'الحد الأقصى للعرض',
            timerStat: 'المؤقت',
            uploadAnother: 'رفع آخر',
            uploadingOverlay: 'جاري رفع ومعالجة صورتك...',
            uploadMethod: 'يتم استخدام خدمة استضافة الصور',
            preparingImage: 'جاري تجهيز الصورة...',
            imageEmbedded: 'تم تضمين الصورة!',
            footer: 'Vanishot © 2025 | الصور تنتهي تلقائياً بعد المشاهدة أو انتهاء المؤقت | المالك: Alice',
            alertSelectImage: 'يرجى اختيار صورة للرفع',
            alertImageSize: 'حجم الصورة يجب أن يكون أقل من 10 ميجابايت',
            alertImageFormat: 'يرجى اختيار ملف صورة (JPEG, PNG, GIF, WebP, إلخ)',
            uploadFailed: 'فشل الرفع:',
            uploadFailedSmall: 'فشل الرفع. حاول صورة أصغر (<3 ميجابايت) للتضمين المباشر أو المضيف غير متاح.',
            uploadFailedLarge: 'فشل الرفع: الملف كبير جداً للتضمين المباشر. حاول صورة أصغر (<3 ميجابايت) أو خدمة الاستضافة غير متاحة مؤقتاً.',
            uploadFailedParse: 'تم الرفع بنجاح ولكن تعذر الحصول على رابط الصورة. ربما خدمة الاستضافة معطلة.',
            uploadFailedHost: 'فشل الرفع: خدمة الاستضافة أعادت خطأ. حاول مرة أخرى.',
            copied: 'تم النسخ!',
            passwordRequired: 'كلمة مرور مطلوبة',
            passwordProtected: 'هذه الصورة محمية بكلمة مرور.',
            enterPassword: 'أدخل كلمة المرور',
            unlock: 'فتح',
            incorrectPassword: 'كلمة المرور غير صحيحة',
            viewsRemaining: 'عرض (ع) المتبقي',
            closeView: 'إغلاق',
            imageDestroyed: 'تم تدمير الصورة',
            imageDestroyedText: 'تم تدمير هذه الصورة تلقائياً كما هو مقرر.',
            imageDestroyedSubtitle: 'لم يعد الوصول إليها متاحاً.',
            linkExpired: 'الرابط منتهي أو غير صالح',
            linkExpiredText: 'الرابط منتهي أو تم تدميره أو غير صالح.',
            returnToUpload: 'العودة إلى الرفع',
            viewFooter: 'Vanishot © 2025 | هذه الصورة ستنتهي تلقائياً | المالك: Alice',
            themeDark: 'داكن',
            themeLight: 'فاتح',
            viewsCountFormat: 'المشاهدات: {count}/{total}',
            screenshotProtection: {
                activate: 'تفعيل',
                deactivate: 'تعطيل',
                isActive: 'نشط',
                protectionInfo: 'معلومات الحماية',
                fullscreenAvailable: 'الشاشة الكاملة متاحة',
                pointerLockAvailable: 'قفل المؤشر متاح',
                clipboardWrite: 'كتابة الحافظة',
                screenCaptureAvailable: 'التقاط الشاشة متاح',
                canvasProtection: 'حماية Canvas'
            }
        },

        hi: {
            appTitle: 'Vanishot - स्व-विनाश इमेश साझाकरण',
            tagline: 'अपलोड करें। साझा करें। गायब होते देखें।',
            dropZone: 'यहाँ अपनी इमेज ड्रैग और ड्रॉप करें',
            dropSubtext: 'या ब्राउज़ करने के लिए क्लिक करें',
            removeImage: 'इमेज हटाएं',
            expirationSettings: 'समाप्ति सेटिंग्स',
            maxViews: 'अधिकतम व्यू',
            viewsUnit: 'व्यू',
            viewHint: 'इतने व्यू के बाद इमेज नष्ट हो जाएगी',
            timerType: 'टाइमर प्रकार',
            never: 'कभी नहीं',
            countdown: 'काउंटडाउन',
            timerDuration: 'टाइमर अवधि',
            secondsUnit: 'सेकंड',
            timerHint: 'इस समय के बाद इमेज स्व-नष्ट हो जाएगी',
            passwordProtection: 'पासवर्ड सुरक्षा (वैकल्पिक)',
            passwordPlaceholder: 'पासवर्ड सेट करें (वैकल्पिक)',
            createLink: 'विलुप्त होने वाला लिंक बनाएं',
            uploading: 'अपलोड हो रहा है...',
            linkCreated: 'लिंक बनाया गया',
            resultSubtitle: 'यह लिंक साझा करें। यह खुद ही गायब हो जाएगा।',
            copyLink: 'कॉपी करें',
            maxViewsStat: 'अधिकतम व्यू',
            timerStat: 'टाइमर',
            uploadAnother: 'अपलोड करें',
            uploadingOverlay: 'आपकी इमेज अपलोड और प्रोसेस हो रही है...',
            uploadMethod: 'इमेज होस्टिंग सेवा का उपयोग किया जा रहा है',
            preparingImage: 'इमेज तैयार की जा रही है...',
            imageEmbedded: 'इमेज एम्बेड की गई!',
            footer: 'Vanishot © 2025 | इमेज देखने या टाइमर समाप्त होने पर स्व-नष्ट हो जाती है | मालिक: Alice',
            alertSelectImage: 'कृपया अपलोड के लिए एक इमेज चुनें',
            alertImageSize: 'इमेज का आकार 10MB से कम होना चाहिए',
            alertImageFormat: 'कृपया एक इमेज फाइल चुनें (JPEG, PNG, GIF, WebP, आदि)',
            uploadFailed: 'अपलोड विफल:',
            uploadFailedSmall: 'अपलोड विफल। सीधे एम्बेड करने के लिए छोटी इमेज (<3MB) का प्रयास करें या होस्ट उपलब्ध नहीं है।',
            uploadFailedLarge: 'अपलोड विफल: फाइल बहुत बड़ी है सीधे एम्बेड करने के लिए। छोटी इमेज (<3MB) का प्रयास करें या होस्टिंग सेवा अस्थायी रूप से उपलब्ध नहीं है।',
            uploadFailedParse: 'अपलोड सफल हुआ लेकिन इमेज URL प्राप्त नहीं किया जा सका। होस्टिंग सेवा डाउन हो सकती है।',
            uploadFailedHost: 'अपलोड विफल: होस्टिंग सेवा ने त्रुटि लौटाई। कृपया पुनः प्रयास करें।',
            copied: 'कॉपी किया गया!',
            passwordRequired: 'पासवर्ड आवश्यक',
            passwordProtected: 'यह इमेज पासवर्ड से सुरक्षित है।',
            enterPassword: 'पासवर्ड दर्ज करें',
            unlock: 'अनलॉक करें',
            incorrectPassword: 'गलत पासवर्ड',
            viewsRemaining: 'बची व्यू',
            closeView: 'बंद करें',
            imageDestroyed: 'इमेज नष्ट हो गई',
            imageDestroyedText: 'यह इमेज योजनानुसार स्व-नष्ट हो गई।',
            imageDestroyedSubtitle: 'यह अब उपलब्ध नहीं है।',
            linkExpired: 'लिंक समाप्त या अमान्य',
            linkExpiredText: 'लिंक समाप्त हो गया, नष्ट हो गया या अमान्य है।',
            returnToUpload: 'अपलोड पर वापस जाएं',
            viewFooter: 'Vanishot © 2025 | यह इमेज स्व-नष्ट हो जाएगी | मालिक: Alice',
            themeDark: 'डार्क',
            themeLight: 'लाइट',
            viewsCountFormat: 'व्यू: {count}/{total}',
            screenshotProtection: {
                activate: 'सक्रिय करें',
                deactivate: 'अक्षम करें',
                isActive: 'सक्रिय',
                protectionInfo: 'सुरक्षा जानकारी',
                fullscreenAvailable: 'फुलस्क्रीन उपलब्ध',
                pointerLockAvailable: 'पॉइंटर लॉक उपलब्ध',
                clipboardWrite: 'क्लिपबोर्ड लेखन',
                screenCaptureAvailable: 'स्क्रीन कैप्चर उपलब्ध',
                canvasProtection: 'कैनवास सुरक्षा'
            }
        },

        ru: {
            appTitle: 'Vanishot - Самоуничтожающийся обмен изображениями',
            tagline: 'Загрузите. Поделитесь. Наблюдайте исчезновение.',
            dropZone: 'Перетащите и бросьте вашу изображение сюда',
            dropSubtext: 'или нажмите, чтобы выбрать файл',
            removeImage: 'Удалить изображение',
            expirationSettings: 'Настройки истечения',
            maxViews: 'Максимальное количество просмотров',
            viewsUnit: 'просмотров',
            viewHint: 'Изображение будет уничтожено после этого количества просмотров',
            timerType: 'Тип таймера',
            never: 'Никогда',
            countdown: 'Обратный отсчет',
            timerDuration: 'Длительность таймера',
            secondsUnit: 'секунд',
            timerHint: 'Изображение уничтожится само через это время',
            passwordProtection: 'Защита паролем (опционально)',
            passwordPlaceholder: 'Задать пароль (опционально)',
            createLink: 'Создать исчезающую ссылку',
            uploading: 'Загрузка...',
            linkCreated: 'Ссылка создана',
            resultSubtitle: 'Поделитесь этой ссылкой. Она исчезнет сама.',
            copyLink: 'Копировать',
            maxViewsStat: 'Макс. просмотров',
            timerStat: 'Таймер',
            uploadAnother: 'Загрузить другую',
            uploadingOverlay: 'Загрузка и обработка вашего изображения...',
            uploadMethod: 'Используется сервис хостинга изображений',
            preparingImage: 'Подготовка изображения...',
            imageEmbedded: 'Изображение встроено!',
            footer: 'Vanishot © 2025 | Изображения самоуничтожаются после просмотра или истечения таймера | Владелец: Alice',
            alertSelectImage: 'Пожалуйста, выберите изображение для загрузки',
            alertImageSize: 'Размер изображения должен быть менее 10 МБ',
            alertImageFormat: 'Пожалуйста, выберите файл изображения (JPEG, PNG, GIF, WebP и т. д.)',
            uploadFailed: 'Ошибка загрузки:',
            uploadFailedSmall: 'Ошибка загрузки. Попробуйте меньшее изображение (<3 МБ) для прямой вставки или хост недоступен.',
            uploadFailedLarge: 'Ошибка загрузки: файл слишком велик для прямой вставки. Попробуйте меньшее изображение (<3 МБ) или сервис хостинга временно недоступен.',
            uploadFailedParse: 'Загрузка прошла успешно, но не удалось получить URL изображения. Сервис хостинга может быть недоступен.',
            uploadFailedHost: 'Ошибка загрузки: сервис хостинга вернул ошибку. Попробуйте снова.',
            copied: 'Скопировано!',
            passwordRequired: 'Пароль необходим',
            passwordProtected: 'Это изображение защищено паролем.',
            enterPassword: 'Введите пароль',
            unlock: 'Разблокировать',
            incorrectPassword: 'Неверный пароль',
            viewsRemaining: 'осталось просмотров',
            closeView: 'Закрыть',
            imageDestroyed: 'Изображение уничтожено',
            imageDestroyedText: 'Это изображение самоуничтожилось, как и было запланировано.',
            imageDestroyedSubtitle: 'Оно больше недоступно.',
            linkExpired: 'Ссылка истекла или недействительна',
            linkExpiredText: 'Ссылка истекла, была уничтожена или недействительна.',
            returnToUpload: 'Вернуться к загрузке',
            viewFooter: 'Vanishot © 2025 | Это изображение самоуничтожится | Владелец: Alice',
            themeDark: 'Тёмная',
            themeLight: 'Светлая',
            viewsCountFormat: 'Просмотры: {count}/{total}',
            screenshotProtection: {
                activate: 'Активировать',
                deactivate: 'Деактивировать',
                isActive: 'Активно',
                protectionInfo: 'Информация о защите',
                fullscreenAvailable: 'Полноэкранный режим доступен',
                pointerLockAvailable: 'Блокировка указателя доступна',
                clipboardWrite: 'Запись в буфер обмена',
                screenCaptureAvailable: 'Захват экрана доступен',
                canvasProtection: 'Защита Canvas'
            }
        },

        it: {
            appTitle: 'Vanishot - Condivisione Immagini Autodistruttive',
            tagline: 'Carica. Condividi. Guarda scomparire.',
            dropZone: 'Trascina e rilascia la tua immagine qui',
            dropSubtext: 'o clicca per sfogliare',
            removeImage: 'Rimuovi immagine',
            expirationSettings: 'Impostazioni di Scadenza',
            maxViews: 'Visualizzazioni Massime',
            viewsUnit: 'visualizzazioni',
            viewHint: 'L\'immagine verrà distrutta dopo queste visualizzazioni',
            timerType: 'Tipo di Timer',
            never: 'Mai',
            countdown: 'Conto alla Rovescia',
            timerDuration: 'Durata del Timer',
            secondsUnit: 'secondi',
            timerHint: 'L\'immagine si autodistruggerà dopo questo tempo',
            passwordProtection: 'Protezione Password (Opzionale)',
            passwordPlaceholder: 'Imposta una password (opzionale)',
            createLink: 'Crea Link che Scompare',
            uploading: 'Caricamento...',
            linkCreated: 'Link Creato',
            resultSubtitle: 'Condividi questo link. Scomparirà da solo.',
            copyLink: 'Copia',
            maxViewsStat: 'Max. Visualizzazioni',
            timerStat: 'Timer',
            uploadAnother: 'Carica Un\'Altra',
            uploadingOverlay: 'Caricamento e elaborazione della tua immagine...',
            uploadMethod: 'Utilizzo di un servizio di hosting di immagini',
            preparingImage: 'Preparazione immagine...',
            imageEmbedded: 'Immagine incorporata!',
            footer: 'Vanishot © 2025 | Le immagini si autodistruggono dopo la visualizzazione o la scadenza del timer | Proprietario: Alice',
            alertSelectImage: 'Per favore seleziona un\'immagine da caricare',
            alertImageSize: 'La dimensione dell\'immagine deve essere inferiore a 10MB',
            alertImageFormat: 'Per favore seleziona un file immagine (JPEG, PNG, GIF, WebP, ecc.)',
            uploadFailed: 'Caricamento fallito:',
            uploadFailedSmall: 'Caricamento fallito. Prova un\'immagine più piccola (<3MB) per l\'incorporamento diretto o l\'host non è disponibile.',
            uploadFailedLarge: 'Caricamento fallito: File troppo grande per l\'incorporamento diretto. Prova un\'immagine più piccola (<3MB) o il servizio di hosting è temporaneamente non disponibile.',
            uploadFailedParse: 'Caricamento riuscito ma impossibile ottenere l\'URL dell\'immagine. Il servizio di hosting potrebbe essere fuori servizio.',
            uploadFailedHost: 'Caricamento fallito: Il servizio di hosting ha restituito un errore. Riprova.',
            copied: 'Copiato!',
            passwordRequired: 'Password Richiesta',
            passwordProtected: 'Questa immagine è protetta da password.',
            enterPassword: 'Inserisci la password',
            unlock: 'Sblocca',
            incorrectPassword: 'Password errata',
            viewsRemaining: 'visualizzazione(i) rimanente(i)',
            closeView: 'Chiudi',
            imageDestroyed: 'Immagine Distrutta',
            imageDestroyedText: 'Questa immagine si è autodistrutta come previsto.',
            imageDestroyedSubtitle: 'Non è più accessibile.',
            linkExpired: 'Link Scaduto o Non Valido',
            linkExpiredText: 'Il link è scaduto, è stato distrutto o non è valido.',
            returnToUpload: 'Torna al Caricamento',
            viewFooter: 'Vanishot © 2025 | Questa immagine si autodistruggerà | Proprietario: Alice',
            themeDark: 'Scuro',
            themeLight: 'Chiaro',
            viewsCountFormat: 'Visualizzazioni: {count}/{total}',
            screenshotProtection: {
                activate: 'Attiva',
                deactivate: 'Disattiva',
                isActive: 'Attivo',
                protectionInfo: 'Informazioni di Protezione',
                fullscreenAvailable: 'Schermo Intero Disponibile',
                pointerLockAvailable: 'Blocco Punta Disponibile',
                clipboardWrite: 'Scrittura Appunti',
                screenCaptureAvailable: 'Cattura Schermo Disponibile',
                canvasProtection: 'Protezione Canvas'
            }
        },

        tr: {
            appTitle: 'Vanishot - Kendi Kendini Yıkıcı Resim Paylaşımı',
            tagline: 'Yükle. Paylaş. Kaybolmasını İzle.',
            dropZone: 'Resminizi buraya sürükleyip bırakın',
            dropSubtext: 'veya tıklayarak dosyaları gözatın',
            removeImage: 'Resmi Kaldır',
            expirationSettings: 'Son Kullanma Ayarları',
            maxViews: 'Maksimum Görüntüleme',
            viewsUnit: 'görüntüleme',
            viewHint: 'Resim bu kadar görüntülenmeden sonra yok edilecek',
            timerType: 'Zamanlayıcı Türü',
            never: 'Hiçbiri',
            countdown: 'Sayım Geriye Dönüyor',
            timerDuration: 'Zamanlayıcı Süresi',
            secondsUnit: 'saniye',
            timerHint: 'Resim bu süre sonra kendini yok edecek',
            passwordProtection: 'Şifre Koruması (Opsiyonel)',
            passwordPlaceholder: 'Şifre belirleyin (opsiyonel)',
            createLink: 'Kaybolan Link Oluştur',
            uploading: 'Yükleniyor...',
            linkCreated: 'Link Oluşturuldu',
            resultSubtitle: 'Bu linki paylaşın. Kendiliğinden kaybolacaktır.',
            copyLink: 'Kopyala',
            maxViewsStat: 'Maks. Görüntüleme',
            timerStat: 'Zamanlayıcı',
            uploadAnother: 'Başka Birini Yükle',
            uploadingOverlay: 'Resminiz yükleniyor ve işleniyor...',
            uploadMethod: 'Resim barındırma servisi kullanılıyor',
            preparingImage: 'Resim hazırlanıyor...',
            imageEmbedded: 'Resim eklendi!',
            footer: 'Vanishot © 2025 | Resimler görüntülenme veya zamanlayıcı sonunda kendini yok eder | Sahibi: Alice',
            alertSelectImage: 'Lütfen yüklenecek bir resim seçin',
            alertImageSize: 'Resim boyutu 10 MB\'dan az olmalıdır',
            alertImageFormat: 'Lütfen bir resim dosyası seçin (JPEG, PNG, GIF, WebP vb.)',
            uploadFailed: 'Yükleme başarısız oldu:',
            uploadFailedSmall: 'Yükleme başarısız oldu. Doğrudan yerleştirme için daha küçük bir resim (<3 MB) deneyin veya ana bilgisayar kullanılamıyor.',
            uploadFailedLarge: 'Yükleme başarısız oldu: Dosya çok büyük doğrudan yerleştirme için. Daha küçük bir resim (<3 MB) deneyin veya barındırma hizmeti geçici olarak kullanılamıyor.',
            uploadFailedParse: 'Yükleme başarılı oldu ancak resim URL\'si alınamadı. Barındırma hizmeti düşebilir.',
            uploadFailedHost: 'Yükleme başarısız oldu: Barındırma hizmeti bir hata döndürdü. Lütfen tekrar deneyin.',
            copied: 'Kopyalandı!',
            passwordRequired: 'Şifre Gerekli',
            passwordProtected: 'Bu resim şifre ile korunmaktadır.',
            enterPassword: 'Şifreyi girin',
            unlock: 'Kilidini Aç',
            incorrectPassword: 'Yanlış şifre',
            viewsRemaining: 'kalan görüntüleme',
            closeView: 'Kapat',
            imageDestroyed: 'Resim Yok Edildi',
            imageDestroyedText: 'Bu resim planlandığı gibi kendini yok etti.',
            imageDestroyedSubtitle: 'Artık erişilemez.',
            linkExpired: 'Link Sona Erdi veya Geçersiz',
            linkExpiredText: 'Link sona erdi, yok edildi veya geçersiz.',
            returnToUpload: 'Yüklemeye Dön',
            viewFooter: 'Vanishot © 2025 | Bu resim kendini yok edecek | Sahibi: Alice',
            themeDark: 'Koyu',
            themeLight: 'Açık',
            viewsCountFormat: 'Görüntüleme: {count}/{total}',
            screenshotProtection: {
                activate: 'Etkinleştir',
                deactivate: 'Devre Dışı Bırak',
                isActive: 'Aktif',
                protectionInfo: 'Korumayı Bilgi',
                fullscreenAvailable: 'Tam Ekran Mevcut',
                pointerLockAvailable: 'İmleç Kilidi Mevcut',
                clipboardWrite: 'Pano Yazma',
                screenCaptureAvailable: 'Ekran Yakalama Mevcut',
                canvasProtection: 'Tuval Koruması'
            }
        },

        vi: {
            appTitle: 'Vanishot - Chia sẻ Ảnh Tự Hủy',
            tagline: 'Tải lên. Chia sẻ. Xem nó biến mất.',
            dropZone: 'Kéo và thả hình ảnh của bạn vào đây',
            dropSubtext: 'hoặc nhấp để duyệt',
            removeImage: 'Xoá hình ảnh',
            expirationSettings: 'Cài Đặt Hết Hạn',
            maxViews: 'Số Lượt Xem Tối Đa',
            viewsUnit: 'lượt xem',
            viewHint: 'Hình ảnh sẽ bị huỷ sau số lượt xem này',
            timerType: 'Loại Đếm Ngược',
            never: 'Không bao giờ',
            countdown: 'Đếm Ngược',
            timerDuration: 'Thời Gian Đếm Ngược',
            secondsUnit: 'giây',
            timerHint: 'Hình ảnh sẽ tự huỷ sau thời gian này',
            passwordProtection: 'Bảo Mật Bằng Mật Khẩu (Tùy Chọn)',
            passwordPlaceholder: 'Đặt mật khẩu (tùy chọn)',
            createLink: 'Tạo Liên Kết Biến Mất',
            uploading: 'Đang tải lên...',
            linkCreated: 'Đã Tạo Liên Kết',
            resultSubtitle: 'Chia sẻ liên kết này. Nó sẽ tự biến mất.',
            copyLink: 'Sao Chép',
            maxViewsStat: 'Số Lượt Xem Tối Đa',
            timerStat: 'Đếm Ngược',
            uploadAnother: 'Tải Lên Khác',
            uploadingOverlay: 'Đang tải lên và xử lý hình ảnh của bạn...',
            uploadMethod: 'Đang sử dụng dịch vụ lưu trữ hình ảnh',
            preparingImage: 'Đang chuẩn bị hình ảnh...',
            imageEmbedded: 'Hình ảnh đã được nhúng!',
            footer: 'Vanishot © 2025 | Hình ảnh tự huỷ sau khi xem hoặc hết thời gian đếm ngược | Chủ sở hữu: Alice',
            alertSelectImage: 'Vui lòng chọn hình ảnh để tải lên',
            alertImageSize: 'Kích thước hình ảnh phải nhỏ hơn 10MB',
            alertImageFormat: 'Vui lòng chọn tệp hình ảnh (JPEG, PNG, GIF, WebP, v.v.)',
            uploadFailed: 'Tải lên thất bại:',
            uploadFailedSmall: 'Tải lên thất bại. Thử hình ảnh nhỏ hơn (<3MB) để nhúng trực tiếp hoặc dịch vụ lưu trữ không khả dụng.',
            uploadFailedLarge: 'Tải lên thất bại: Tệp quá lớn để nhúng trực tiếp. Thử hình ảnh nhỏ hơn (<3MB) hoặc dịch vụ lưu trữ tạm thời không khả dụng.',
            uploadFailedParse: 'Tải lên thành công nhưng không thể lấy URL hình ảnh. Dịch vụ lưu trữ có thể bị lỗi.',
            uploadFailedHost: 'Tải lên thất bại: Dịch vụ lưu trữ trả về lỗi. Vui lòng thử lại.',
            copied: 'Đã Sao Chép!',
            passwordRequired: 'Cần Mật Khẩu',
            passwordProtected: 'Hình ảnh này được bảo mật bằng mật khẩu.',
            enterPassword: 'Nhập mật khẩu',
            unlock: 'Mở Khhoá',
            incorrectPassword: 'Mật Khẩu Không Đúng',
            viewsRemaining: 'lượt xem còn lại',
            closeView: 'Đóng',
            imageDestroyed: 'Hình Ảnh Đã Huỷ',
            imageDestroyedText: 'Hình ảnh này đã tự huỷ theo lịch trình.',
            imageDestroyedSubtitle: 'Không còn truy cập được.',
            linkExpired: 'Liên Kết Hết Hạn Hoặc Không Hợp Lệ',
            linkExpiredText: 'Liên kết đã hết hạn, đã bị huỷ hoặc không hợp lệ.',
            returnToUpload: 'Quay Lại Tải Lên',
            viewFooter: 'Vanishot © 2025 | Hình ảnh này sẽ tự huỷ | Chủ sở hữu: Alice',
            themeDark: 'Tối',
            themeLight: 'Sáng',
            viewsCountFormat: 'Lượt xem: {count}/{total}',
            screenshotProtection: {
                activate: 'Kích Hoạt',
                deactivate: 'Vô Hiệu Hoá',
                isActive: 'Đang Hoạt Động',
                protectionInfo: 'Thông Tin Bảo Vệ',
                fullscreenAvailable: 'Toàn Màn Hình Khả Dụng',
                pointerLockAvailable: 'Khóa Con Trỏ Khả Dụng',
                clipboardWrite: 'Ghi Clipboard',
                screenCaptureAvailable: 'Chụp Ảnh Màn Hình Khả Dụng',
                canvasProtection: 'Bảo Vệ Canvas'
            }
        },

        pl: {
            appTitle: 'Vanishot - Samozniszczający się Dzielenie Obrazów',
            tagline: 'Prześlij. Udostępnij. Obserwuj znikanie.',
            dropZone: 'Przeciągnij i upuść swoje tu',
            dropSubtext: 'lub kliknij, aby przeglądać',
            removeImage: 'Usuń obraz',
            expirationSettings: 'Ustawienia Wygasania',
            maxViews: 'Maks. Wyświetleń',
            viewsUnit: 'wyświetleń',
            viewHint: 'Obraz zostanie zniszczony po tylu wyświetleniach',
            timerType: 'Typ Timera',
            never: 'Nigdy',
            countdown: 'Odliczanie',
            timerDuration: 'Czas Timera',
            secondsUnit: 'sekundy',
            timerHint: 'Obraz zniszczy się sam po tym czasie',
            passwordProtection: 'Ochrona Hasłem (Opcjonalnie)',
            passwordPlaceholder: 'Ustaw hasło (opcjonalnie)',
            createLink: 'Utwórz Link, Który Zniknie',
            uploading: 'Wysyłanie...',
            linkCreated: 'Link Utworzony',
            resultSubtitle: 'Udostępnij ten link. Zniknie sam.',
            copyLink: 'Kopiuj',
            maxViewsStat: 'Maks. Wyświetleń',
            timerStat: 'Timer',
            uploadAnother: 'Wrzuć Inny',
            uploadingOverlay: 'Wysyłanie i przetwarzanie Twojego obrazu...',
            uploadMethod: 'Używana jest usługa hostowania obrazów',
            preparingImage: 'Przygotowywanie obrazu...',
            imageEmbedded: 'Obraz osadzony!',
            footer: 'Vanishot © 2025 | Obrazy samozniszczają się po wyświetleniu lub wygasaniu timera | Właściciel: Alice',
            alertSelectImage: 'Proszę wybrać obraz do wgrania',
            alertImageSize: 'Rozmiar obrazu musi być mniejszy niż 10 MB',
            alertImageFormat: 'Proszę wybrać plik graficzny (JPEG, PNG, GIF, WebP, itp.)',
            uploadFailed: 'Wgranie nieudane:',
            uploadFailedSmall: 'Wgranie nieudane. Spróbuj mniejszy obraz (<3 MB) do bezpośredniego osadzenia lub host jest niedostępny.',
            uploadFailedLarge: 'Wgranie nieudane: Plik jest za duży do bezpośredniego osadzenia. Spróbuj mniejszy obraz (<3 MB) lub usługa hostingu jest tymczasowo niedostępna.',
            uploadFailedParse: 'Wgranie udane, ale nie udało się pobrać URL-a obrazu. Usługa hostingu może być niedostępna.',
            uploadFailedHost: 'Wgranie nieudane: Usługa hostingu zwróciła błąd. Spróbuj ponownie.',
            copied: 'Skopiowano!',
            passwordRequired: 'Hasło Wymagane',
            passwordProtected: 'Ten obraz jest chroniony hasłem.',
            enterPassword: 'Wprowadź hasło',
            unlock: 'Odblokuj',
            incorrectPassword: 'Niepoprawne hasło',
            viewsRemaining: 'pozostało wyświetleń',
            closeView: 'Zamknij',
            imageDestroyed: 'Obraz Zniszczony',
            imageDestroyedText: 'Ten obraz samozniszczył się zgodnie z planem.',
            imageDestroyedSubtitle: 'Nie jest już dostępny.',
            linkExpired: 'Link Wygasł lub Nieprawidłowy',
            linkExpiredText: 'Link wygasł, został zniszczony lub jest nieprawidłowy.',
            returnToUpload: 'Powrót do Wgrania',
            viewFooter: 'Vanishot © 2025 | Ten obraz się samozniszczy | Właściciel: Alice',
            themeDark: 'Ciemny',
            themeLight: 'Jasny',
            viewsCountFormat: 'Wyświetlenia: {count}/{total}',
            screenshotProtection: {
                activate: 'Aktywuj',
                deactivate: 'Dezaktywuj',
                isActive: 'Aktywny',
                protectionInfo: 'Informacje o Ochronie',
                fullscreenAvailable: 'Pełny Ekran Dostępny',
                pointerLockAvailable: 'Blokada Wskaźnika Dostępna',
                clipboardWrite: 'Zapis do Schowka',
                screenCaptureAvailable: 'Przechwytywanie Ekranu Dostępne',
                canvasProtection: 'Ochrona Canvas'
            }
        },

        th: {
            appTitle: 'Vanishot - การแชร์ภาพที่ทำลายตัวเอง',
            tagline: 'อัปโหลด. แชร์. ดูมันหายไป.',
            dropZone: 'ลากและวางภาพของคุณที่นี่',
            dropSubtext: 'หรือคลิกเพื่อเรียกดู',
            removeImage: 'ลบภาพ',
            expirationSettings: 'การตั้งค่าหมดอายุ',
            maxViews: 'จำนวนการเข้าชมสูงสุด',
            viewsUnit: 'การเข้าชม',
            viewHint: 'ภาพจะถูกทำลายหลังจากจำนวนการเข้าชมนี้',
            timerType: 'ประเภทตัวจับเวลา',
            never: 'ไม่มี',
            countdown: 'นับถอยหลัง',
            timerDuration: 'ระยะเวลาตัวจับเวลา',
            secondsUnit: 'วินาที',
            timerHint: 'ภาพจะทำลายตัวเองหลังจากเวลานี้',
            passwordProtection: 'การป้องกันด้วยรหัสผ่าน (ไม่บังคับ)',
            passwordPlaceholder: 'ตั้งรหัสผ่าน (ไม่บังคับ)',
            createLink: 'สร้างลิงก์ที่หายไป',
            uploading: 'กำลังอัปโหลด...',
            linkCreated: 'สร้างลิงก์แล้ว',
            resultSubtitle: 'แชร์ลิงก์นี้. มันจะหายไปเอง.',
            copyLink: 'คัดลอก',
            maxViewsStat: 'การเข้าชมสูงสุด',
            timerStat: 'ตัวจับเวลา',
            uploadAnother: 'อัปโหลดอีก',
            uploadingOverlay: 'กำลังอัปโหลดและประมวลผลภาพของคุณ...',
            uploadMethod: 'กำลังใช้บริการโฮสต์ภาพ',
            preparingImage: 'กำลังเตรียมภาพ...',
            imageEmbedded: 'ภาพถูกฝังแล้ว!',
            footer: 'Vanishot © 2025 | ภาพจะทำลายตัวเองหลังจากดูหรือตัวจับเวลาหมด | เจ้าของ: Alice',
            alertSelectImage: 'กรุณาเลือกภาพเพื่ออัปโหลด',
            alertImageSize: 'ขนาดภาพต้องน้อยกว่า 10 MB',
            alertImageFormat: 'กรุณาเลือกไฟล์ภาพ (JPEG, PNG, GIF, WebP, ฯลฯ)',
            uploadFailed: 'อัปโหลดล้มเหลว:',
            uploadFailedSmall: 'อัปโหลดล้มเหลว ลองใช้ภาพที่เล็กกว่า (<3 MB) สำหรับการฝังโดยตรง หรือโฮสต์ไม่สามารถใช้งานได้.',
            uploadFailedLarge: 'อัปโหลดล้มเหลว: ไฟล์ใหญ่เกินไปสำหรับการฝังโดยตรง ลองใช้ภาพที่เล็กกว่า (<3 MB) หรือบริการโฮสต์ไม่สามารถใช้งานได้ชั่วคราว.',
            uploadFailedParse: 'อัปโหลดสำเร็จ แต่ไม่สามารถดึง URL ภาพได้ บริการโฮสต์อาจหยุดทำงาน.',
            uploadFailedHost: 'อัปโหลดล้มเหลว: บริการโฮสต์ส่งข้อผิดพลาด กรุณาลองอีกครั้ง.',
            copied: 'คัดลอกเรียบร้อย!',
            passwordRequired: 'ต้องการรหัสผ่าน',
            passwordProtected: 'ภาพนี้ได้รับการป้องกันด้วยรหัสผ่าน.',
            enterPassword: 'ป้อนรหัสผ่าน',
            unlock: 'ปลดล็อก',
            incorrectPassword: 'รหัสผ่านไม่ถูกต้อง',
            viewsRemaining: 'การเข้าชมที่เหลือ',
            closeView: 'ปิด',
            imageDestroyed: 'ภาพถูกทำลาย',
            imageDestroyedText: 'ภาพนี้ทำลายตัวเองตามที่กำหนดไว้.',
            imageDestroyedSubtitle: 'ไม่สามารถเข้าถึงได้อีกต่อไป.',
            linkExpired: 'ลิงก์หมดอายุหรือใช้ไม่ได้',
            linkExpiredText: 'ลิงก์หมดอายุ ถูกทำลาย หรือใช้ไม่ได้.',
            returnToUpload: 'กลับไปที่การอัปโหลด',
            viewFooter: 'Vanishot © 2025 | ภาพนี้จะทำลายตัวเอง | เจ้าของ: Alice',
            themeDark: 'มืด',
            themeLight: 'สว่าง',
            viewsCountFormat: 'การเข้าชม: {count}/{total}',
            screenshotProtection: {
                activate: 'เปิดใช้งาน',
                deactivate: 'ปิดใช้งาน',
                isActive: 'เปิดใช้งาน',
                protectionInfo: 'ข้อมูลการป้องกัน',
                fullscreenAvailable: 'สามารถใช้เต็มจอ',
                pointerLockAvailable: 'ล็อกตัวชี้ใช้งานได้',
                clipboardWrite: 'เขียนคลิปบอร์ด',
                screenCaptureAvailable: 'จับภาพหน้าจอได้',
                canvasProtection: 'การป้องกัน Canvas'
            }
        }
    };

    let currentLang = 'en';

    function loadLanguage(lang) {
        if (!dicts[lang]) return false;
        currentLang = lang;
        try {
            localStorage.setItem('vanishot_lang', lang);
        } catch (e) {}
        applyTranslations(lang);
        return true;
    }

    function getSavedLanguage() {
        try {
            return localStorage.getItem('vanishot_lang') || 'en';
        } catch (e) {
            return 'en';
        }
    }

    function getBrowserLanguage() {
        try {
            const browserLang = navigator.language || navigator.userLanguage;
            const code = browserLang.split('-')[0].toLowerCase();
            if (dicts[code]) return code;
            // Check for regional variants (e.g., zh-TW -> zh)
            if (code.startsWith('zh')) return 'zh';
            if (code.startsWith('pt')) return 'pt';
            if (code.startsWith('ar')) return 'ar';
            if (code.startsWith('ja')) return 'ja';
            if (code.startsWith('ko')) return 'ko';
            if (code.startsWith('hi')) return 'hi';
            if (code.startsWith('ru')) return 'ru';
            if (code.startsWith('de')) return 'de';
            if (code.startsWith('fr')) return 'fr';
            if (code.startsWith('es')) return 'es';
            if (code.startsWith('it')) return 'it';
            if (code.startsWith('tr')) return 'tr';
            if (code.startsWith('vi')) return 'vi';
            if (code.startsWith('pl')) return 'pl';
            if (code.startsWith('th')) return 'th';
            return 'en';
        } catch (e) {
            return 'en';
        }
    }

    function translateNode(node, lang) {
        const dict = dicts[lang];
        if (!dict) return;

        // Translate elements with data-i18n attribute
        const i18nElements = node.querySelectorAll('[data-i18n]');
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(dict, key);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder) el.placeholder = translation;
                } else if (el.tagName === 'TITLE') {
                    el.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate elements with data-i18n-title attribute
        const titleElements = node.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = getNestedValue(dict, key);
            if (translation) {
                el.title = translation;
            }
        });

        // Translate title and meta
        const htmlLang = node.closest('html') || document.documentElement;
        if (htmlLang.tagName === 'HTML') {
            htmlLang.setAttribute('lang', lang);
        }
        const titleEl = document.querySelector('title');
        if (titleEl) {
            const titleKey = dict.appTitle || '';
            if (titleKey) {
                const parts = titleKey.split(' - ');
                if (parts.length > 1) {
                    titleEl.textContent = dict.appTitle;
                }
            }
        }
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    // ---- PUBLIC API ----
    return {
        /**
         * Initialize translations on the page
         */
        init(page) {
            const savedLang = getSavedLanguage();
            const browserLang = getBrowserLanguage();
            const lang = savedLang || browserLang;
            loadLanguage(lang);
            return lang;
        },

        /**
         * Load and apply a specific language
         */
        load: loadLanguage,

        /**
         * Get the current language code
         */
        getCurrentLang() {
            return currentLang;
        },

        /**
         * Get all supported languages
         */
        getLanguages() {
            return Object.values(LANGUAGES);
        },

        /**
         * Get a translation string
         */
        t(key) {
            return getNestedValue(dicts[currentLang] || dicts.en, key);
        },

        /**
         * Apply translations to a specific DOM node
         */
        apply(page) {
            applyTranslations(currentLang);
        }
    };

    function applyTranslations(lang) {
        const dict = dicts[lang];
        if (!dict) return;

        // Apply to all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(dict, key);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder) el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Apply title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = getNestedValue(dict, key);
            if (translation) {
                el.title = translation;
            }
        });

        // Apply placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = getNestedValue(dict, key);
            if (translation) {
                el.placeholder = translation;
            }
        });

        // Update document title
        const titleEl = document.querySelector('title');
        if (titleEl && dict.appTitle) {
            titleEl.textContent = dict.appTitle;
        }

        // Update html lang attribute
        const htmlEl = document.documentElement;
        if (htmlEl) {
            htmlEl.setAttribute('lang', lang);
        }

        // Let other scripts (like the theme button) refresh their labels
        try { document.dispatchEvent(new CustomEvent('vanishot:langchange', { detail: { lang } })); } catch (e) {}

        // Update footer
        const footers = document.querySelectorAll('.footer, .view-footer');
        footers.forEach(footer => {
            if (dict.footer) {
                footer.textContent = dict.footer;
            }
        });
    }
})();
