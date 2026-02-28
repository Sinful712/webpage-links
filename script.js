window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const body = document.body;
    const shrinkOn = 50;

    if (window.scrollY > shrinkOn) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    /* Create the overlay once and append to body */
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-image-overlay';
    document.body.appendChild(overlay);

    /* Helper: close overlay when clicking outside the image or pressing Esc */
    const hideOverlay = () => { overlay.style.display = 'none'; overlay.innerHTML = ''; };
    overlay.addEventListener('click', (e) => {
        if (!e.target.closest('.fullscreen-image-overlay img')) hideOverlay();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') hideOverlay();
    });

    /* Attach click handler to every thumbnail image */
    const thumbnails = document.querySelectorAll('.project-card img');
    thumbnails.forEach(img => {
        img.style.cursor = 'zoom-in';  // visual cue
        img.addEventListener('click', () => {
            const fullUrl = img.dataset.full;          // from data-full attr
            if (!fullUrl) return;
            overlay.innerHTML = `<img src="${fullUrl}" alt="Full-size image">`;
            overlay.style.display = 'flex';
        });
    });

    /* Greeting logic */
    console.log(">>> sys.argv: ['Jesse', 'Portfolio', '2026']");
    console.log("Welcome to my site!");

    // Simple dynamic greeting based on time
    const hour = new Date().getHours();
    const welcomeHeading = document.querySelector('h2');
    
    if (welcomeHeading && welcomeHeading.innerText === "Welcome") {
        if (hour < 12) welcomeHeading.innerText = "Good Morning!";
        else if (hour < 18) welcomeHeading.innerText = "Good Afternoon!";
        else welcomeHeading.innerText = "Good Evening!";
    }
});
