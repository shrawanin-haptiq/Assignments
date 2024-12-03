 
 
    $(document).ready(function () {
        $('.my-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button   class="slick-next"aria-label="Previous" type="button">←</button>',
            nextArrow: '<button class="slick-prev"   aria-label="Next" type="button">→</button>',
            
            
            responsive: [
                {
                    breakpoint: 7,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
  
    $(document).ready(function(){
      $('.testimonials-slider').slick({
        arrows: true, // Enable left and right arrows
        dots: false,  // Disable dots
        slidesToShow: 1, // Show one card at a time
        slidesToScroll: 1, // Scroll one card at a time
        infinite: true, // Loop through items
        
         
      });
    });
 
  