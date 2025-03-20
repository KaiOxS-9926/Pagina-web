/* Animación de los iconos de servicios */

document.addEventListener("DOMContentLoaded", function () {
    const serviceIcons = document.querySelectorAll('.service-item img');

    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('rotate-animation');
        });

        icon.addEventListener('mouseout', () => {
            icon.classList.remove('rotate-animation');
        });
    });
});

/* Barra de menú estática */

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('nav');
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});
