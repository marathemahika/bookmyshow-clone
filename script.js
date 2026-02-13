console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById('dark-mode-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

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
