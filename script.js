document.addEventListener("DOMContentLoaded", () => {
    new bootstrap.Carousel('#decorCarousel', {
        interval: 2600,
        ride: 'carousel',
        pause: false,
        wrap: true
    });
});
