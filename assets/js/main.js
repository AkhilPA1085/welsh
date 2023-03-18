$(document).ready(function(){
    var swiper = new Swiper(".bannerSwiper", {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    var swiper = new Swiper(".sponsorsSwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
          slidesPerView: 7,
          spaceBetween: 5,
        },
      },
    });


    var swiper = new Swiper(".gallerySwiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


})