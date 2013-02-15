function initSlider() {
  $('section.content').hover(function() {
    $('.bx-prev, .bx-next').show();
  }, function() {
    $('.bx-prev, .bx-next').hide();
  });

  var slider = $('#slider ul').bxSlider({
    auto: true,
    autoHover: true,
    pause: 6000
  });

  $('body').keyup(function(e) {
    if (37 == e.keyCode) {
      slider.goToPrevSlide();
    } else if (39 == e.keyCode) {
      slider.goToNextSlide();
    }
  });

  slider.show();
}

Modernizr.load({
  test: Modernizr.mq('(max-width: 600px)'),
  nope: 'js/jquery.bxslider.min.js',
  complete: function() {
    if ($.fn.bxSlider) {
      $(initSlider);
    } else {
      $('#slider ul').show();
    }
  }
});
