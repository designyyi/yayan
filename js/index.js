document.addEventListener('DOMContentLoaded', function () {
  // 检查是否已经添加过参数
  var hasAddedParameter = false;

  // 检查网址是否已经包含参数
  if (window.location.search.indexOf('openExternalBrowser=1') !== -1) {
    hasAddedParameter = true;
  }

  // 如果没有添加过参数，则添加参数
  if (!hasAddedParameter) {
    const url = window.location.href;
    const modifiedUrl = url + '?openExternalBrowser=1';
    window.location.href = modifiedUrl;
  }

  var owl = $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    // animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  });
  owl.trigger('to.owl.carousel', [1]);

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
