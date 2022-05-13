/* javascript */

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  draggable: false,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

$( ".close" ).click(function() {
  $( this ).parent().parent().parent().fadeToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".open" ).click(function() {
  $( this ).closest('.inner').children('.overlay-holder').fadeToggle( "slow", function() {
    // Animation complete.
  });
});

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});