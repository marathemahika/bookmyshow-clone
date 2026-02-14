document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    /* =========================================
   CLEAN THEME TOGGLE (HEADER UNTOUCHED)
========================================= */

const themeBtn = document.getElementById('themeToggle');

if (themeBtn) {

    themeBtn.addEventListener('click', () => {

        const isDark = body.classList.contains('dark-mode');

        if (isDark) {
            // LIGHT MODE
            body.classList.remove('dark-mode');
            body.style.backgroundColor = "#f5f5f5";
            body.style.color = "#000000";
            themeBtn.textContent = "Dark Mode";

        } else {
            // DARK MODE
            body.classList.add('dark-mode');
            body.style.backgroundColor = "#121212";
            body.style.color = "#ffffff";
            themeBtn.textContent = "Light Mode";
        }

        // Change only cards — NOT header
        const cards = document.querySelectorAll('.movie-card, .stream-card');
        cards.forEach(card => {
            card.style.backgroundColor = isDark ? "#ffffff" : "#1f1f1f";
        });

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

/* =========================================
   MOVIE INFO MODAL (ALL CARDS)
========================================= */

const allCards = document.querySelectorAll('.movie-card, .stream-card');

// Create modal dynamically
const modal = document.createElement("div");
modal.id = "movieModal";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "9999";

modal.innerHTML = `
    <div style="
        background: #1f1f1f;
        color: white;
        padding: 30px;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        text-align: center;
        position: relative;
    ">
        <span id="closeModal" style="
            position:absolute;
            top:10px;
            right:15px;
            cursor:pointer;
            font-size:20px;
        ">&times;</span>

        <h2 id="modalTitle" style="font-size:22px; font-weight:bold;"></h2>
        <p id="modalInfo" style="margin-top:10px; font-size:14px;"></p>
    </div>
`;

document.body.appendChild(modal);

const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.getElementById("closeModal");

// Open modal on card click
allCards.forEach(card => {
    card.addEventListener("click", () => {

        const title = card.querySelector("h3, h4")?.textContent || "Movie Title";
        const info = card.querySelector("p")?.textContent || "No additional info available.";

        modalTitle.textContent = title;
        modalInfo.textContent = info;

        modal.style.display = "flex";
    });
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
