// Ativa autoplay do carrossel
const myCarousel = document.querySelector('#decorCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2800,
    ride: "carousel"
});
