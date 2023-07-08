$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
      loop: true,
      lazy: true,
      autoplay: 1000,
      slidesPerView: 1
    });


    var fullBox = document.getElementById("fullBox");
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");
    var swiperContainer = document.getElementById('swiperContainer');
    var bg1 = document.getElementById("bg1");
    var bg2 = document.getElementById("bg2");
    var bg3 = document.getElementById("bg3");
    var bg4 = document.getElementById("bg4");
    var bg5 = document.getElementById("bg5");
    var bg5 = document.getElementById("bg5");
    var leftFloat = document.getElementsByClassName("left-float");
    

    fullBox.addEventListener('click', function(){
        $(fullBox).css('visibility', 'hidden');
    })

    swiperContainer.addEventListener('click', function(event){
        // event.stopPropagation();
    })

    leftArrow.addEventListener('click', function(event){
        swiper.slidePrev()
        event.stopPropagation();

    })

    rightArrow.addEventListener('click', function(event){
        swiper.slideNext()
        event.stopPropagation();
    })

    bg1.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(1);
    })

    bg2.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(2);
    })

    bg3.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(3);
    })

    bg4.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(4);
    })
    
    bg5.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(5);
    })

    bg6.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(6);
    })

  })