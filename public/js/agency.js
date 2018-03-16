
$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		// $('h1').css('color','#222222');
	}, 3000);

	$('.carousel').carousel({
		interval: 0
	});

	// $('.owl-carousel').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     nav:true,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:3
	//         },
	//         1000:{
	//             items:5
	//         }
	//     }
	// });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});




});

//para manejar carrusel y menu vertical
(function($) {
  "use strict";
		$('.nav-link').click(function(){
			$('#menu_projects').find('.nav-link').removeClass("active");
			$(this).addClass("active");

		});

var update_menu=function(tipo){

	var activo=$('#menu_projects').find("[tipo='" + tipo + "']");

	$('#menu_projects').find('.nav-link').removeClass("active");
	$(activo).addClass("active");
};

$('#carrousel').on('slid.bs.carousel', function() {

	var actual=$('div.active');
	var tipo=$(actual).attr("tipo");
	//alert(tipo);
	update_menu(tipo);
	// var currentIndex = $('div.active').index();
	// var slidesIndex=[0,3,6,11,14,18];
	// var filter=jQuery.inArray(currentIndex,slidesIndex);
	// if(filter!=-1){
	//
	// }



});



  // Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 54)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	  	});

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

//change the flag and the language
  $(document).ready(function(){
  var selector = '#translate';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');


    if(index >= file.length){
      index = 0;
    }
    var new_class= text[index];
    changeIndex(el, index,file.length);
    var old_index=el.attr('data-index');
    if(old_index >= file.length){
      old_index = 0;
    }
    var old_class=text[old_index];
    changeFlag(el,old_class,new_class);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

   var changeName = function(el, name){
     $(el).html( name );
   };
  var changeIndex = function(el, index,longitud){

    $(el).attr('data-index', ++index);
  };
   var changeFlag = function(el, old_class,new_class){
     $(el).removeClass(old_class);
     $(el).addClass(new_class);
   };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'js/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };
});

// $(document).ready(function() {
//
//     "use strict";
//
//     $(window).bind('load', function() {
//         "use strict";
//         parallaxInit();
//     });
//
//     function parallaxInit() {
//         "use strict";
//         $('.home-parallax').parallax("30%", 0.1);
//         $('.subscribe-parallax').parallax("30%", 0.1);
//         $('.testimonial').parallax("10%", 1);
//         /*add as necessary*/
//     }
// });

/*------------------------------------------
					background - images
--------------------------------------------*/
$('#home').backstretch([
	'img/h_e9.png',
	'img/h_e2.png',
	'img/home_2.jpg'


], {duration: 5000, fade: 750});

$(".rotate").textrotator({
	animation: "dissolve",
	separator: "|",
	speed: 5800
});

})(jQuery); // End of use strict
