document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            // Tutup menu mobile setelah mengklik tautan
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });

    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Logika toggle menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Logika akordeon
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.closest('.accordion-item');
            const content = parent.querySelector('.accordion-content');
            parent.classList.toggle('open');
            if (parent.classList.contains('open')) {
                content.style.height = content.scrollHeight + 'px';
            } else {
                content.style.height = '0';
            }
        });
    });

    // Menambahkan kelas 'scrolled' ke nav saat scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navigation-main');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});