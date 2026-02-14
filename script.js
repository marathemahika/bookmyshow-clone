document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------
       THEME TOGGLE (ALWAYS START LIGHT)
    --------------------------------*/
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            themeBtn.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            themeBtn.textContent = 'Dark Mode';
        }

        // Keep navbar text white
        const navItems = document.querySelectorAll('nav a, nav button, nav i, nav h1');
        navItems.forEach(item => {
            if (item.tagName !== 'SPAN') {
                item.style.color = '#ffffff';
            }
        });

        // Keep "my" in logo red
        const logoMy = document.querySelector('nav h1 span');
        if (logoMy) logoMy.style.color = '#F84464';
    }

    // ALWAYS start in Light Mode
    applyTheme('light');

    themeBtn.addEventListener('click', () => {
        const currentMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentMode);
    });

    /* -------------------------------
       SIGN IN BUTTON ALERT
    --------------------------------*/
    const signInBtn = document.querySelector('nav button.bg-\\[\\#F84464\\]');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert('Welcome! Sign-in is currently under maintenance.');
        });
    }

    /* -------------------------------
       IMAGE SLIDER
    --------------------------------*/
    const bannerImg = document.querySelector('section img');
    const nextBtn = document.querySelector('.fa-chevron-right')?.parentElement;
    const prevBtn = document.querySelector('.fa-chevron-left')?.parentElement;

    const images = [
        "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070"
    ];

    let index = 0;

    function updateImage() {
        if (bannerImg) {
            bannerImg.src = images[index];
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateImage();
        });
    }

});
