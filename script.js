document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const themeBtn = document.getElementById('themeToggle');

    /* --------------------------------
       THEME TOGGLE (Only if exists)
    ---------------------------------*/
    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            if (themeBtn) themeBtn.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            if (themeBtn) themeBtn.textContent = 'Dark Mode';
        }

        // Keep navbar text white
        const navItems = document.querySelectorAll('nav a, nav button, nav i, nav h1');
        navItems.forEach(item => {
            if (item.tagName !== 'SPAN') {
                item.style.color = '#ffffff';
            }
        });

        // Keep "my" red
        const logoMy = document.querySelector('nav h1 span');
        if (logoMy) logoMy.style.color = '#F84464';
    }

    // Default behaviour:
    // If theme button exists → start light (index page)
    // If not → do nothing (stream page stays dark)
    if (themeBtn) {
        applyTheme('light');

        themeBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }


    /* --------------------------------
       SIGN IN ALERT (Both pages)
    ---------------------------------*/
    const signInBtn = document.querySelector('nav button.bg-\\[\\#F84464\\]');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            alert('Welcome! Sign-in is currently under maintenance.');
        });
    }


    /* --------------------------------
       IMAGE SLIDER (Index Only)
    ---------------------------------*/
    const bannerImg = document.querySelector('section img');
    const leftArrow = document.querySelector('.fa-chevron-left');
    const rightArrow = document.querySelector('.fa-chevron-right');

    if (bannerImg && leftArrow && rightArrow) {

        const images = [
            "https://live.staticflickr.com/4005/4686746190_8c001e3486_h.jpg",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070"
        ];

        let index = 0;

        function updateImage() {
            bannerImg.src = images[index];
        }

        rightArrow.parentElement.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateImage();
        });

        leftArrow.parentElement.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateImage();
        });
    }


    /* --------------------------------
       ACTIVE NAV LINK (Both pages)
    ---------------------------------*/
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('text-white', 'font-semibold');
        }
    });


    /* --------------------------------
       STREAM PAGE PLAY BUTTON ALERT
       (Only works if stream cards exist)
    ---------------------------------*/
    const playIcons = document.querySelectorAll('.fa-play');

    if (playIcons.length > 0) {
        playIcons.forEach(icon => {
            icon.parentElement.addEventListener('click', () => {
                alert('Streaming preview coming soon!');
            });
        });
    }

});
