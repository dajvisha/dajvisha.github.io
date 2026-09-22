(function () {
      const i18n = {
        es: {
          'skip-link': 'Saltar al contenido principal',
          'preloader-date': 'MAYO 15, 2027 &middot; OAXACA',
          'nav-home': 'Inicio',
          'nav-venue': 'Lugar',
          'nav-rsvp': 'Confirmar',
          'nav-toggle-label': 'Menú',
          'hero-h1': 'En Oaxaca hay un mezcal <em>esperándote</em>',
          'hero-info': 'MAYO 15, 2027 &middot; OAXACA',
          'hero-cta': 'Confirma tu presencia',
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
          'rsvp-body': 'Agradecemos su confirmación antes del <em style="font-style:italic;color:var(--sienna);">15 de febrero de 2027.</em>',
          'rsvp-name-label': 'Nombre completo',
          'rsvp-name-placeholder': 'Tu nombre',

          'rsvp-attend-legend': 'Asistencia',
          'rsvp-attend-yes': 'Asistiré con gusto',
          'rsvp-attend-no': 'No podré asistir',
          'rsvp-guests-label': 'Número de asistentes',
          'rsvp-guests-opt0': '— Selecciona —',
          'rsvp-guests-opt1': '1 persona',
          'rsvp-guests-opt2': '2 personas',
          'rsvp-guests-opt3': '3 personas',
          'rsvp-guests-opt4': '4 personas',
          'rsvp-dietary-label': 'Restricciones alimentarias <span style="opacity:.45;">(opcional)</span>',
          'rsvp-dietary-placeholder': 'Vegetariano, alergias, etc.',
          'rsvp-note-label': 'Mensaje para los novios <span style="opacity:.45;">(opcional)</span>',
          'rsvp-note-placeholder': 'Un pensamiento, un deseo…',
          'validationGuestSelection': 'Por favor selecciona al menos un invitado.',
          'rsvp-submit': 'Confirmar',
          'footer-sub': 'MAYO 15, 2027 &middot; OAXACA',
          // nav (optional sections)
          'nav-oaxaca': 'Oaxaca',
          'nav-registry': 'Regalos',
          'nav-more': 'Más',
          // venue section
          'venue-section-heading': 'El <em>día</em>',
          // venue labels
          'venue-col-label': 'La Recepción',
          'program-label': 'Programa',
          // la misa
          'misa-col-label': 'La Misa',
          'misa-space-label': 'Templo',
          'misa-name': 'Templo de Santo Domingo',
          'misa-time-label': 'Hora',
          'misa-time': '4:30 PM',
          // attire + schedule
          'attire-label': 'Vestimenta',
          'attire-val': 'Formal elegante',
          'attire-women-label': 'Ellas',
          'attire-women-desc': 'Vestido largo',
          'attire-men-label': 'Ellos',
          'attire-men-desc': 'Traje, saco o camisa de vestir',
          'attire-palette-label': 'Paleta sugerida para vestidos',
          'attire-color-1': 'Arena',
          'attire-color-2': 'Champán',
          'attire-color-3': 'Mostaza',
          'attire-color-4': 'Terracota',
          'attire-color-5': 'Durazno',
          'attire-color-6': 'Rosa arcilla',
          'attire-color-7': 'Malva',
          'attire-color-8': 'Vino tinto',
          'attire-color-9': 'Verde salvia',
          'attire-color-10': 'Verde olivo',
          'attire-white-note': 'Les pedimos amablemente evitar el color blanco.',
          'sched-ceremony-time': '4:30 PM',
          'sched-ceremony-time-short': '4:30 PM',
          'sched-ceremony-name': 'Ceremonia religiosa',
          'sched-ceremony-venue': 'Templo de Santo Domingo',
          'sched-reception-venue': 'El Cardenal Oaxaca',
          'sched-calenda-time': '5:30 PM',
          'sched-calenda-name': 'Calenda',
          'sched-calenda-venue': 'Explanada de Templo de Santo Domingo',
          'sched-calenda-note': 'Procesión tradicional oaxaqueña',
          'sched-reception-time': '6:30 PM',
          'sched-reception-time-short': '6:30 PM',
          'sched-reception-name': 'Recepción',
          'sched-party-name': 'Baile y fiesta',
          'sched-party-note': '¡Hasta que la música decida!',
          // oaxaca guide
          'oaxaca-label': 'Oaxaca, lo esencial',
          'oaxaca-heading': 'Oaxaca, <em>lo esencial</em>',
          'tab-hotels': 'Hospedarse',
          'tab-travel': 'Llegar',
          'tab-explore': 'Explorar',
          // hotels
          'hotels-label': 'Alojamiento',
          'hotels-heading': 'Dónde <em>hospedarse</em>',
          'hotels-intro': 'En Oaxaca encontrarán muchas opciones de alojamiento, desde Airbnbs hasta hoteles. Les compartimos algunas recomendaciones para que encuentren el lugar perfecto para su visita.',
          'hotels-tier-luxury': 'Boutique · Lujo',
          'hotels-tier-boutique': 'Boutique · Diseño',
          'hotels-tier-charm': 'Encanto · Accesible',
          'hotel-1-meta': 'Una propiedad de estilo colonial del siglo XVI con tradicionales balcones de hierro forjado, situada cerca del centro histórico.',
          'hotel-2-meta': 'Un alojamiento íntimo con un patio central tradicional, ubicado muy cerca del centro cultural y del distrito histórico.',
          'hotel-3-meta': 'Un edificio patrimonial clásico ubicado sobre la Avenida Reforma en el corazón del distrito histórico.',
          'hotel-4-meta': 'Una propiedad boutique de diseño ubicada en un edificio tradicional situado cerca de los monumentos históricos.',
          'hotel-5-meta': 'Un edificio restaurado del siglo XIX con arquitectura tradicional situado justo en el centro histórico.',
          'hotel-6-meta': 'Una propiedad de diseño conceptual ubicada en una estructura de estilo histórico cerca de los principales sitios culturales.',
          'hotel-7-meta': 'Una propiedad íntima ubicada en un edificio de la época colonial situado a pocos pasos de la plaza principal.',
          'hotel-8-meta': 'Una propiedad situada dentro de un antiguo convento del siglo XVI que cuenta con patios de piedra conservados y arquitectura colonial clásica cerca de Santo Domingo.',
          'hotels-book-link': 'Reservar ↗',
          'hotels-map-link': 'Ver en mapa ↗',
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
          'explore-monteAlban-note': 'Sitio arqueológico zapoteca',
          'explore-santoDomingo-note': 'Museo de las Culturas de Oaxaca',
          'explore-maco-note': 'Museo de Arte Contemporáneo de Oaxaca',
          'explore-nature-label': 'Naturaleza',
          'explore-hierve-note': 'Cascadas petrificadas',
          'explore-tule-note': 'Ahuehuete milenario con el tronco más ancho del mundo',
          'explore-traditional-label': 'Tradicional y Ancestral',
          'explore-pasillo-note': 'Carnes al carbón servidas con tortillas frescas y queso local.',
          'explore-quince-note': 'Recetas regionales tradicionales y moles de herencia.',
          'explore-contemporary-label': 'Cocina de Autor y Contemporánea',
          'explore-criollo-note': 'Cocina a las brasas que enaltece ingredientes nativos con técnicas modernas.',
          'explore-danzantes-note': 'Cocina contemporánea que fusiona sabores tradicionales con ejecución moderna.',
          'explore-casaoaxaca-note': 'Platillos contemporáneos sofisticados con moles complejos e ingredientes de mercado.',
          'explore-beverages-label': 'Bebidas, Café y Panadería',
          'explore-convite-note': 'Mezcal artesanal maridado con bocados tradicionales.',
          'explore-filemon-note': 'Pan artesanal, repostería y café de especialidad.',
          'explore-atoleria-note': 'Bebidas ancestrales de maíz y cacao y atoles de herencia.',
          'explore-bodaega-note': 'Panes sostenibles de masa madre y repostería artesanal de trigo.',
          // registry
          'registry-label': 'Mesa de regalos',
          'registry-heading': 'Tu presencia es <em>el regalo</em>',
          'registry-body': 'Su compañía es el obsequio más importante para nosotros. En caso de desear colaborar para nuestra nueva etapa, les estaremos muy agradecidos. Más adelante compartiremos los detalles.',
        },
        en: {
          'skip-link': 'Skip to main content',
          'preloader-date': 'May 15, 2027 &middot; Oaxaca',
          'nav-home': 'Home',
          'nav-venue': 'Venue',
          'nav-rsvp': 'Confirm',
          'nav-toggle-label': 'Menu',
          'hero-h1': 'In Oaxaca there\'s a mezcal <em>waiting for you</em>',
          'hero-info': 'May 15, 2027 &middot; Oaxaca, Mexico',
          'hero-cta': 'Confirm your attendance',
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
          'homes-label': 'We\'ve lived together in',
          'home-1': 'Monclova, Mexico',
          'home-2': 'Mexico City, Mexico',
          'home-3': 'San Francisco, United States',
          'phrase-1': 'Agave taught us to wait.',
          'phrase-2': 'Distance taught us to keep choosing each other.',
          'phrase-3': 'And with mezcal, we toast to forever.',
          'venue-label': 'The venue',
          'venue-name-em': 'Oaxaca',
          'venue-map-label': 'View on map ↗',
          'venue-map-link-aria': 'Open location in Google Maps',
          'venue-address-label': 'Address',
          'venue-date-label': 'Date',
          'venue-date-val': 'May 15, 2027',
          'venue-reception-label': 'Reception',
          'venue-time-tbd': 'To be confirmed',
          'rsvp-section-label': 'Kindly respond',
          'rsvp-heading': 'Will you join us?',
          'rsvp-body': 'We kindly ask that you confirm your attendance by <em style="font-style:italic;color:var(--sienna);">February 15, 2027.</em>',
          'rsvp-name-label': 'Full name',
          'rsvp-name-placeholder': 'Your name',

          'rsvp-attend-legend': 'Attendance',
          'rsvp-attend-yes': 'I will attend',
          'rsvp-attend-no': 'Unable to attend',
          'rsvp-guests-label': 'Number of guests',
          'rsvp-guests-opt0': '— Select —',
          'rsvp-guests-opt1': '1 person',
          'rsvp-guests-opt2': '2 people',
          'rsvp-guests-opt3': '3 people',
          'rsvp-guests-opt4': '4 people',
          'rsvp-dietary-label': 'Dietary restrictions only <span style="opacity:.45;">(optional)</span>',
          'rsvp-dietary-placeholder': 'Vegetarian, allergies, etc.',
          'rsvp-note-label': 'A note for us <span style="opacity:.45;">(optional)</span>',
          'rsvp-note-placeholder': 'A thought, a wish…',
          'validationGuestSelection': 'Please select at least one guest.',
          'rsvp-submit': 'Confirm',
          'footer-sub': 'May 15, 2027 &middot; Oaxaca, Mexico',
          // nav (optional sections)
          'nav-oaxaca': 'Oaxaca',
          'nav-registry': 'Registry',
          'nav-more': 'More',
          // venue section
          'venue-section-heading': 'The <em>day</em>',
          // venue labels
          'venue-col-label': 'The Reception',
          'program-label': 'Schedule',
          // la misa
          'misa-col-label': 'The Mass',
          'misa-space-label': 'Church',
          'misa-name': 'Templo de Santo Domingo',
          'misa-time-label': 'Time',
          'misa-time': '4:30 PM',
          // attire + schedule
          'attire-label': 'Dress code',
          'attire-val': 'Formal attire',
          'attire-women-label': 'Ladies',
          'attire-women-desc': 'Floor-length gown',
          'attire-men-label': 'Gentlemen',
          'attire-men-desc': 'Suit, blazer, or dress shirt',
          'attire-palette-label': 'Suggested palette for dresses',
          'attire-color-1': 'Sand',
          'attire-color-2': 'Champagne',
          'attire-color-3': 'Mustard',
          'attire-color-4': 'Terracotta',
          'attire-color-5': 'Peach',
          'attire-color-6': 'Dusty rose',
          'attire-color-7': 'Mauve',
          'attire-color-8': 'Burgundy',
          'attire-color-9': 'Sage green',
          'attire-color-10': 'Olive green',
          'attire-white-note': 'We ask that guests avoid wearing white.',
          'sched-ceremony-time': '4:30 PM',
          'sched-ceremony-time-short': '4:30 PM',
          'sched-ceremony-name': 'Church ceremony',
          'sched-ceremony-venue': 'Templo de Santo Domingo',
          'sched-reception-venue': 'El Cardenal Oaxaca',
          'sched-calenda-time': '5:30 PM',
          'sched-calenda-name': 'Calenda',
          'sched-calenda-venue': 'Explanada de Templo de Santo Domingo',
          'sched-calenda-note': 'Traditional Oaxacan street procession',
          'sched-reception-time': '6:30 PM',
          'sched-reception-time-short': '6:30 PM',
          'sched-reception-name': 'Reception',
          'sched-party-name': 'Dancing & celebration',
          'sched-party-note': 'Until the music runs out!',
          // oaxaca guide
          'oaxaca-label': 'Oaxaca, the essentials',
          'oaxaca-heading': 'Oaxaca, <em>the essentials</em>',
          'tab-hotels': 'Hotels',
          'tab-travel': 'Getting Here',
          'tab-explore': 'Explore',
          // hotels
          'hotels-label': 'Hotels',
          'hotels-heading': 'Where to <em>stay</em>',
          'hotels-intro': 'Oaxaca offers many wonderful places to stay, from Airbnbs to hotels. Here are a few recommendations to help you find the perfect place for your visit.',
          'hotels-tier-luxury': 'Boutique · Luxury',
          'hotels-tier-boutique': 'Boutique · Design',
          'hotels-tier-charm': 'Charming · Accessible',
          'hotel-1-meta': 'A 16th-century colonial-style property featuring traditional wrought-iron balconies, situated near the historic center.',
          'hotel-2-meta': 'An intimate lodging with a traditional central courtyard, located very close to the cultural center and historic district.',
          'hotel-3-meta': 'A classic heritage building positioned along Avenida Reforma in the heart of the historic district.',
          'hotel-4-meta': 'A design-focused boutique property set within a traditional building located close to the historic landmarks.',
          'hotel-5-meta': 'A restored 19th-century building featuring traditional architecture located right in the historic center.',
          'hotel-6-meta': 'A conceptual design property set in a historic-style structure located near the main cultural sites.',
          'hotel-7-meta': 'An intimate property housed in a colonial-era building situated a short walk from the main square.',
          'hotel-8-meta': 'A property set within a historic 16th-century former convent featuring preserved stone courtyards and classic colonial architecture near Santo Domingo.',
          'hotels-book-link': 'Book ↗',
          'hotels-map-link': 'View on map ↗',
          // travel
          'travel-label': 'Getting There',
          'travel-heading': 'Getting to <em>Oaxaca</em>',
          'travel-air-label': 'By air',
          'travel-air-val': 'Oaxaca International Airport (OAX) · ~9 km from Centro Histórico. Direct flights from Mexico City with Aeroméxico, VivaAerobus, and Volaris.',
          'travel-taxi-label': 'Airport → Hotel',
          'travel-taxi-val': 'Taxi (200–250 MXN approx., 20 min approx.). Car rental available, though the center is best explored on foot.',
          'travel-local-label': 'Downtown',
          'travel-local-val': 'Oaxaca\'s historic center is entirely walkable. El Cardenal sits on Macedonio Alcalá, the city\'s main pedestrian promenade.',
          // explore
          'explore-label': 'Explore',
          'explore-heading': 'Oaxaca beyond <em>the wedding</em>',
          'explore-culture-label': 'Culture & History',
          'explore-monteAlban-note': 'Zapotec archaeological site',
          'explore-santoDomingo-note': 'Museum of Oaxacan Cultures',
          'explore-maco-note': 'Museum of Contemporary Art of Oaxaca',
          'explore-nature-label': 'Nature',
          'explore-hierve-note': 'Petrified waterfalls',
          'explore-tule-note': 'Ancient Montezuma cypress with the widest trunk in the world',
          'explore-traditional-label': 'Traditional & Ancestral',
          'explore-pasillo-note': 'Charcoal-grilled meats served with fresh tortillas and local cheese.',
          'explore-quince-note': 'Traditional regional recipes and heritage moles.',
          'explore-contemporary-label': 'Contemporary & Chef-Driven',
          'explore-criollo-note': 'Fire-based cooking elevating native ingredients through modern techniques.',
          'explore-danzantes-note': 'Contemporary cuisine blending traditional flavors with modern execution.',
          'explore-casaoaxaca-note': 'Sophisticated contemporary dishes featuring complex moles and market ingredients.',
          'explore-beverages-label': 'Beverages, Bakery & Cafe',
          'explore-convite-note': 'Artisanal mezcal paired with traditional regional bites.',
          'explore-filemon-note': 'Artisan breads, pastries, and specialty coffee.',
          'explore-atoleria-note': 'Ancestral corn and cacao beverages and heritage atoles.',
          'explore-bodaega-note': 'Sustainable sourdough breads and artisan wheat pastries.',
          // registry
          'registry-label': 'Registry',
          'registry-heading': 'Your presence is <em>the gift</em>',
          'registry-body': "Having you with us is the most meaningful gift. If you\'d like to support us as we begin this new chapter, we would be deeply grateful. We\'ll share the details later.",
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
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
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
        document.getElementById('extra-dietary').classList.toggle('show', attending);
      });
    });

    /* RSVP — submit to Google Apps Script */
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhXkarD0MD9_eTuE-WWfO2SnG2MENMlkuMBKqa3PX8ugxyRKtgoi1fjpOfUV7T1Fxx/exec';

    const submitBtn = document.getElementById('rsvp-submit');
    const feedback = document.getElementById('rsvp-feedback');
    const feedbackMsg = document.getElementById('rsvp-feedback-msg');
    const guestPicker = document.getElementById('guest-picker');
    const guestList = document.getElementById('guest-list');
    const additionalGuestFields = document.getElementById('additional-guest-fields');
    const inviteIdField = document.getElementById('rsvp-id');

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
        validationGuestSelection: 'Por favor selecciona al menos un invitado.',
        inviteLoading: 'Cargando lista de invitados…',
        inviteError: 'No se pudo cargar la lista de invitados.',
        inviteEmpty: 'No hay invitados disponibles.',
        additionalGuestsToggle: 'Tendre invitados adicionales (máximo {max})',
        additionalGuestsLabel: 'Nombres de invitados adicionales',
        additionalGuestPlaceholder: 'Nombre del invitado adicional {number}',
        successTitle: '¡Listo, te esperamos!',
        successBody: 'Nos vemos en Oaxaca el 15 de mayo de 2027.',
        successTitleNo: 'Gracias por avisarnos.',
        successBodyNo: 'Qué pena no tenerte. ¡Nos vemos pronto!',
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
        validationGuestSelection: 'Please select at least one guest.',
        inviteLoading: 'Loading guest list…',
        inviteError: 'Unable to load the guest list.',
        inviteEmpty: 'No guests available.',
        additionalGuestsToggle: 'I will bring additional guests (maximum {max})',
        additionalGuestsLabel: 'Names of additional guests',
        additionalGuestPlaceholder: 'Name of additional guest {number}',
        successTitle: 'You\'re all set!',
        successBody: 'See you in Oaxaca, May 15, 2027.',
        successTitleNo: 'Thanks for letting us know.',
        successBodyNo: 'We\'ll miss you — thanks for letting us know.',
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

    function parseInvitedNames(raw) {
      return String(raw || '')
        .split(',')
        .map(name => name.trim())
        .filter(Boolean);
    }

    function renderGuestOptions(names) {
      if (!guestList) return;
      guestList.innerHTML = '';

      const uniqueNames = [...new Set(names.map(name => name.trim()).filter(Boolean))];
      if (uniqueNames.length === 0) {
        renderGuestStatus('inviteEmpty');
        return;
      }

      uniqueNames.forEach((name) => {
        const label = document.createElement('label');
        label.className = 'guest-option';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'guest-check';
        input.value = name;
        input.checked = false;

        const span = document.createElement('span');
        span.textContent = name;

        label.appendChild(input);
        label.appendChild(span);
        guestList.appendChild(label);
      });
    }

    function renderGuestStatus(messageKey) {
      if (!guestList) return;
      const status = document.createElement('span');
      status.className = 'guest-option guest-option--empty';
      status.dataset.rsvpMessage = messageKey;
      status.textContent = getRsvpMsg(messageKey);
      guestList.replaceChildren(status);
    }

    function refreshDynamicRsvpText() {
      document.querySelectorAll('[data-rsvp-message]').forEach((element) => {
        let message = getRsvpMsg(element.dataset.rsvpMessage);
        if (element.dataset.max) message = message.replace('{max}', element.dataset.max);
        if (element.dataset.number) message = message.replace('{number}', element.dataset.number);
        element.textContent = message;
      });
    }

    document.addEventListener('languagechange', refreshDynamicRsvpText);

    let inviteNames = [];
    let allowAdditionalGuests = false;
    let maxAdditionalGuests = 0;
    let inviteLoadStatus = 'loading';
    const INVITE_CACHE_TTL = 60 * 60 * 1000;

    function getCachedInvite(id) {
      try {
        const cached = JSON.parse(localStorage.getItem(`invite:${id}`));
        if (!cached || Date.now() - cached.timestamp >= INVITE_CACHE_TTL) return null;
        return cached.data;
      } catch (error) {
        return null;
      }
    }

    function cacheInvite(id, data) {
      try {
        localStorage.setItem(`invite:${id}`, JSON.stringify({
          timestamp: Date.now(),
          data,
        }));
      } catch (error) {
        // Storage may be unavailable in private browsing or restricted contexts.
      }
    }

    function applyInviteData(data, urlId) {
      inviteNames = Array.isArray(data.invitedNames)
        ? data.invitedNames
        : parseInvitedNames(data.invitedNames);
      maxAdditionalGuests = Number.isInteger(Number(data.maxGuests))
        ? Math.max(0, Number(data.maxGuests))
        : 0;
      allowAdditionalGuests = data.allowAdditionalGuests === true || maxAdditionalGuests > 0;
      inviteLoadStatus = 'ready';

      if (inviteIdField) inviteIdField.value = data.id || urlId;
      if (document.querySelector('.attend-btn.selected')?.dataset.attend === 'yes') {
        renderGuestOptions(inviteNames);
        renderAdditionalGuestFields();
        showGuestPicker(true);
      }
    }

    function showGuestPicker(visible) {
      if (!guestPicker) return;
      guestPicker.hidden = !visible;
      guestPicker.classList.toggle('show', visible);
    }

    function renderAdditionalGuestFields() {
      if (!additionalGuestFields) return;
      additionalGuestFields.innerHTML = '';

      if (!allowAdditionalGuests || maxAdditionalGuests < 1) {
        additionalGuestFields.hidden = true;
        return;
      }

      const toggleLabel = document.createElement('label');
      toggleLabel.className = 'additional-guest-toggle';

      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.id = 'additional-guests-toggle';
      toggle.name = 'additional-guests';

      const toggleText = document.createElement('span');
      toggleText.dataset.rsvpMessage = 'additionalGuestsToggle';
      toggleText.dataset.max = maxAdditionalGuests;
      toggleText.textContent = getRsvpMsg('additionalGuestsToggle').replace('{max}', maxAdditionalGuests);

      toggleLabel.appendChild(toggle);
      toggleLabel.appendChild(toggleText);
      additionalGuestFields.appendChild(toggleLabel);

      const inputFields = document.createElement('div');
      inputFields.className = 'additional-guest-inputs';
      inputFields.hidden = true;

      const label = document.createElement('span');
      label.className = 'additional-guest-label';
      label.dataset.rsvpMessage = 'additionalGuestsLabel';
      label.textContent = getRsvpMsg('additionalGuestsLabel');
      inputFields.appendChild(label);

      for (let index = 0; index < maxAdditionalGuests; index += 1) {
        const input = document.createElement('input');
        input.className = 'form-input additional-guest-input';
        input.type = 'text';
        input.name = 'additional-guest-name';
        input.dataset.rsvpMessage = 'additionalGuestPlaceholder';
        input.dataset.number = index + 1;
        input.placeholder = getRsvpMsg('additionalGuestPlaceholder').replace('{number}', index + 1);
        input.autocomplete = 'off';
        inputFields.appendChild(input);
      }

      toggle.addEventListener('change', () => {
        inputFields.hidden = !toggle.checked;
      });
      additionalGuestFields.appendChild(inputFields);
      additionalGuestFields.hidden = false;
    }

    function loadInviteFromSheet() {
      const urlId = new URLSearchParams(window.location.search).get('id');
      if (!urlId) {
        inviteLoadStatus = 'error';
        return;
      }

      const cachedInvite = getCachedInvite(urlId);
      if (cachedInvite) {
        applyInviteData(cachedInvite, urlId);
        return;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      fetch(`${SCRIPT_URL}?id=${encodeURIComponent(urlId)}`, {
        cache: 'no-store',
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) throw new Error('Invite lookup failed');
          return response.json();
        })
        .then((data) => {
          if (!data || data.found === false) throw new Error('Invite not found');
          cacheInvite(urlId, data);
          applyInviteData(data, urlId);
        })
        .catch(() => {
          inviteLoadStatus = 'error';
          if (document.querySelector('.attend-btn.selected')?.dataset.attend === 'yes') {
            renderGuestStatus('inviteError');
          }
        })
        .finally(() => {
          clearTimeout(timeout);
        });
    }

    document.querySelectorAll('.attend-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        clearFieldError('rsvp-attend-error', null);
        clearFieldError('rsvp-guest-error', null);
        const attending = btn.dataset.attend === 'yes';
        if (attending) {
          if (inviteLoadStatus === 'loading') {
            renderGuestStatus('inviteLoading');
          } else if (inviteLoadStatus === 'error') {
            renderGuestStatus('inviteError');
          } else {
            renderGuestOptions(inviteNames);
          }
          renderAdditionalGuestFields();
          showGuestPicker(true);
        } else {
          showGuestPicker(false);
        }
      });
    });

    submitBtn.addEventListener('click', () => {
      const attendBtn = document.querySelector('.attend-btn.selected');
      const honeypot = document.querySelector('input[name="_honeypot"]').value;

      // Honeypot check
      if (honeypot) return;

      // Specific validation
      if (!attendBtn) {
        showFieldError('rsvp-attend-error', null, 'validationAttend');
        document.querySelector('.attend-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const attending = attendBtn.dataset.attend === 'yes';
      const selectedGuests = Array.from(document.querySelectorAll('#guest-list input[name="guest-check"]:checked'))
        .map((checkbox) => checkbox.value.trim())
        .filter(Boolean);
      const additionalGuestsAllowed = document.querySelector('#additional-guests-toggle')?.checked === true;
      const additionalGuests = additionalGuestsAllowed
        ? Array.from(document.querySelectorAll('#additional-guest-fields input[name="additional-guest-name"]'))
          .map((input) => input.value.trim())
          .filter(Boolean)
        : [];

      if (attending && selectedGuests.length === 0) {
        showFieldError('rsvp-guest-error', null, 'validationGuestSelection');
        if (guestPicker) guestPicker.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const dietary = attending ? document.getElementById('rsvp-dietary').value.trim() : '';
      const id = inviteIdField ? inviteIdField.value.trim() : '';
      const invitedNames = [...selectedGuests, ...additionalGuests].join(', ');

      submitBtn.disabled = true;
      submitBtn.textContent = getRsvpMsg('sending');
      feedback.hidden = true;

      const payload = {
        id,
        attending,
        name: invitedNames,
        invitedNames,
        dietary,
        timestamp: new Date().toISOString(),
      };

      fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          let data = {};
          try {
            data = await response.json();
          } catch (error) {
            data = { result: 'success' };
          }

          if (data.result === 'error') {
            throw new Error(data.message || 'Submission failed');
          }

          document.querySelector('.rsvp-form').style.display = 'none';
          const successCard = document.getElementById('rsvp-success-card');
          document.getElementById('rsvp-success-title').textContent = getRsvpMsg(attending ? 'successTitle' : 'successTitleNo');
          document.getElementById('rsvp-success-body').textContent = getRsvpMsg(attending ? 'successBody' : 'successBodyNo');
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

    loadInviteFromSheet();

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
