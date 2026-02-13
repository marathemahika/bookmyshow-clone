// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Theme Toggle & FEATURE 4: Local Storage ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved preference in Local Storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        // Targeted DOM Manipulation: Change background and text colors
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#ffffff';
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // Store preference
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#000000';
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light'); // Store preference
    }


    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('button.bg-\\[\\#F84464\\]');
    signInBtn.addEventListener('click', () => {
        alert('Sign-in functionality coming soon! Please check back later.');
    });


    // --- FEATURE 3: Basic Image Slider ---
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