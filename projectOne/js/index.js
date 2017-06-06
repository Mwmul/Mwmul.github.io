function title() {
  var sct = document.body.scrollTop;
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

var menuBtn = document.getElementById('menu-btn');
var closeBtn = document.getElementById('close-btn')
function menuDrop(){
	var menu = document.querySelector('nav UL');
	menu.style.height = "160px";
	menuBtn.style.display = "none";
	closeBtn.style.display = "block"
}
function menuClose(){
	var menu = document.querySelector('nav UL');
	menu.style.height = "0";
	menuBtn.style.display = "block";
	closeBtn.style.display = "none"
}
menuBtn.addEventListener('click', menuDrop);
closeBtn.addEventListener('click', menuClose);

