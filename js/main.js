const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add ('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

$(document).ready(function(){

    console.log('slick');

    $('.slide-show').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
  });