var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function slide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-1");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

// burger

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.items');
    const navlinks = document.querySelectorAll('.items li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }

        });
    });

}
navSlide();

// mappings
var slideI = 1;
showSlides1(slideI);

function plusSlide(n) {
    showSlides1(slideI += n);
}

function currentSlide(n) {
    showSlides1(slideI = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-1");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideI = 1 }
    if (n < 1) { slideI = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideI - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideI - 1].alt;
}