let swiper;
let swiper2;
let main;
let loader;

window.addEventListener('load', () => {
  main = document.querySelector(".main");
  main.style.display = "none";

  loader = document.querySelector(".loader-container");
    
  setTimeout(() => {
    main.style.display = "block";
    loader.style.display = "none";
    swiper = new Swiper(".hero__section--welcome .hero-swiper", {
      direction: "horizontal",
      lazy:true,
      loop: "true",
      slidesPerView: 1,
      effect: "fade",
      allowTouchMove: false,
      speed: "1000",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        
      },
    });
  },5000)
});



