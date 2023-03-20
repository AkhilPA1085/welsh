$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop()
      if(scroll > 50){
        $('.navbar').addClass('nav-scrolled');
      }else{
        $('nav').removeClass('nav-scrolled')
      }
    })

    var swiper = new Swiper(".bannerSwiper", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    var swiper = new Swiper(".sponsorsSwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
      },
    });


    var swiper = new Swiper(".gallerySwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
  });


})