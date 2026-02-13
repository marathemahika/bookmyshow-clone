document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) --- [cite: 21, 25]
    // --- FEATURE 4: Local Storage (Bonus) --- [cite: 42, 43]
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        const allTextElements = document.querySelectorAll('h2, h3, p, .filter-chip');
        const navbar = document.querySelector('header');
        
        if (mode === 'dark') {
            body.style.backgroundColor = '#121212';
            // Change main content text to white [cite: 22]
            allTextElements.forEach(el => {
                if (!navbar.contains(el)) {
                    el.style.color = '#ffffff';
                }
            });
            themeBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark'); [cite: 43]
        } else {
            body.style.backgroundColor = '#f5f5f5';
            // Change main content text to black [cite: 22]
            allTextElements.forEach(el => {
                if (!navbar.contains(el)) {
                    el.style.color = '#000000';
                }
            });
            themeBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light'); [cite: 43]
        }
        
        // Ensure Navbar text ALWAYS stays white 
        const navLinks = document.querySelectorAll('nav a, nav h1, nav button, nav i');
        navLinks.forEach(link => link.style.color = '#ffffff');
    }

    // Initialize: Set to Light Mode initially 
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- FEATURE 2: Button Click Interaction --- [cite: 10, 11]
    const signInBtn = document.querySelector('nav button');
    signInBtn.addEventListener('click', () => {
        alert('Sign-in functionality coming soon!'); [cite: 11]
    });

    // --- FEATURE 3: Image Gallery / Slider --- [cite: 39, 40]
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