let slides = Array.from(document.querySelectorAll(".slider__item"));
let arrows = Array.from(document.querySelectorAll(".slider__arrow"));
let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");

let index = 0;

for (let i = 0; i <= slides.length; i++) {
  for (let j = 0; j < arrows.length; j++) {
    arrows[j].onclick = function () {
      if (arrows[j] === next) {
        if (index >= slides.length) {
          index = 0;
        } else {
          slides[index].classList.remove("slider__item_active");
          index++;
          slides[index].classList.add("slider__item_active");
        }
      } else if (arrows[j] === prev) {
        if (index < 0) {
          index = slides.length - 1;
        } else {
          slides[index].classList.remove("slider__item_active");
          index--;
          slides[index].classList.add("slider__item_active");
        }
      }
    };
  }
}

//-------------
// next.onclick = function () {
//   for (let presentSlide = 0; presentSlide < slides.length; presentSlide++) {
//     slides[presentSlide].classList.add("slider__item_active");
//     console.log(slides[i]);
//   }
// };
// slides.forEach(function (arrow, index) {
//   arrow.onclick = function () {
//     let arrow = Array.from(document.querySelectorAll(".slider__arrow"));
//     let next = arrow.classList.contains("slider__arrow_next");
//     let prev = arrow.classList.contains("slider__arrow_prev");
//     slides[index].classList.add("slider__item_active");
//     console.log(123);
//   };
// });
