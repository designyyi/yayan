// 電腦版 滑鼠效果

var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
item1.addEventListener('mouseover', over)
item2.addEventListener('mouseover', over)
item3.addEventListener('mouseover', over)
item4.addEventListener('mouseover', over)
item5.addEventListener('mouseover', over)
item1.addEventListener('mouseleave', leave)
item2.addEventListener('mouseleave', leave)
item3.addEventListener('mouseleave', leave)
item4.addEventListener('mouseleave', leave)
item5.addEventListener('mouseleave', leave)

function over () {
    this.children[0].style.transform = 'scale(1.1)';
    this.children[0].style.opacity = '0.6';
    // this.children[1].style.marginTop = '12px';
    this.children[1].style.paddingBottom = '2px';
    this.children[1].style.opacity = '0.6';
    this.style.color = '#c59b6d';
}

function leave () {
    this.children[0].style.transform = 'scale(1)';
    this.children[0].style.opacity = '1';
    this.children[1].style.marginTop = '0px';
    this.children[1].style.paddingBottom = '0px';
    this.children[1].style.opacity = '1';
    this.style.color = '#604a40';
}

// 手機版輪播效果
// https://swiperjs.com/api/

$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
      lazy: true,
      loop: true,
        effect: 'coverflow',
        slidesPerView: '2',
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 0,
        mousewheel: true,
        grabCursor: true,
        mousewheelControl: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
  })