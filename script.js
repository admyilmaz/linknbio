document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".music-slider");
    const cards = document.querySelectorAll(".music-card");
    let index = 0;

    function nextSlide() {
        if (cards.length > 3) {
            index = (index + 1) % (cards.length - 2);
            slider.style.transform = `translateX(-${index * (100 / 3)}%)`;
        }
    }

    setInterval(nextSlide, 4000); // 4 saniyede bir kaydır
});
