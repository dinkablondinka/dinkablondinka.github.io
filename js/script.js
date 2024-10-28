//hamburger
const hamburger = document.querySelector('.hamburger');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const navList = document.querySelector('.nav-ul');

function toggleMenu() {
    adaptiveMenu.classList.toggle('is-open');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        adaptiveMenu.classList.remove('is-open');
    }
}

navList.addEventListener('click', closeMenu);


//slider

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.responsive-slider');
    const slides = document.querySelectorAll('.responsive-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };
});
