var menuOpen = document.getElementById("menuOpen");
var menuClose = document.getElementById("menuClose");
var menu = document.getElementById("menu");

menuOpen.addEventListener("click", function(){
    $(menu).css('display', 'inline');
});

menuClose.addEventListener("click", function(){
    $(menu).css('display', 'none');
});

// menu 滑鼠移過去

var portfolio = document.getElementById("portfolio");
var aboutUs = document.getElementById("aboutUs");
var contactUs = document.getElementById("contactUs");
var home = document.getElementById("home");

var portfolioLine = document.getElementById("portfolioLine");
var aboutLine = document.getElementById("aboutLine");
var contactLine = document.getElementById("contactLine");
var homeLine = document.getElementById("homeLine");

portfolio.addEventListener('mouseover', function(){
    portfolioLine.style.visibility = 'visible';
})

portfolio.addEventListener('mouseleave', function(){
    portfolioLine.style.visibility = 'hidden';
})

aboutUs.addEventListener('mouseover', function(){
    aboutLine.style.visibility = 'visible';
})

aboutUs.addEventListener('mouseleave', function(){
    aboutLine.style.visibility = 'hidden';
})

contactUs.addEventListener('mouseover', function(){
    contactLine.style.visibility = 'visible';
})

contactUs.addEventListener('mouseleave', function(){
    contactLine.style.visibility = 'hidden';
})

home.addEventListener('mouseover', function(){
    homeLine.style.visibility = 'visible';
})

home.addEventListener('mouseleave', function(){
    homeLine.style.visibility = 'hidden';
})