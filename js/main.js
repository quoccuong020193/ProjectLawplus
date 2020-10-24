$(document).ready(function () {
    $('.slider').slick(
      {
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        slidesToShow: 1,
        prevArrow: '<div class="custom-arrow arrow-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="custom-arrow arrow-next"><i class="fas fa-chevron-right"></i></div>',
      }
    );
  });

// var wrapperTitle = Array.from(document.querySelectorAll('.human'));


// wrapperTitle.forEach(function(human) {
//     // var humanImage = human.querySelector('.human-image');
//     human.querySelector('.human-image').style.height = human.offsetWidth + 'px';
//     // console.log(humanImage);
//     // console.log("human", human, human.offsetWidth);
// })


