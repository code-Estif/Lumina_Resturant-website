document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(12, 12, 12, 0.98)';
            header.style.padding = '5px 0';
        } else {
            header.style.background = 'rgba(12, 12, 12, 0.9)';
            header.style.padding = '0';
        }
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileToggle.classList.toggle('open');
            navLinks.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .menu-item, .service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(el);
    });

    // Fade-in for intro section header
    document.querySelectorAll('.intro .section-header').forEach(el => {
        sectionObserver.observe(el);
    });

    const styleTag = document.createElement('style');
    styleTag.innerHTML = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(styleTag);
});
