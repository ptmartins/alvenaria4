(function() {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if(scrollPos > 10){
            header.classList.add ('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    })

    $(document).ready(function(){

        $('.slide-show').slick({
            autoplay: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });
    
})();
