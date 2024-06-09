/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
  // Seleccionar elementos
        const slider = document.querySelector('.slider');
        const images = document.querySelectorAll('.slider img');
        const prevBtn = document.querySelector('.control-prev');
        const nextBtn = document.querySelector('.control-next');
        const indicators = document.querySelectorAll('.indicator');

        let currentIndex = 0;

        // Función para mover al siguiente slide
        function nextSlide() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volver al primer slide si hemos llegado al final
            }
            updateSlider();
        }

        // Función para mover al slide anterior
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1; // Volver al último slide si estamos al principio
            }
            updateSlider();
        }

        // Actualizar el slider y los indicadores
        function updateSlider() {
            const offset = -currentIndex * 100; // Calcular el desplazamiento necesario
            slider.style.transform = `translateX(${offset}%)`;
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        // Eventos de clic para los botones de control
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Eventos de clic para los indicadores
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentIndex = parseInt(indicator.getAttribute('data-index'));
                updateSlider();
            });
        });