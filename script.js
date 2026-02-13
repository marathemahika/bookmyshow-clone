document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Theme Toggle & FEATURE 4: Local Storage (Bonus) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    /**
     * Applies the selected theme mode to the page.
     * Ensures main content toggles correctly while the navbar remains consistent.
     */
    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            themeBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }

        // FORCE NAVBAR PROTECTION:
        // Ensures all text, links, and icons in the header/nav stay white in both modes.
        const navbarElements = document.querySelectorAll('header *, nav *');
        navbarElements.forEach(el => {
            // Do not force black text inside the search input or buttons with specific colors
            if (el.tagName !== 'INPUT' && !el.classList.contains('bg-[#F84464]')) {
                el.style.setProperty('color', '#ffffff', 'important');
            }
        });
    }

    // INITIAL STATE: Default to light mode unless 'dark' is saved in local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Event Listener for the toggle button
    themeBtn.addEventListener('click', () => {
        const currentMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentMode);
    });


    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('nav button');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert('Welcome! Sign-in functionality is coming soon.');
        });
    }


    // --- FEATURE 3: Image Gallery / Slider (Basic) ---
    const bannerImg = document.querySelector('section img');
    const prevBtn = document.querySelector('.fa-chevron-left');
    const nextBtn = document.querySelector('.fa-chevron-right');

    // Array of images for the slider
    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    ];
    let currentIndex = 0;

    // Change image to next
    if (nextBtn && bannerImg) {
        nextBtn.parentElement.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            bannerImg.src = images[currentIndex];
        });
    }

    // Change image to previous
    if (prevBtn && bannerImg) {
        prevBtn.parentElement.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            bannerImg.src = images[currentIndex];
        });
    }
});