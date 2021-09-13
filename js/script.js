$(document).ready(function(){
    $('.header__slider').slick({
        arrows : false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500
    });

    $('.reviews__slider').slick({
        arrows : true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 1005,
              settings: {
                arrows: false,
                dots: true
              }
            }]
    });
});

let top_header = document.querySelector('.header__top');
let menu = document.querySelector('.header__menu')

let burger = document.querySelector('#burger_click');
burger.addEventListener('click', ()=>{
    top_header.classList.toggle('header__top-active');
    menu.classList.toggle('header__menu-active');
} );