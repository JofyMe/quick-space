document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar').classList.toggle('open')
})

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });

