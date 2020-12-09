(function ($) {
  'use strict';

  $('.library').show();

  // Product slider
  $('.library-slider').slick({
    infinite: true,
    slidesToShow: 6,
    // slidesPerRow: 6,
    // rows: 2,
    // slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          // rows: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          // rows: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          // rows: 3,
        }
      }
    ]
  });

})(jQuery);
