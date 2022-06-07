let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.logo-center').clientWidth;
let form = document.querySelector('.input');
let socios = document.querySelector('.socio');
let cad = document.querySelector('.cadastros');
let comando = document.querySelector('.slider--controls');
let opened = document.querySelector('.menu-dinamico');
let quemSomos = document.querySelector('.post');
let wheWho = document.querySelector('.whoWheAre');
let logRight = document.querySelector('.logo-right');
let toglle = opened.style.height = '0px';


function menuToglle() {

    if (toglle) {
        opened.style.height = 'auto';
    } else {
        opened.style.height = '0px';
    }
}

document.querySelector('.logo-center').style.width =
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width =
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.logo-center').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.sliders').style.marginLeft =
        `-${newMargin}px`;
}


function socio() {
    form.innerHTML = '';
    socios.style.display = 'block';
}

function cadastro() {
    comando.innerHTML = '';
    cad.style.display = 'block';
}

setInterval(goNext, 5000);

function whoWheAre() {
    quemSomos.style.display = 'none';
    wheWho.style.display = 'block';

}

function home() {
    quemSomos.style.display = 'block';
    wheWho.style.display = 'none';

}

function homeCel() {
    opened.style.height = '0px';
    logRight.style.display = 'block';
    quemSomos.style.display = 'block';
    wheWho.style.display = 'none';

}

function whoWheAreCel() {
    logRight.style.display = 'none';
    quemSomos.style.display = 'none';
    wheWho.style.display = 'block';
    opened.style.height = '0px';
}
toglle;