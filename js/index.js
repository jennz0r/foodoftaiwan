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
  $('#author-img').hover(function() {
    $('#author-tooltip').stop(true).fadeIn(500);
  }, function() {
    $('#author-tooltip').stop(true).fadeOut(500);
  });
  $('#photographer-img').hover(function() {
    $('#photographer-tooltip').stop(true).fadeIn(500);
  }, function() {
    $('#photographer-tooltip').stop(true).fadeOut(500);
  });
});