document.addEventListener("DOMContentLoaded", function() {
   // put k stranie
   const path = window.location.pathname;

   // vse ssilki menu
   const menuLinks = document.querySelectorAll('.navbar .nav a');

   //kontrol po kayhdoj ssilke
   menuLinks.forEach(function(link) {
     if (link.getAttribute('href') === path) {
       link.classList.add('active'); // aktivnaja ssilka
     }
   });
 });

document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.getElementById("menu-icon");
   const nav = document.querySelector(".navbar ul.nav");
 
   if (menuIcon && nav) {
     menuIcon.addEventListener("click", function () {
       nav.classList.toggle("show");
     });
   }
 });