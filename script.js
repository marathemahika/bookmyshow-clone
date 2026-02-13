document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) ---
    // --- FEATURE 4: Local Storage (Bonus) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        // Select only elements in the main and aside sections
        const mainContent = document.querySelector('main');
        const aside = document.querySelector('aside');
        const contentText = document.querySelectorAll('main h2, main h3, main p, aside h2, aside span');

        if (mode === 'dark') {
            body.style.backgroundColor = '#121212';
            // Force change text to white for visibility in dark mode
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#ffffff', 'important');
                }
            });
            themeBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            // Light Mode (Default State)
            body.style.backgroundColor = '#f5f5f5';
            // Force change text to dark for visibility in light mode
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#1f2937', 'important');
                }
            });
            themeBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }

        // --- MANDATORY: Navbar text remains white ALWAYS ---
        const navbarText = document.querySelectorAll('nav h1, nav button, nav a, nav i');
        navbarText.forEach(el => {
            el.style.setProperty('color', '#ffffff', 'important');
        });
    }

    // Initialize: Set to Light Mode initially
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Event Listener for Toggle Button
    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        const nextTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(nextTheme);
    });

    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('nav button');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert('Button Clicked: Sign-in functionality coming soon!'); [cite: 10, 11]
        });
    }

    // --- FEATURE 3: Image Gallery / Slider ---
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
            bannerImg.src = images[currentIndex]; [cite: 39, 40]
        });
    }

    if (prevBtn && bannerImg) {
        prevBtn.parentElement.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            bannerImg.src = images[currentIndex]; [cite: 39, 40]
        });
    }
});