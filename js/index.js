window.sr = ScrollReveal();

sr.reveal('#home .container header', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.logo', {
    duration: 3000,
    rotate: {
        x: 1,
        y: 180
    }
});

sr.reveal('.scroll-banner', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.scroll-about', {
    duration: 2000,
    origin: 'left',
    distance: '400px'
});

sr.reveal('.scroll-skills-frontend', {
    duration: 1500,
    origin: 'left',
    distance: '24%'
});

sr.reveal('.scroll-skills-backend', {
    duration: 1500,
    origin: 'right',
    distance: '24%'
});

sr.reveal('.scroll-portfolio', {
    duration: 3000,
    origin: 'left',
    distance: '400px'
});

sr.reveal('.scroll-contact', {
    duration: 1200,
    origin: 'bottom',
    distance: '200px'
});