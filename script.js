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

            /* Update card backgrounds */
            const cards = document.querySelectorAll('.movie-card, .stream-card, .event-card');
            cards.forEach(card => {
                card.style.backgroundColor = isDark ? "#ffffff" : "#1f1f1f";
            });

            /* FIX: Make ALL gray text visible in dark mode */
const grayTexts = document.querySelectorAll('[class*="text-gray"]');

grayTexts.forEach(el => {
    if (isDark) {
        // Switching to LIGHT → restore original
        el.style.color = "";
    } else {
        // Switching to DARK → force white
        el.style.color = "#ffffff";
    }
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
       LIVE SEARCH (ALL CARD TYPES)
    ========================================= */

    const searchInput = document.querySelector('input[type="text"]');

    if (searchInput) {

        searchInput.addEventListener('input', function () {

            const query = this.value.toLowerCase();

            const movieCards = document.querySelectorAll('.movie-card');
            const streamCards = document.querySelectorAll('.stream-card');
            const eventCards = document.querySelectorAll('.event-card');

            const allCards = [...movieCards, ...streamCards, ...eventCards];

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
       UNIVERSAL INFO MODAL
    ========================================= */

    const cards = document.querySelectorAll('.movie-card, .stream-card, .event-card');

    if (cards.length > 0) {

        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.8)";
        modal.style.display = "none";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "9999";

        modal.innerHTML = `
            <div style="
                background:#1f1f1f;
                padding:30px;
                border-radius:10px;
                width:90%;
                max-width:500px;
                color:white;
                text-align:center;
                position:relative;
            ">
                <span id="closeModal" style="
                    position:absolute;
                    right:15px;
                    top:10px;
                    font-size:22px;
                    cursor:pointer;
                ">&times;</span>

                <h2 id="modalTitle"></h2>
                <p id="modalInfo" style="margin-top:10px;"></p>
            </div>
        `;

        document.body.appendChild(modal);

        const modalTitle = modal.querySelector("#modalTitle");
        const modalInfo = modal.querySelector("#modalInfo");
        const closeModal = modal.querySelector("#closeModal");

        cards.forEach(card => {
            card.addEventListener("click", function () {

                const titleElement = this.querySelector("h3, h4");
                const allParagraphs = this.querySelectorAll("p");

                let combinedInfo = "";
                allParagraphs.forEach(p => {
                    combinedInfo += p.textContent + " ";
                });

                modalTitle.textContent = titleElement ? titleElement.textContent : "Details";
                modalInfo.textContent = combinedInfo || "Details unavailable.";

                modal.style.display = "flex";
            });
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});
