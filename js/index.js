$(document).foundation();
$(document).ready(function(){
  $('.slicky').slick({
    dots: true,
    speed: 500,
    infinite: true,
    fade: true,
    slide: 'div',
    cssEase: 'linear'
  });
  $('.auto-slicky').slick({
    dots: true,
    speed: 500,
    infinite: true,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
  });
});