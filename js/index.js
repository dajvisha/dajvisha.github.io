(function () {
      const i18n = {
        es: {
          'skip-link': 'Saltar al contenido principal',
          'preloader-date': 'Mayo &middot; 2027 &middot; Oaxaca',
          'nav-home': 'Inicio',
          'nav-venue': 'Lugar',
          'nav-rsvp': 'Confirmar',
          'nav-toggle-label': 'Menú',
          'hero-h1': 'En Oaxaca hay un mezcal <em>esperándote.</em>',
          'hero-info': 'Mayo 15, 2027 &middot; Oaxaca, Mexico',
          'hero-cta': 'Confirmar Asistencia',
          'photo-1-alt': 'Laura y Diego en Paris',
          'photo-2-alt': 'Laura y Diego en un cafe parisino',
          'photo-3-alt': 'Retrato íntimo en blanco y negro',
          'cd-aria': 'Cuenta regresiva para la boda',
          'cd-days-label': 'Dias',
          'cd-hours-label': 'Horas',
          'cd-mins-label': 'Minutos',
          'cd-secs-label': 'Segundos',
          'story-label': 'Nuestra historia',
          'story-headline': 'De Monterrey<br>a <em>Oaxaca</em>',
          'story-connector-text': '6 años · 5 ciudades · 1 historia',
          'm1-city': 'Monterrey, México',
          'm1-event': 'nos conocimos',
          'm2-city': 'San Francisco, Estados Unidos',
          'm2-event': 'nos hicimos novios',
          'm3-city': 'París, Francia',
          'm3-event': 'nos comprometimos',
          'm4-city': 'Toluca, México',
          'm4-event': 'Ceremonia civil',
          'm5-city': 'Oaxaca, México',
          'm5-event': 'Ceremonia religiosa',
          'homes-label': 'Hemos vivido juntos en',
          'home-1': 'Monclova, México',
          'home-2': 'Ciudad de México, México',
          'home-3': 'San Francisco, Estados Unidos',
          'phrase-1': 'Con el agave entendimos la espera de la tierra.',
          'phrase-2': 'Con la distancia entendimos la fuerza de elegirnos.',
          'phrase-3': 'Con el mezcal celebramos la eternidad.',
          'venue-label': 'El lugar',
          'venue-name-em': 'Oaxaca',
          'venue-map-link-aria': 'Abrir ubicación en Google Maps',
          'venue-map-label': 'Ver en mapa ↗',
          'venue-address-label': 'Dirección',
          'venue-date-label': 'Fecha',
          'venue-date-val': '15 de mayo de 2027',
          'venue-reception-label': 'Recepción',
          'venue-time-tbd': 'Por confirmar',
          'rsvp-section-label': 'Confirmación de asistencia',
          'rsvp-heading': '¿Nos acompañas?',
          'rsvp-body': 'Confirma tu asistencia antes del <em style="font-style:italic;color:var(--sienna);">15 de febrero de 2027.</em>',
          'rsvp-name-label': 'Nombre completo',
          'rsvp-name-placeholder': 'Tu nombre',

          'rsvp-attend-legend': 'Asistencia',
          'rsvp-attend-yes': 'Asistiré con gusto',
          'rsvp-attend-no': 'No podré asistir',
          'rsvp-guests-label': '¿Cuántos asistentes? (incluyéndote)',
          'rsvp-guests-opt0': '— Selecciona —',
          'rsvp-guests-opt1': '1 persona',
          'rsvp-guests-opt2': '2 personas',
          'rsvp-guests-opt3': '3 personas',
          'rsvp-guests-opt4': '4 personas',
          'rsvp-dietary-label': 'Restricciones alimentarias',
          'rsvp-dietary-placeholder': 'Vegetariano, sin gluten…',
          'rsvp-note-label': 'Mensaje para los novios <span style="opacity:.45;">(opcional)</span>',
          'rsvp-note-placeholder': 'Un pensamiento, un deseo…',
          'rsvp-submit': 'Enviar confirmación',
          'footer-sub': 'Mayo 15, 2027 &middot; Oaxaca, Mexico',
          // nav (optional sections)
          'nav-oaxaca': 'Oaxaca',
          'nav-registry': 'Regalos',
          'nav-more': 'Más',
          // attire + schedule
          'attire-label': 'Vestimenta',
          'attire-val': 'Cóctel elegante',
          'attire-note': 'Telas ligeras y calzado cómodo recomendados.',
          'sched-ceremony-time': 'Por confirmar',
          'sched-ceremony-name': 'Ceremonia religiosa',
          'sched-cocktail-time': 'Por confirmar',
          'sched-cocktail-name': 'Cóctel de bienvenida',
          'sched-reception-time': 'Por confirmar',
          'sched-reception-name': 'Recepción y cena',
          'sched-party-name': 'Baile y fiesta',
          'sched-party-note': '¡Hasta que la música decida!',
          // oaxaca guide
          'oaxaca-label': 'Tu guía de Oaxaca',
          'oaxaca-heading': 'Tu guía de <em>Oaxaca</em>',
          'tab-hotels': 'Hospedarse',
          'tab-travel': 'Llegar',
          'tab-explore': 'Explorar',
          // hotels
          'hotels-label': 'Alojamiento',
          'hotels-heading': 'Dónde <em>hospedarse</em>',
          'hotels-tier-luxury': 'Boutique · Lujo',
          'hotels-tier-boutique': 'Boutique · Diseño',
          'hotels-tier-charm': 'Encanto · Accesible',
          'hotel-1-meta': 'Ex-convento del siglo XVI · Av. 5 de Mayo 300, Centro Histórico',
          'hotel-2-meta': 'Diseño contemporáneo oaxaqueño · García Vigil 407, Centro',
          'hotel-3-meta': 'Sobre el andador Macedonio Alcalá · a pasos del venue',
          'hotels-book-link': 'Reservar ↗',
          'hotels-map-link': 'Ver en mapa ↗',
          'hotels-note': 'Bloque de habitaciones por confirmar. Te avisaremos si hay tarifa especial para invitados.',
          // travel
          'travel-label': 'Cómo llegar',
          'travel-heading': 'Llegar a <em>Oaxaca</em>',
          'travel-air-label': 'Vuelo',
          'travel-air-val': 'Aeropuerto Internacional de Oaxaca (OAX) · ~9 km del Centro Histórico. Vuelos directos desde Ciudad de México con Aeroméxico, VivaAerobus y Volaris.',
          'travel-taxi-label': 'Del aeropuerto',
          'travel-taxi-val': 'Taxi (200–250 MXN aprox., 20 min aprox.). Renta de auto disponible, aunque el Centro se recorre mejor caminando.',
          'travel-local-label': 'Centro Histórico',
          'travel-local-val': 'El Centro Histórico de Oaxaca es completamente peatonal. El Cardenal se ubica en el andador Macedonio Alcalá.',
          // explore
          'explore-label': 'Explora',
          'explore-heading': 'Oaxaca más <em>allá</em>',
          'explore-culture-label': 'Cultura & Historia',
          'explore-monteAlban-note': 'Sitio arqueológico zapoteca, ~15 min en auto',
          'explore-santoDomingo-note': 'Museo de las Culturas de Oaxaca, a dos cuadras del venue',
          'explore-maco-note': 'Museo de Arte Contemporáneo de Oaxaca',
          'explore-nature-label': 'Naturaleza',
          'explore-hierve-note': 'Cascadas petrificadas, excursión de día ~70 km',
          'explore-tule-note': 'Ahuehuete milenario con el tronco más ancho del mundo, Santa María del Tule, 13 km',
          'explore-food-label': 'Gastronomía & Mezcal',
          'explore-market-note': 'Tamales, tlayudas, chocolate oaxaqueño',
          'explore-insitu-note': 'Mezcal artesanal de la Sierra, Murguía 105',
          'explore-danzantes-note': 'Cocina oaxaqueña contemporánea, Macedonio Alcalá 403',
          // registry
          'registry-label': 'Mesa de regalos',
          'registry-heading': 'Tu presencia es <em>el regalo</em>',
          'registry-body': 'Que estés con nosotros es todo lo que pedimos. Si deseas hacernos un obsequio, estamos preparando una mesa de regalos que compartiremos pronto.',
        },
        en: {
          'skip-link': 'Skip to main content',
          'preloader-date': 'May &middot; 2027 &middot; Oaxaca',
          'nav-home': 'Home',
          'nav-venue': 'Venue',
          'nav-rsvp': 'Confirm',
          'nav-toggle-label': 'Menu',
          'hero-h1': 'In Oaxaca there\'s a mezcal <em>waiting for you.</em>',
          'hero-info': 'May 15, 2027 &middot; Oaxaca, Mexico',
          'hero-cta': 'Confirm Attendance',
          'photo-1-alt': 'Laura and Diego in Paris',
          'photo-2-alt': 'Laura and Diego at a Parisian café',
          'photo-3-alt': 'Intimate black and white portrait',
          'cd-aria': 'Countdown to the wedding',
          'cd-days-label': 'Days',
          'cd-hours-label': 'Hours',
          'cd-mins-label': 'Minutes',
          'cd-secs-label': 'Seconds',
          'story-label': 'Our story',
          'story-headline': 'From Monterrey<br>to <em>Oaxaca</em>',
          'story-connector-text': '6 years · 5 cities · 1 story',
          'm1-city': 'Monterrey, Mexico',
          'm1-event': 'we met',
          'm2-city': 'San Francisco, United States',
          'm2-event': 'we started dating',
          'm3-city': 'Paris, France',
          'm3-event': 'we got engaged',
          'm4-city': 'Toluca, Mexico',
          'm4-event': 'Civil ceremony',
          'm5-city': 'Oaxaca, Mexico',
          'm5-event': 'Church ceremony',
          'homes-label': 'We\'ve lived together in',
          'home-1': 'Monclova, Mexico',
          'home-2': 'Mexico City, Mexico',
          'home-3': 'San Francisco, United States',
          'phrase-1': 'With the agave we learned the earth’s long wait.',
          'phrase-2': 'With distance we understood the strength of choosing each other.',
          'phrase-3': 'With mezcal we celebrate eternity.',
          'venue-label': 'The venue',
          'venue-name-em': 'Oaxaca',
          'venue-map-label': 'View on map ↗',
          'venue-map-link-aria': 'Open location in Google Maps',
          'venue-address-label': 'Address',
          'venue-date-label': 'Date',
          'venue-date-val': 'May 15, 2027',
          'venue-reception-label': 'Reception',
          'venue-time-tbd': 'To be confirmed',
          'rsvp-section-label': 'RSVP',
          'rsvp-heading': 'Will you join us?',
          'rsvp-body': 'Please confirm your attendance by <em style="font-style:italic;color:var(--sienna);">February 15, 2027.</em>',
          'rsvp-name-label': 'Full name',
          'rsvp-name-placeholder': 'Your name',

          'rsvp-attend-legend': 'Attendance',
          'rsvp-attend-yes': 'I\'ll be there',
          'rsvp-attend-no': 'Unable to attend',
          'rsvp-guests-label': 'How many guests? (including you)',
          'rsvp-guests-opt0': '— Select —',
          'rsvp-guests-opt1': '1 person',
          'rsvp-guests-opt2': '2 people',
          'rsvp-guests-opt3': '3 people',
          'rsvp-guests-opt4': '4 people',
          'rsvp-dietary-label': 'Dietary restrictions',
          'rsvp-dietary-placeholder': 'Vegetarian, gluten-free…',
          'rsvp-note-label': 'Message for the couple <span style="opacity:.45;">(optional)</span>',
          'rsvp-note-placeholder': 'A thought, a wish…',
          'rsvp-submit': 'Send confirmation',
          'footer-sub': 'May 15, 2027 &middot; Oaxaca, Mexico',
          // nav (optional sections)
          'nav-oaxaca': 'Oaxaca',
          'nav-registry': 'Registry',
          'nav-more': 'More',
          // attire + schedule
          'attire-label': 'Attire',
          'attire-val': 'Cocktail attire',
          'attire-note': 'Light fabrics and comfortable shoes recommended.',
          'sched-ceremony-time': 'To be confirmed',
          'sched-ceremony-name': 'Church ceremony',
          'sched-cocktail-time': 'To be confirmed',
          'sched-cocktail-name': 'Welcome cocktail hour',
          'sched-reception-time': 'To be confirmed',
          'sched-reception-name': 'Reception & dinner',
          'sched-party-name': 'Dancing & celebration',
          'sched-party-note': 'Until the music runs out!',
          // oaxaca guide
          'oaxaca-label': 'Your Oaxaca guide',
          'oaxaca-heading': 'Your guide to <em>Oaxaca</em>',
          'tab-hotels': 'Hotels',
          'tab-travel': 'Getting Here',
          'tab-explore': 'Explore',
          // hotels
          'hotels-label': 'Hotels',
          'hotels-heading': 'Where to <em>stay</em>',
          'hotels-tier-luxury': 'Boutique · Luxury',
          'hotels-tier-boutique': 'Boutique · Design',
          'hotels-tier-charm': 'Charming · Accessible',
          'hotel-1-meta': '16th-century former convent · Av. 5 de Mayo 300, Centro Histórico',
          'hotel-2-meta': 'Contemporary Oaxacan design · García Vigil 407, Centro',
          'hotel-3-meta': 'On the Macedonio Alcalá pedestrian walk · steps from the venue',
          'hotels-book-link': 'Book ↗',
          'hotels-map-link': 'View on map ↗',
          'hotels-note': 'Room block to be confirmed. We’ll let you know if a special guest rate is available.',
          // travel
          'travel-label': 'Getting There',
          'travel-heading': 'Getting to <em>Oaxaca</em>',
          'travel-air-label': 'By air',
          'travel-air-val': 'Oaxaca International Airport (OAX) · ~9 km from Centro Histórico. Direct flights from Mexico City with Aeroméxico, VivaAerobus, and Volaris.',
          'travel-taxi-label': 'Airport → Hotel',
          'travel-taxi-val': 'Taxi (200–250 MXN approx., 20 min approx.). Car rental available, though the center is best explored on foot.',
          'travel-local-label': 'Downtown',
          'travel-local-val': 'Oaxaca\'s historic center is fully pedestrian. El Cardenal is located on the Macedonio Alcalá pedestrian street.',
          // explore
          'explore-label': 'Explore',
          'explore-heading': 'Oaxaca beyond <em>the wedding</em>',
          'explore-culture-label': 'Culture & History',
          'explore-monteAlban-note': 'Zapotec archaeological site, ~15 min by car',
          'explore-santoDomingo-note': 'Museum of Oaxacan Cultures, two blocks from the venue',
          'explore-maco-note': 'Museum of Contemporary Art of Oaxaca',
          'explore-nature-label': 'Nature',
          'explore-hierve-note': 'Petrified waterfalls, day trip ~70 km',
          'explore-tule-note': 'Ancient Montezuma cypress with the widest trunk in the world, Santa María del Tule, 13 km',
          'explore-food-label': 'Food & Mezcal',
          'explore-market-note': 'Tamales, tlayudas, Oaxacan chocolate',
          'explore-insitu-note': 'Artisanal Sierra mezcal, Murguía 105',
          'explore-danzantes-note': 'Contemporary Oaxacan cuisine, Macedonio Alcalá 403',
          // registry
          'registry-label': 'Registry',
          'registry-heading': 'Your presence is <em>the gift</em>',
          'registry-body': 'Having you with us is all we ask. If you’d like to give something, we’re putting together a registry we’ll share soon.',
        }
      };

      function detectDefaultLang() {
        const saved = localStorage.getItem('lang');
        if (saved === 'es' || saved === 'en') return saved;
        // Detect via timezone (covers Mexico + Latin America + Spain)
        const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
        if (/^america\/(mexico|argentina|bolivia|chile|colombia|costa_rica|cuba|dominican|ecuador|el_salvador|guatemala|havana|honduras|lima|managua|montevideo|panama|paraguay|peru|puerto_rico|caracas|bogota|guayaquil|la_paz|asuncion)|^europe\/madrid|^atlantic\/canary/.test(tz)) {
          return 'es';
        }
        // Fall back to browser language
        const lang = (navigator.language || 'en').toLowerCase();
        return lang.startsWith('es') ? 'es' : 'en';
      }

      function applyLanguage(lang) {
        const t = i18n[lang];
        if (!t) return;
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
        // Update toggle button states
        document.querySelectorAll('.lang-opt').forEach(btn => {
          const active = btn.dataset.lang === lang;
          btn.classList.toggle('active', active);
          btn.setAttribute('aria-pressed', String(active));
        });
        // innerHTML / textContent updates
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const val = t[el.dataset.i18n];
          if (val !== undefined) el.innerHTML = val;
        });
        // placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
          const val = t[el.dataset.i18nPlaceholder];
          if (val !== undefined) el.placeholder = val;
        });
        // aria-label attributes
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
          const val = t[el.dataset.i18nAria];
          if (val !== undefined) el.setAttribute('aria-label', val);
        });
        // alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
          const val = t[el.dataset.i18nAlt];
          if (val !== undefined) el.alt = val;
        });
      }

      // Wire toggle buttons
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.lang-opt').forEach(btn => {
          btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
        });
      });

      // Apply immediately (before DOM interactive is fine for data-i18n)
      applyLanguage(detectDefaultLang());
    })();

    /* Optional sections — add ?info to the URL to show all detail sections */
    if (new URLSearchParams(window.location.search).has('info')) {
      document.querySelectorAll('[data-optional]').forEach(el => el.removeAttribute('hidden'));
    }

    /* Preloader — fast 2s total */
    document.documentElement.classList.add('loading');

    window.addEventListener('load', () => {
      // Hold the monogram for a beat, then wipe the curtain up
      setTimeout(() => {
        // Render page instantly beneath the curtain
        const pageContent = document.getElementById('pageContent');
        pageContent.style.transition = 'none';
        pageContent.classList.add('visible');
        document.documentElement.classList.remove('loading');

        // Breath pause, then slide the curtain up
        setTimeout(() => {
          document.getElementById('preloader').classList.add('done');

          // Hero animations fire as curtain finishes
          setTimeout(() => {
            document.querySelectorAll('.hero-enter').forEach(el => el.classList.add('visible'));
          }, 500);
        }, 300);
      }, 800);
    });

    /* Navigation */
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });

      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggle.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });
    }

    /* More dropdown (desktop) */
    const navMore = document.querySelector('.nav-more');
    if (navMore) {
      const moreBtn = navMore.querySelector('.nav-more-btn');
      moreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = navMore.classList.toggle('open');
        moreBtn.setAttribute('aria-expanded', String(open));
      });
      // Close dropdown links
      navMore.querySelectorAll('.nav-dropdown a').forEach(a => {
        a.addEventListener('click', () => {
          navMore.classList.remove('open');
          moreBtn.setAttribute('aria-expanded', 'false');
        });
      });
      // Close on outside click
      document.addEventListener('click', () => {
        navMore.classList.remove('open');
        moreBtn.setAttribute('aria-expanded', 'false');
      });
    }

    /* Tabs + Accordion */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const accTriggers = document.querySelectorAll('.oax-acc-trigger');
    const allPanels = document.querySelectorAll('.tab-panel');

    // Shared: activate a tab/panel by data-tab key
    function activateTab(tabKey) {
      tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      allPanels.forEach(p => { p.hidden = true; });
      accTriggers.forEach(t => t.setAttribute('aria-expanded', 'false'));

      const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabKey}"]`);
      if (activeBtn) { activeBtn.classList.add('active'); activeBtn.setAttribute('aria-selected', 'true'); }

      const panel = document.getElementById('tab-panel-' + tabKey);
      if (panel) {
        panel.hidden = false;
      }

      const activeTrigger = document.querySelector(`.oax-acc-trigger[data-tab="${tabKey}"], .oax-accordion[data-tab="${tabKey}"] .oax-acc-trigger`);
      if (activeTrigger) activeTrigger.setAttribute('aria-expanded', 'true');
    }

    // Desktop tab buttons
    if (tabBtns.length) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.tab));
      });
    }

    // Mobile accordion triggers — toggle open/close
    accTriggers.forEach(trigger => {
      const accordion = trigger.closest('.oax-accordion');
      const tabKey = accordion.dataset.tab;
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          // collapse
          trigger.setAttribute('aria-expanded', 'false');
          const panel = document.getElementById('tab-panel-' + tabKey);
          if (panel) panel.hidden = true;
        } else {
          activateTab(tabKey);
        }
      });
    });

    // Initialize first tab on desktop
    if (window.matchMedia('(min-width: 760px)').matches) {
      activateTab('travel');
    }

    /* RSVP — attend toggle */
    document.querySelectorAll('.attend-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.attend-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const attending = btn.dataset.attend === 'yes';
        document.getElementById('extra-fields').classList.toggle('show', attending);
        document.getElementById('extra-dietary').classList.toggle('show', attending);
      });
    });

    /* RSVP — submit to Google Apps Script */
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxLJN2mYGn_hIZ4J0YmX7rgVpg9x65hR7kOdihYypJUID-Xmf5qPN692J7lJTDVECuN/exec';

    const submitBtn = document.getElementById('rsvp-submit');
    const feedback = document.getElementById('rsvp-feedback');
    const feedbackMsg = document.getElementById('rsvp-feedback-msg');

    const rsvpMessages = {
      es: {
        sending: 'Enviando…',
        submit: 'Enviar confirmación',
        success: '¡Confirmación recibida! Nos vemos en Oaxaca.',
        error: 'Algo salió mal. Por favor intenta de nuevo.',
        validationName: 'Por favor ingresa tu nombre completo.',
        validationPhone: 'Por favor ingresa tu número de teléfono.',
        validationAttend: 'Por favor indica si asistirás.',
        validationGuests: 'Por favor selecciona el número de asistentes.',
        successTitle: '¡Listo, te esperamos!',
        successBody: 'Nos vemos en Oaxaca el 15 de mayo de 2027.',
      },
      en: {
        sending: 'Sending…',
        submit: 'Send confirmation',
        success: 'Confirmation received! See you in Oaxaca.',
        error: 'Something went wrong. Please try again.',
        validationName: 'Please enter your full name.',
        validationPhone: 'Please enter your phone number.',
        validationAttend: 'Please let us know if you\'ll attend.',
        validationGuests: 'Please select the number of guests.',
        successTitle: 'You\'re all set!',
        successBody: 'See you in Oaxaca, May 15, 2027.',
      }
    };

    function getRsvpMsg(key) {
      const lang = localStorage.getItem('lang') || 'es';
      return (rsvpMessages[lang] || rsvpMessages.es)[key];
    }

    function showFieldError(errorId, inputId, msgKey) {
      const el = document.getElementById(errorId);
      el.textContent = getRsvpMsg(msgKey);
      el.classList.add('visible');
      if (inputId) {
        const input = document.getElementById(inputId);
        input.classList.add('form-input--error');
        input.focus();
      }
    }

    function clearFieldError(errorId, inputId) {
      const el = document.getElementById(errorId);
      if (el) { el.textContent = ''; el.classList.remove('visible'); }
      if (inputId) document.getElementById(inputId)?.classList.remove('form-input--error');
    }

    document.getElementById('rsvp-name').addEventListener('input', () => clearFieldError('rsvp-name-error', 'rsvp-name'));
    document.querySelectorAll('.attend-btn').forEach(btn => btn.addEventListener('click', () => clearFieldError('rsvp-attend-error', null)));
    document.getElementById('rsvp-guests').addEventListener('change', () => clearFieldError('rsvp-guests-error', 'rsvp-guests'));

    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('rsvp-name').value.trim();
      const attendBtn = document.querySelector('.attend-btn.selected');
      const honeypot = document.querySelector('input[name="_honeypot"]').value;

      // Honeypot check
      if (honeypot) return;

      // Specific validation
      if (!name) {
        showFieldError('rsvp-name-error', 'rsvp-name', 'validationName');
        return;
      }
      if (!attendBtn) {
        showFieldError('rsvp-attend-error', null, 'validationAttend');
        document.querySelector('.attend-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const attending = attendBtn.dataset.attend === 'yes';

      if (attending && !document.getElementById('rsvp-guests').value) {
        showFieldError('rsvp-guests-error', 'rsvp-guests', 'validationGuests');
        return;
      }
      const guests = attending ? document.getElementById('rsvp-guests').value : '';
      const dietary = attending ? document.getElementById('rsvp-dietary').value.trim() : '';
      const note = document.getElementById('rsvp-note').value.trim();

      submitBtn.disabled = true;
      submitBtn.textContent = getRsvpMsg('sending');
      feedback.hidden = true;

      const payload = { name, attending, guests, dietary, note, timestamp: new Date().toISOString() };

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(() => {
          document.querySelector('.rsvp-form').style.display = 'none';
          const successCard = document.getElementById('rsvp-success-card');
          document.getElementById('rsvp-success-title').textContent = getRsvpMsg('successTitle');
          document.getElementById('rsvp-success-body').textContent = getRsvpMsg('successBody');
          successCard.hidden = false;
          successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(() => {
          feedback.hidden = false;
          feedback.className = 'rsvp-feedback rsvp-feedback--error';
          feedbackMsg.textContent = getRsvpMsg('error');
          submitBtn.disabled = false;
          submitBtn.textContent = getRsvpMsg('submit');
        });
    });

    /* Countdown */
    const weddingDate = new Date('2027-05-15T17:00:00-06:00');

    function updateCountdown() {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        document.getElementById('cd-days').textContent = '0';
        document.getElementById('cd-hours').textContent = '0';
        document.getElementById('cd-mins').textContent = '0';
        document.getElementById('cd-secs').textContent = '0';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cd-days').textContent = days;
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
