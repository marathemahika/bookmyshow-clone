document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) [cite: 21, 22, 25] ---
    // --- FEATURE 4: Local Storage (Bonus) [cite: 42, 43] ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        // Target specifically the main content area and the sidebar [cite: 47]
        const mainContent = document.querySelector('main');
        const aside = document.querySelector('aside');
        const moviesSection = document.querySelector('section.flex-1');

        if (mode === 'dark') {
            body.style.backgroundColor = '#121212';
            
            // Change text in main sections to white
            if(mainContent) mainContent.style.color = '#ffffff';
            
            // Fix heading visibility (e.g., "Movies in Mumbai")
            const headings = document.querySelectorAll('main h2, main h3, aside h2, aside span');
            headings.forEach(h => {
                if (!h.classList.contains('text-[#F84464]')) {
                    h.style.color = '#ffffff';
                }
            });

            themeBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            // Light Mode (Default State) [cite: 50]
            body.style.backgroundColor = '#f5f5f5';
            
            if(mainContent) mainContent.style.color = '#333333';
            
            const headings = document.querySelectorAll('main h2, main h3, aside h2, aside span');
            headings.forEach(h => {
                if (!h.classList.contains('text-[#F84464]')) {
                    h.style.color = '#1f2937';
                }
            });

            themeBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }

        // --- MANDATORY: Navbar Text remains white in BOTH modes ---
        const navbarElements = document.querySelectorAll('nav h1, nav button, nav a, nav i');
        navbarElements.forEach(el => {
            el.style.color = '#ffffff';
        });
    }

    // Initialize: Default to Light 
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- FEATURE 2: Button Click Interaction [cite: 10, 11] ---
    const signInBtn = document.querySelector('nav button');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert('Sign-in functionality coming soon!');
        });
    }

    // --- FEATURE 3: Image Gallery / Slider [cite: 39, 40] ---
    const bannerImg = document.querySelector('section img');
    const prevBtn = document.querySelector('.fa-chevron-left');
    const nextBtn = document.querySelector('.fa-chevron-right');

    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    ];
    let currentIndex = 0;

    if (nextBtn && bannerImg) {
        nextBtn.parentElement.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            bannerImg.src = images[currentIndex];
        });
    }

    if (prevBtn && bannerImg) {
        prevBtn.parentElement.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            bannerImg.src = images[currentIndex];
        });
    }
});