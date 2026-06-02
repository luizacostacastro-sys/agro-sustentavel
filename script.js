document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                // e.preventDefault(); // Já funciona nativamente com scroll-behavior: smooth no CSS
            }
        });
    });

    // Button interactions
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submission handling
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input').value;
            alert(`Obrigado pelo interesse! Enviaremos novidades para: ${email}`);
            subscribeForm.reset();
        });
    }

    // Scroll reveal effect (simple version)
    const revealElements = document.querySelectorAll('.card, .solution-item, .content-text, .content-image');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
});
