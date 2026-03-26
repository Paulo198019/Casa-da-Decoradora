let index = 0;

function moveCarousel(step) {
    const slider = document.getElementById("carousel");
    const items = document.querySelectorAll(".carousel-item");

    index += step;

    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;

    slider.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => {
    moveCarousel(1);
}, 3500);
