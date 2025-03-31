document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-images');

    const options = {
        rootMargin: '200px 0px',
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;

                const src = img.dataset.src;

                img.src = src;

                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                observer.unobserve(img);
            };
        });
    };

    const observer = new IntersectionObserver(handleIntersection, option);

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});