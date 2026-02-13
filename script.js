document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Theme Toggle & FEATURE 4: Local Storage (Bonus) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        // Target specifically the "Movies in Mumbai" heading
        const moviesHeading = document.querySelector('main h2');
        const contentText = document.querySelectorAll('main h3, main p, aside h2, aside span');

        if (mode === 'dark') {
            body.classList.add('dark-mode');
            body.style.backgroundColor = '#121212';
            themeBtn.textContent = 'Light Mode';
            
            // Fix: Force "Movies in Mumbai" to WHITE in Dark Mode
            if (moviesHeading) {
                moviesHeading.style.setProperty('color', '#ffffff', 'important');
            }
            
            // Toggle other content text to white for visibility
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#ffffff', 'important');
                }
            });
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.style.backgroundColor = '#f5f5f5';
            themeBtn.textContent = 'Dark Mode';
            
            // Fix: Restore "Movies in Mumbai" to BLACK in Light Mode
            if (moviesHeading) {
                moviesHeading.style.setProperty('color', '#000000', 'important');
            }
            
            // Toggle other content text to dark gray
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#1f2937', 'important');
                }
            });
            localStorage.setItem('theme', 'light');
        }

        // --- MANDATORY FIXES: Branding & Navbar ---
        // 1. Ensure "my" in logo is ALWAYS red
        const logoMy = document.querySelector('nav h1 span');
        if (logoMy) logoMy.style.setProperty('color', '#F84464', 'important');

        // 2. Ensure Navbar text remains WHITE in both modes
        const navItems = document.querySelectorAll('nav a, nav button, nav i, nav h1');
        navItems.forEach(item => {
            if (!item.classList.contains('text-[#F84464]') && item.tagName !== 'SPAN') {
                item.style.setProperty('color', '#ffffff', 'important');
            }
        });
    }

    // Initialize: Set theme based on Local Storage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentMode);
    });

    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('nav button.bg-\\[\\#F84464\\]');
    signInBtn?.addEventListener('click', () => {
        alert('Welcome! Sign-in is currently under maintenance.');
    });

    // --- FEATURE 3: Image Gallery / Slider ---
    const bannerImg = document.querySelector('section img');
    const nextBtn = document.querySelector('.fa-chevron-right')?.parentElement;
    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070"
    ];
    let index = 0;

    nextBtn?.addEventListener('click', () => {
        index = (index + 1) % images.length;
        bannerImg.src = images[index];
    });
});