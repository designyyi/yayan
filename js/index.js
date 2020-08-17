$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        lazyLoad: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });


    // var menuOpen = document.getElementById("menuOpen");
    // var menuClose = document.getElementById("menuClose");
    // var menu = document.getElementById("menu");

    // menuOpen.addEventListener("click", function(){
    //     $(menu).css('display', 'inline');
    // });

    // menuClose.addEventListener("click", function(){
    //     $(menu).css('display', 'none');
    // });

});