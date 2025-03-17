document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true, // Repetición infinita
        autoplay: {
            delay: 3000, // 3 segundos por imagen
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
