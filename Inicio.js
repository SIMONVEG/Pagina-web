const titles = [
    "Creciendo",
    "En la gran comisión",
    "En la gestión",
    "En la comunión"
];

let index = 0;

function changeTitle() {
    const wordElement = document.getElementById("changing-word");
    
    // Reiniciar la animación quitando y agregando la clase
    wordElement.style.animation = "none"; // Elimina la animación actual
    void wordElement.offsetWidth; // Truco para forzar el reinicio de la animación
    wordElement.style.animation = "wipe 1.5s ease forwards"; // Reaplicar la animación

    // Actualizar el contenido del texto
    wordElement.textContent = titles[index];
    
    // Incrementar el índice para el siguiente título
    index = (index + 1) % titles.length;
}

// Cambia el título cada 4 segundos
setInterval(changeTitle, 4000);

// Obtener los enlaces principales que tienen submenús
const menuItems = document.querySelectorAll('.navbar-menu > a');

// Recorrer cada uno de los elementos de menú
menuItems.forEach(item => {
    // Buscar el submenú dentro del elemento
    const submenu = item.querySelector('.submenu');
    const submenu2 = item.querySelector('.submenu-2');
    
    // Si el submenú está presente, añadir un evento para mostrarlo
    if (submenu) {
        item.addEventListener('mouseenter', () => {
            submenu.style.display = 'block'; // Mostrar submenú
        });

        item.addEventListener('mouseleave', () => {
            submenu.style.display = 'none'; // Ocultar submenú
        });
    }

    // Si el submenú-2 (comités) está presente, añadir un evento para mostrarlo
    if (submenu2) {
        submenu.addEventListener('mouseenter', () => {
            submenu2.style.display = 'block'; // Mostrar sub-submenú
        });

        submenu.addEventListener('mouseleave', () => {
            submenu2.style.display = 'none'; // Ocultar sub-submenú
        });
    }
});
