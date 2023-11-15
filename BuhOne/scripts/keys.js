document.addEventListener('DOMContentLoaded', function () {
   const sliders = document.querySelectorAll('.slider');
   const controls = document.querySelectorAll('.control');
   const prevButton = document.getElementById('prev');
   const nextButton = document.getElementById('next');

   let currentSliderIndex = 0;

   function showSlider(index) {
       sliders.forEach((slider, i) => {
           slider.style.display = i === index ? 'flex' : 'none';
       });
       updateControls(index);
   }

   function nextSlider() {
       currentSliderIndex = (currentSliderIndex + 1) % sliders.length;
       showSlider(currentSliderIndex);
   }

   function prevSlider() {
       currentSliderIndex = (currentSliderIndex - 1 + sliders.length) % sliders.length;
       showSlider(currentSliderIndex);
   }

   prevButton.addEventListener('click', prevSlider);
   nextButton.addEventListener('click', nextSlider);

   controls.forEach((control, index) => {
       control.addEventListener('click', function () {
           currentSliderIndex = index;
           showSlider(currentSliderIndex);
       });
   });

   function updateControls(index) {
       controls.forEach((control, i) => {
           control.classList.toggle('active', i === index);
       });
   }

   showSlider(currentSliderIndex);
});
document.addEventListener('DOMContentLoaded', function () {
   const slider = document.querySelector('.slider1');
   const control = document.querySelectorAll('.control1');
   const prevButtom = document.getElementById('prev1');
   const nextButtom = document.getElementById('next1');
   const slideText = document.querySelector('.carusel_text');

   let currentIndex = 0;
   const totalSlides = slider.children.length;

   function showSlide(index) {
       const percentage = index * -100;
       slider.style.transform = `translateX(${percentage}%)`;
   }

   function updateSlideText(index) {
   
       slideText.innerText = `Slide ${index + 1}`;
   }

   function nextSlide() {
       currentIndex = (currentIndex + 1) % totalSlides;
       showSlide(currentIndex);
       updateSlideText(currentIndex);
       updateControls();
   }

   function prevSlide() {
       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
       showSlide(currentIndex);
       updateSlideText(currentIndex);
       updateControls();
   }

   prevButtom.addEventListener('click', prevSlide);
   nextButtom.addEventListener('click', nextSlide);

   control.forEach((control, index) => {
       control.addEventListener('click', function () {
           currentIndex = index;
           showSlide(currentIndex);
           updateSlideText(currentIndex);
           updateControls();
       });
   });

   function updateControls() {
       control.forEach((control, index) => {
           control.classList.toggle('active1', index === currentIndex);
       });
   }

   console.log('Slider corectly');
});
