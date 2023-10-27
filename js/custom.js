new WOW().init();
// new WOW().init();
  $('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
	});
		 
		 $('.count').each(function() {
			 
  $(this).prop('Counter', 0).animate({
	 
    Counter: parseInt($(this).text())
  }, {
    duration: 8000,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});
	
$(document).ready(function(){
  
    
        // scroll body to 0px on click
         $(window).scroll(function () {
            if ($(this).scrollTop() > 30) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
		
		 $('#back-to-top').click(function () {      
           
                $('html, body').animate({
                    scrollTop: parseInt($("body").offset().top) 
                }, 1500);
                return false;           
        
    });
});

            $(document).ready(function() {
             
	   var owl = $("#owl-example2");
      owl.owlCarousel({
		   navigation : true,
		   loop: true,
   	       items:3,
		   margin:30,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
       // itemsCustom: [[0, 1], [400, 2], [500, 2], [980, 3], [960, 3], [768, 3] , [767, 3], [1024, 3],[1200, 4] ]
	    responsive: {
     0: {
       items: 1,
     },
     510: {
       items: 1,
     },
     800: {
       items: 2,
     },
	 1050: {
       items: 3
     },
	   }
      });
	
	   var owl = $("#owl-example3");
      owl.owlCarousel({
		   navigation : true,
		   loop: true,
   	       items:3,
		   margin:20,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
       // itemsCustom: [[0, 1], [400, 2], [500, 2], [980, 3], [960, 3], [768, 3] , [767, 3], [1024, 3],[1200, 4] ]
	    responsive: {
     0: {
       items: 1,
     },
     510: {
       items: 1,
     },
     800: {
       items: 2,
     },
	 1050: {
       items: 3
     },
	   }
      });
	  
	  var owl = $("#owl-example4");
      owl.owlCarousel({
		   navigation : true,
		   loop: true,
   	       items:1,
		   margin:15,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
       // itemsCustom: [[0, 1], [400, 2], [500, 2], [980, 3], [960, 3], [768, 3] , [767, 3], [1024, 3],[1200, 4] ]
	    responsive: {
     0: {
       items: 1,
     },
     510: {
       items: 1,
     },
     800: {
       items: 1,
     },
	 1050: {
       items: 1
     },

	   }
      });
	  
	   var owl = $("#owl-example5");
      owl.owlCarousel({
		   navigation : true,
		   loop: true,
   	       items:2,
		   margin:30,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
       // itemsCustom: [[0, 1], [400, 2], [500, 2], [980, 3], [960, 3], [768, 3] , [767, 3], [1024, 3],[1200, 4] ]
	    responsive: {
     0: {
       items: 1,
     },
     510: {
       items: 2,
     },
     800: {
       items: 2,
     },
	 1050: {
       items: 2
     },
	   }
      });
	  
            })
  $('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
	});
	
		
