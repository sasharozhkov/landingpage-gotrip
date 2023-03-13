// carousel.js
export const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  startPosition: 1,
  items: 3,

  responsive: {

    0: {
      startPosition: 0,
      margin: 0,
      items: 1,
    },
    550: {
      margin: 10,
      items: 2,
    },

    1200: {
      margin: 30,
      items: 3,
    },
  }
});

$('.slider__btn--prev').click(function () {
  owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function () {
  owl.trigger('next.owl.carousel');
})
