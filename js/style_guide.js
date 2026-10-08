(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('accentToggle');
    const optBordeaux = document.getElementById('optBordeaux');
    const optOlive = document.getElementById('optOlive');

    function setMode(mode) {
      if (mode === 'olive') {
        root.classList.add('olive-mode');
        optOlive.classList.add('active');
        optBordeaux.classList.remove('active');
      } else {
        root.classList.remove('olive-mode');
        optBordeaux.classList.add('active');
        optOlive.classList.remove('active');
      }
    }

    optBordeaux.addEventListener('click', () => setMode('bordeaux'));
    optOlive.addEventListener('click', () => setMode('olive'));
  })();
