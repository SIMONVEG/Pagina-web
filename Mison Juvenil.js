document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const videoWrapper = document.querySelector(".video-wrapper");
    const liderN = document.getElementById("LiderN"); // Elemento de la imagen
    const body = document.body;

    // 🔹 Bloquear el scroll al inicio
    body.style.overflow = "hidden";

    video.addEventListener("ended", function() {
        // 🔹 Mueve el video hacia la izquierda con animación
        videoWrapper.style.transform = "translateX(-100%)";

        // 🔹 Muestra la imagen después de la animación del video
        setTimeout(() => {
            liderN.style.opacity = "1";
            liderN.style.visibility = "visible";

            // 🔹 Habilitar el scroll cuando termine la animación
            body.style.overflow = "auto";
        }, 1500);
    });
});



document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navegacion ul').classList.toggle('show');
});

var swiper = new Swiper('.swiper', {
    loop: true, // Hace que el carrusel sea infinito
    autoplay: {
        delay: 3000, // Cambia de imagen cada 3 segundos
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
