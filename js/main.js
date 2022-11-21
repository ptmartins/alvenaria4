(function () {

    console.log(2222);    

    $(document).ready(function () {
    $('.slide-show').slick({
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
})();