document.addEventListener('DOMContentLoaded', function () {
   const menuIcon = document.getElementById('menu-icon');
   const navLinks = document.querySelector('.nav');
   const slider = document.querySelector('.slider');
   const controls = document.querySelectorAll('.control');
   const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

   menuIcon.addEventListener('click', function () {
       navLinks.classList.toggle('show');
   });

   let currentIndex = 0;

   function showSlide(index) {
       const percentage = index * -100;
       slider.style.transform = `translateX(${percentage}%)`;
   }

   function nextSlide() {
       currentIndex = (currentIndex + 1) % slider.children.length;
       showSlide(currentIndex);
       updateControls();
   }

   function prevSlide() {
       currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
       showSlide(currentIndex);
       updateControls();
   }

   prevButton.addEventListener('click', prevSlide);
   nextButton.addEventListener('click', nextSlide);

 controls.forEach((control, index) => {
      control.addEventListener('click', function () {
          currentIndex = index;
          showSlide(currentIndex);
          updateControls();
      });
  });
  function updateControls() {
   controls.forEach((control, index) => {
       control.classList.toggle('active', index === currentIndex);
});
  }
});
 
// document.addEventListener("DOMContentLoaded", function() {
//     // put k stranie
//     const path = window.location.pathname;

//     // vse ssilki menu
//     const menuLinks = document.querySelectorAll('.navbar .nav a');

//     //kontrol po kayhdoj ssilke
//     menuLinks.forEach(function(link) {
//       if (link.getAttribute('href') === path) {
//         link.classList.add('active'); // aktivnaja ssilka
//       }
//     });
//   });