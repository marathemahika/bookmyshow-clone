document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. FILTER CHIP TOGGLE
    ========================== */
    const filterChips = document.querySelectorAll(".filter-chip");

    filterChips.forEach(chip => {
        chip.addEventListener("click", function () {
            chip.classList.toggle("active");
        });
    });


    /* =========================
       2. MOVIE CARD CLICK
    ========================== */
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("click", function () {
            const movieTitle = card.querySelector("h3").textContent;
            alert("Booking tickets for " + movieTitle);
        });
    });


    /* =========================
       3. SEARCH VALIDATION
    ========================== */
    const searchInput = document.querySelector("input[type='text']");

    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {
                e.preventDefault();

                const value = searchInput.value.trim();

                if (value === "") {
                    alert("Please enter a movie name to search.");
                } else {
                    alert("Searching for: " + value);
                }
            }
        });
    }


    /* =========================
       4. DARK MODE TOGGLE
    ========================== */
    const toggle = document.getElementById("themeToggle");

    if (toggle) {

        toggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggle.textContent = "Light Mode";
            } else {
                localStorage.setItem("theme", "light");
                toggle.textContent = "Dark Mode";
            }

        });

        // Load saved theme
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            toggle.textContent = "Light Mode";
        }
    }

});
