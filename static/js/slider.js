const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 4,
    spaceBetween: 10,
   
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

swiper.on('click', (click_obj)=>{
  console.log(click_obj);
  //clickedSlide
})