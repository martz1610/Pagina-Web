const sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;
function reset() {
    sliderImages.forEach(img => {
      img.style.opacity = 0;
    });
  
    sliderImages[currentSlide].style.opacity = 1;
  }
  function startSlide() {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      reset();
    }, 5000);
  }
  reset();
  startSlide();
    