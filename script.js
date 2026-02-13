document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Theme Toggle (Dynamic Content Change) ---
    // --- FEATURE 4: Local Storage (Bonus) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;
    
    // Select the specific headers and text elements to adjust
    const mainHeader = document.querySelector('section.flex-1 h2'); // "Movies in Mumbai"
    const movieTitles = document.querySelectorAll('.movie-card h3');
    const filterHeaders = document.querySelectorAll('aside h2, aside span');

    function enableDarkMode() {
        body.style.backgroundColor = '#121212';
        body.style.color = '#ffffff';
        
        // Fix for "Movies in Mumbai" visibility
        if (mainHeader) mainHeader.style.color = '#ffffff';
        
        // Update movie titles and filter labels
        movieTitles.forEach(title => title.style.color = '#ffffff');
        filterHeaders.forEach(header => {
            if (!header.classList.contains('text-[#F84464]')) {
                header.style.color = '#e5e7eb';
            }
        });
        
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // [cite: 43]
    }

    function disableDarkMode() {
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#333333';
        
        // Restore "Movies in Mumbai" to dark text for light bg
        if (mainHeader) mainHeader.style.color = '#1f2937'; 
        
        movieTitles.forEach(title => title.style.color = '#1f2937');
        filterHeaders.forEach(header => {
            if (!header.classList.contains('text-[#F84464]')) {
                header.style.color = '#1f2937';
            }
        });

        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light'); // [cite: 43]
    }

    // Initialize: Starts Light by default unless 'dark' is saved
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

    // --- FEATURE 2: Button Click Interaction ---
    const signInBtn = document.querySelector('button.bg-\\[\\#F84464\\]');
    signInBtn.addEventListener('click', () => {
        alert('Sign-in functionality coming soon!'); // [cite: 11]
    });

    // --- FEATURE 3: Image Gallery / Slider ---
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
        bannerImg.src = images[currentIndex]; // [cite: 40]
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bannerImg.src = images[currentIndex]; // [cite: 40]
    });
});