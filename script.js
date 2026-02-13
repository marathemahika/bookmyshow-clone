document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) ---
    // --- FEATURE 4: Local Storage (Bonus) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        // Target text elements ONLY in the main content and aside
        const mainContentText = document.querySelectorAll('main h2, main h3, main p, aside h2, aside span');
        
        if (mode === 'dark') {
            body.style.backgroundColor = '#121212';
            // Change main content text to white
            mainContentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.color = '#ffffff';
                }
            });
            themeBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark'); [cite: 43]
        } else {
            body.style.backgroundColor = '#f5f5f5';
            // Change main content text to black for light mode
            mainContentText.forEach(el => {
                if (!el.classList.contains('text-[#F84464]')) {
                    el.style.color = '#1f2937'; 
                }
            });
            themeBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light'); [cite: 43]
        }
        
        // --- FIX: Force Navbar text to ALWAYS stay white ---
        const navbarText = document.querySelectorAll('nav h1, nav button, nav a, nav i');
        navbarText.forEach(el => {
            el.style.color = '#ffffff';
        });
    }

    // Initialize: Set to Light Mode initially 
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('nav button');
    signInBtn.addEventListener('click', () => {
        alert('Welcome! Sign-in is currently unavailable.'); [cite: 11]
    });

    // --- FEATURE 3: Image Gallery / Slider (Basic) ---
    const bannerImg = document.querySelector('section img');
    const prevBtn = document.querySelector('.fa-chevron-left').parentElement;
    const nextBtn = document.querySelector('.fa-chevron-right').parentElement;

    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    ];
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        bannerImg.src = images[currentIndex]; [cite: 40]
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bannerImg.src = images[currentIndex]; [cite: 40]
    });
});