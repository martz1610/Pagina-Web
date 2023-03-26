const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const imageWidth = images[0].clientWidth;
let currentImage = 0;

slider.style.width = imageWidth + 'px';
slider.style.height = images[0].clientHeight + 'px';

setInterval(() => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  slider.style.transform = `translateX(-${currentImage * imageWidth}px)`;
}, 3000);
