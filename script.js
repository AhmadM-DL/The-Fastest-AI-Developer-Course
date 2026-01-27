// Intersection Observer for Scroll Animations
const observeElements = () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    revealElements.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});
