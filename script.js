document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Dynamic Content Change (Theme Toggle) ---
    // --- FEATURE 4: Local Storage (Bonus/Optional) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Helper function to update all text elements
    function updateTextColors(color) {
        // Change body-wide text 
        body.style.color = color;
        
        // Specifically target headings and labels that have dark Tailwind classes 
        const allTextElements = document.querySelectorAll('h2, h3, p, span, a');
        allTextElements.forEach(el => {
            // We skip the red "BookMyShow" branding and specific red buttons
            if (!el.classList.contains('text-[#F84464]')) {
                el.style.color = color;
            }
        });
    }

    function enableDarkMode() {
        body.style.backgroundColor = '#121212'; // Deep dark background
        updateTextColors('#ffffff'); // Make all text white 
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // 
    }

    function disableDarkMode() {
        body.style.backgroundColor = '#f5f5f5'; // Light background
        updateTextColors('#000000'); // Make all text black 
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light'); // 
    }

    // Initialize: Must be initially light [cite: 4]
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode(); // Defaults to light on first load
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('button.bg-\\[\\#F84464\\]');
    signInBtn.addEventListener('click', () => {
        alert('Welcome! Sign-in is currently under maintenance.'); // 
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
        bannerImg.src = images[currentIndex]; // 
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bannerImg.src = images[currentIndex]; // 
    });
});