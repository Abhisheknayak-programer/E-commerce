$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots : false,
    nav : false,
    responsive:{
        0:{
            items:1,
            autoplay: true,
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})