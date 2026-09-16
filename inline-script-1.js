
        // Logika untuk Musik
        const audio = document.getElementById('bg-music');
        const playBtn = document.getElementById('play-btn');
        let isPlaying = false;

        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playBtn.innerText = "▶ Putar Lagu Kita";
            } else {
                audio.play();
                playBtn.innerText = "⏸ Jeda Lagu";
            }
            isPlaying = !isPlaying;
        });

        // Logika untuk Pindah Halaman tanpa Reload
        function showPage(pageNumber) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));

            const btns = document.querySelectorAll('.nav-btn');
            btns.forEach(btn => btn.classList.remove('active'));

            document.getElementById('page-' + pageNumber).classList.add('active');
            btns[pageNumber - 1].classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    