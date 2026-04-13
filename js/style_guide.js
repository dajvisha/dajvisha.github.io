(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('accentToggle');
    const optCrimson = document.getElementById('optCrimson');
    const optOlive = document.getElementById('optOlive');

    function setMode(mode) {
      if (mode === 'olive') {
        root.classList.add('olive-mode');
        optOlive.classList.add('active');
        optCrimson.classList.remove('active');
      } else {
        root.classList.remove('olive-mode');
        optCrimson.classList.add('active');
        optOlive.classList.remove('active');
      }
    }

    optCrimson.addEventListener('click', () => setMode('crimson'));
    optOlive.addEventListener('click', () => setMode('olive'));
  })();
