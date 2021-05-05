/**
* Template Name: DevFolio - v2.4.1
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  var mainNav_height = $('#mainNav').outerHeight() - 22;
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollto = target.offset().top - mainNav_height;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
      $('html, body').animate({
        scrollTop: scrollto_initial
      }, 1000, "easeInOutExpo");
    }
  }

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      if (!$('#navbarDefault').hasClass('show')) {
        $('.navbar-expand-md').removeClass('navbar-reduce');
      }
      $('.navbar-expand-md').addClass('navbar-trans');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }
/**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  //resume animations//

  gsap.registerPlugin(MotionPathPlugin);
  MorphSVGPlugin.convertToPath("circle, rect");
  gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%" });
  gsap.set("#rectSentItems", { x: "-=240" });
  const tl = gsap.timeline();

  let ranOnce = false;

  function onBtnUp() {
      if (ranOnce) {
          tl.restart();
          return;
      }
      ranOnce = true;
      tl.to("#base", { duration: 0.2, scale: 1, transformOrigin: "50% 50%" });
      tl.to(
          "#btnBase",
          { duration: 0.77, morphSVG: "#cBottom", ease: "power1.inOut" },
          "start"
      );

      tl.to("#btnBase", { duration: 0.23, morphSVG: "#cTop", ease: "power1.inOut" });
      tl.to("#btnBase", {
          duration: 0.2,
          morphSVG: "#cCenter",
          ease: "power1.inOut"
      });
      tl.to(
          "#btnBase",
          { duration: 0.5, morphSVG: "#cEnd", ease: "power1.inOut" },
          "revealStart"
      );
      tl.to("#rectSentItems", { x: "0", duration: 0.5 }, "revealStart");
      tl.to(
          "#mask1",
          { x: "-=260", duration: 0.5, ease: "power1.inOut" },
          "revealStart"
      );
      tl.to(
          "#paperPlane",
          { x: "-=205", duration: 0.5, ease: "power1.inOut" },
          "revealStart"
      );
      tl.to(
          "#paperPlanePath",
          { duration: 0.43, morphSVG: "#tickMark" },
          "start+=0.77"
      );

      tl.to(
          "#txtSend",
          { duration: 0.6, scale: 0, transformOrigin: "50% 50%" },
          "start"
      );
      tl.to(
          "#paperPlaneRoute",
          { drawSVG: "80% 100%", duration: 0.7, ease: "power1.inOut" },
          "start+=0.3"
      );
      tl.to(
          "#paperPlaneRoute",
          { drawSVG: "100% 100%", duration: 0.2, ease: "power1.inOut" },
          "start+=1"
      );

      tl.to(
          "#paperPlane",
          {
              duration: 1,
              ease: "power1.inOut",
              immediateRender: true,
              motionPath: {
                  path: "#paperPlaneRoute",
                  align: "#paperPlaneRoute",
                  alignOrigin: [0.5, 0.5],
                  autoRotate: 90
              }
          },
          "start"
      );

      tl.to(
          "#paperPlanePath",
          { duration: 0.15, attr: { fill: "#ffffff" } },
          "start"
      );
      tl.to(
          "#paperPlanePath",
          { duration: 0.15, attr: { fill: "#4E67E8" } },
          "start+=0.77"
      );
  }

  function onBtnDown() {
      gsap.timeline({ defaults: { clearProps: true } });
      gsap.to("#base", { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
  }

  const btn = document.getElementById("base");
  btn.addEventListener("mousedown", onBtnDown);
  btn.addEventListener("mouseup", onBtnUp);
    //resume animations end//

  /*--/ Testimonials owl /--*/
  $('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  // Portfolio details carousel
  $(".project-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

})(jQuery);