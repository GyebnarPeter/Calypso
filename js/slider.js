let sliderPages = document.querySelectorAll(".slider-page");
let pageIndex = 0;

let slider = () => {
   for (let i = 0; i < sliderPages.length; ++i) {
       sliderPages[i].style.opacity = 0;
   }

   if (pageIndex === sliderPages.length) {
       pageIndex = 0;
   }

   sliderPages[pageIndex].style.opacity = 1;
   pageIndex++;

   setTimeout(slider, 5000);
}

slider();