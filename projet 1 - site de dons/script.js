// ===========================
// INTERACTIVITÉ & ANIMATIONS
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des boutons de donation
    const donateBtn = document.querySelector('.donate-btn');
    const ctaButton = document.querySelector('.cta-button');

    // Animation au clic sur les boutons
    donateBtn.addEventListener('click', function() {
        alert('Merci de votre intérêt ! La plateforme de donation sera bientôt disponible.');
    });

    ctaButton.addEventListener('click', function() {
        alert('Bienvenue ! Ensemble, soutenons l\'avenir de nos stagiaires.');
    });

    // Animation des cartes au scroll
    const cards = document.querySelectorAll('.cause-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // Lisse le scroll au clic sur les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Effet de parallaxe léger sur le hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        if (hero && scrollPosition < window.innerHeight) {
            hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
        }
    });

    console.log('✨ Landing Page CARRER CENTER H H 1-DONS chargée avec succès !');
});

// Écouter les événements de navigation
window.addEventListener('load', function() {
    console.log('Page entièrement chargée');
});
