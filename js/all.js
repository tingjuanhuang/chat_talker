$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 8,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        },
        1100:{
            items:3
        }
    }
})

mybutton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}