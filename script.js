document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Theme Toggle & FEATURE 4: Local Storage ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;
    const movieTitles = document.querySelectorAll('.movie-card h3');
    const filterHeaders = document.querySelectorAll('aside h2, aside span');

    // Function to apply Dark Mode styles
    function enableDarkMode() {
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#ffffff';
        
        // Ensure specific UI text elements remain visible 
        movieTitles.forEach(title => title.style.color = '#ffffff');
        filterHeaders.forEach(header => header.style.color = '#ffffff');
        
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // [cite: 43]
    }

    // Function to apply Light Mode styles (Initial State)
    function disableDarkMode() {
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#333333';
        
        movieTitles.forEach(title => title.style.color = '#1f2937'); // Dark gray/black
        filterHeaders.forEach(header => {
            // Check if it's the "Languages" red text or standard text
            if (!header.classList.contains('text-[#F84464]')) {
                header.style.color = '#1f2937';
            }
        });

        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light'); // [cite: 43]
    }

    // Initialize: Default to Light unless "dark" is specifically saved [cite: 43]
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // --- FEATURE 2: Button Click Interaction [cite: 10, 11] ---
    const signInBtn = document.querySelector('button.bg-\\[\\#F84464\\]');
    signInBtn.addEventListener('click', () => {
        alert('Welcome to BookMyShow! Please sign in to book your tickets.');
    });

    // --- FEATURE 3: Image Gallery / Slider [cite: 39, 40] ---
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
        bannerImg.src = images[currentIndex];
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bannerImg.src = images[currentIndex];
    });
});