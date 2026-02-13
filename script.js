document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) [cite: 21, 25] ---
    // --- FEATURE 4: Local Storage (Bonus) [cite: 42, 43] ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        // Specifically target the heading to fix visibility in dark mode
        const moviesHeading = document.querySelector('main h2');
        const contentText = document.querySelectorAll('main h3, main p, aside h2, aside span');

        if (mode === 'dark') {
            body.classList.add('dark-mode');
            themeBtn.textContent = 'Light Mode';
            
            // Fix: Explicitly change "Movies in Mumbai" to WHITE in Dark Mode
            if (moviesHeading) {
                moviesHeading.style.setProperty('color', '#ffffff', 'important');
            }
            
            // Toggle other content text to white for general visibility
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#ffffff', 'important');
                }
            });
            localStorage.setItem('theme', 'dark'); [cite: 43]
        } else {
            body.classList.remove('dark-mode');
            themeBtn.textContent = 'Dark Mode';
            
            // Fix: Restore "Movies in Mumbai" to dark gray in Light Mode
            if (moviesHeading) {
                moviesHeading.style.setProperty('color', '#1f2937', 'important');
            }
            
            // Toggle other content text back to dark gray
            contentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.setProperty('color', '#1f2937', 'important');
                }
            });
            localStorage.setItem('theme', 'light'); [cite: 43]
        }

        // Maintain branding: "my" in logo remains red; navbar text remains white
        const logoMy = document.querySelector('nav h1 span');
        if (logoMy) logoMy.style.setProperty('color', '#F84464', 'important');

        const navItems = document.querySelectorAll('nav a, nav button, nav i, nav h1');
        navItems.forEach(item => {
            if (!item.classList.contains('text-[#F84464]') && item.tagName !== 'SPAN') {
                item.style.setProperty('color', '#ffffff', 'important');
            }
        });
    }

    // Initial state: Default to light mode per project requirements 
    const savedTheme = localStorage.getItem('theme') || 'light'; [cite: 43]
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentMode);
    });

    // --- FEATURE 2: Button Click Interaction [cite: 10, 11] ---
    const signInBtn = document.querySelector('nav button.bg-\\[\\#F84464\\]');
    signInBtn?.addEventListener('click', () => {
        alert('Welcome! Sign-in is currently under maintenance.'); [cite: 11]
    });

    // --- FEATURE 3: Image Gallery / Slider [cite: 39, 40] ---
    const bannerImg = document.querySelector('section img');
    const nextBtn = document.querySelector('.fa-chevron-right')?.parentElement;
    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070"
    ];
    let index = 0;

    nextBtn?.addEventListener('click', () => {
        index = (index + 1) % images.length;
        bannerImg.src = images[index]; [cite: 40]
    });
});