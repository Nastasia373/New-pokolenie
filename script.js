let menuBtn = document.getElementById('menu-btn');
    let navbar = document.querySelector('.navbar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
}

const Faq = document.getElementsByClassName('accordion');

  for(i = 0; i<Faq.length; i++){
   Faq[i].addEventListener('click', function(){
     this.classList.toggle('active')
   })
  }
  
var swiper = new Swiper(".course-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
       clickable:true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          
        
        },
        768: {
          slidesPerView: 2,
        
        },
        1024: {
          slidesPerView: 3,
     
        },
      },
  });

  