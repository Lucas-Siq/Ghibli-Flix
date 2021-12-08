$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const hamburguer = document.querySelector('.hamburguer');
   const menuheader = document.querySelector('.menu-header');  
   hamburguer.addEventListener('click', () =>{
    hamburguer.classList.toggle('active');
    menuheader.classList.toggle('active');
   });