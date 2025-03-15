document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const videoWrapper = document.querySelector(".video-wrapper");
    const text = document.getElementById("text");

    video.addEventListener("ended", function() {
        // Mueve el video hacia la izquierda
        videoWrapper.style.transform = "translateX(-100%)";
        
        // Muestra el texto después de la animación del video
        setTimeout(() => {
            text.style.left = "100%";
            text.style.opacity = "1";
            text.style.visibility = "visible";
        }, 1500);
    });
});



document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navegacion ul').classList.toggle('show');
});
