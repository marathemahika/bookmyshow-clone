document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    /* =========================================
       THEME TOGGLE (ONLY IF BUTTON EXISTS)
    ========================================= */
    const themeBtn = document.getElementById('themeToggle');

    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            if (themeBtn) themeBtn.textContent = "Light Mode";
        } else {
            body.classList.remove('dark-mode');
            if (themeBtn) themeBtn.textContent = "Dark Mode";
        }

        // Keep navbar text white
        const navItems = document.querySelectorAll('nav a, nav button, nav i, nav h1');
        navItems.forEach(item => {
            if (item.tagName !== 'SPAN') {
                item.style.color = "#ffffff";
            }
        });

        const logoMy = document.querySelector('nav h1 span');
        if (logoMy) logoMy.style.color = "#F84464";
    }

    if (themeBtn) {
        applyTheme('light');

        themeBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }


    /* =========================================
       SIGN IN BUTTON ALERT
    ========================================= */
    const signInBtn = document.querySelector('nav button.bg-\\[\\#F84464\\]');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert("Sign-in system is under maintenance.");
        });
    }


    /* =========================================
       ACTIVE NAVIGATION HIGHLIGHT
    ========================================= */
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("text-white", "font-semibold");
        }
    });


    /* =========================================
       LIVE SEARCH (MOVIES + STREAM)
    ========================================= */
    const searchInput = document.querySelector('input[type="text"]');

    if (searchInput) {
        searchInput.addEventListener('input', function () {

            const query = this.value.toLowerCase();

            const movieCards = document.querySelectorAll('.movie-card');
            const streamCards = document.querySelectorAll('.stream-card');
            const allCards = [...movieCards, ...streamCards];

            let visibleCount = 0;

            allCards.forEach(card => {
                const title = card.querySelector('h3, h4')?.textContent.toLowerCase();

                if (title && title.includes(query)) {
                    card.style.display = "block";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            let noResult = document.getElementById("noResultsMessage");

            if (!noResult) {
                noResult = document.createElement("p");
                noResult.id = "noResultsMessage";
                noResult.textContent = "No results found.";
                noResult.style.textAlign = "center";
                noResult.style.marginTop = "20px";
                noResult.style.fontWeight = "bold";
                document.querySelector("main")?.appendChild(noResult);
            }

            noResult.style.display = visibleCount === 0 ? "block" : "none";
        });
    }


    /* =========================================
       UNIVERSAL IMAGE SLIDER (INDEX PAGE)
    ========================================= */
    const sliderImage = document.querySelector('.hero-slider img');
    const leftArrow = document.querySelector('.fa-chevron-left');
    const rightArrow = document.querySelector('.fa-chevron-right');

    if (sliderImage && leftArrow && rightArrow) {

        const images = [
            "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070",
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070"
        ];

        let index = 0;

        function updateImage() {
            sliderImage.src = images[index];
        }

        function nextSlide() {
            index = (index + 1) % images.length;
            updateImage();
        }

        function prevSlide() {
            index = (index - 1 + images.length) % images.length;
            updateImage();
        }

        rightArrow.parentElement.addEventListener("click", nextSlide);
        leftArrow.parentElement.addEventListener("click", prevSlide);

        setInterval(nextSlide, 4000);
    }


    /* =========================================
       STREAM PLAY INTERACTION
    ========================================= */
    const playOverlays = document.querySelectorAll('.play-overlay');

    playOverlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            alert("Streaming preview coming soon.");
        });
    });


    /* =========================================
       FILTER CHIP TOGGLE (INDEX PAGE)
    ========================================= */
    const filterChips = document.querySelectorAll('.filter-chip');

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
        });
    });

});
