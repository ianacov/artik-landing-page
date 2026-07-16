const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
    if (isOpen) {
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.style.opacity = '0';
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        mobileMenu.style.opacity = '1';
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.style.opacity = '0';
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
} else {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => io.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();