function title() {
  var sct = document.documentElement.scrollTop
  var intro = document.getElementById('intro');
  intro.style.transform =  "translate(0%," + sct/1.5 + "px";
  var menu = document.querySelector('NAV');
  if(sct > 100){
    menu.style.opacity = "0"
  } else {
    menu.style.opacity = "1"
  }
}

document.addEventListener('scroll', title);


$(document).ready(function() {
  $('header > .intro > nav > ul > li > .fa-bars').parent().click(function() {
    $('header > .intro > nav > ul').toggleClass('expand')
  })
})