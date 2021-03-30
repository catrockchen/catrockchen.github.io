console.clear();
$(function(){	
  var menu = document.getElementById('menuBox');
  var bar1 = document.querySelector('.bar1');
  var bar2 = document.querySelector('.bar2');
  var bar3 = document.querySelector('.bar3');
  var isChangingState = false;
  var isOpen = false;
  var menuTL = new TimelineMax();
	
	function menuOver() {			
		if(!isChangingState) {
			menuTL.clear();
			if(!isOpen) {
				menuTL 
            .to(bar1, 0.35, { x:12, ease:Power1.easeOut}, "one")
			.to(bar3, 0.35, { x:-16, ease:Power1.easeOut}, "one");
			}
		}
	}	
	function menuOut() {
		if(!isChangingState) {
			menuTL.clear();
			if(!isOpen) { 
				menuTL
            .to(bar1, 0.35, { x:0, ease:Power1.easeOut}, "one")
			.to(bar3, 0.35, { x:0, ease:Power1.easeOut}, "one");
			}
		}
	}
	function showCloseMenu() {
		    menuTL.clear();
		    menuTL
			.to(bar1, 0.4, { backgroundColor: 000000, x:6, y:6.5, rotation: 225,  transformOrigin:'50% 50%'}, "close")
			.to(bar2, 0.4, { backgroundColor: 000000,x:0, rotation: 135}, "close")
			.to(bar3, 0.4, { backgroundColor: 000000, x:-9.7, y:-5.3, rotation: 225, transformOrigin:'50% 50%', onComplete: function() { isChangingState = false; isOpen = true; }}, "close");
	}		
	function showOpenMenu() {
		    menuTL.clear();
		    menuTL
             .to(bar2, 0.5, { backgroundColor: 14327869, rotation: 0})
             .to(bar3, 0.5, { backgroundColor: 14327869, x:-16, y:0, rotation: 0, onComplete: function() { isChangingState = false; isOpen = false;}, delay:-0.5 })
			 .to(bar1, 0.5, { backgroundColor: 14327869, x:12, y:0, rotation: 0, delay: -0.5});
	}  	
  menu.onmouseover = function(){
    menuOver();
  };
  menu.onmouseout = function(){
    menuOut();
  };    
  menu.onclick = function(){
 		if(!isChangingState) {
			isChangingState = true;	
			if(!isOpen) {
				showCloseMenu();			
			}
			else {
				showOpenMenu();				
			}	
        }   
  };
});

console.clear();
var menuAnimation = new TimelineMax({paused:true});
var menuAnimationBack = new TimelineMax({paused:true});
var navMain = document.getElementById("nav-main");
var menuButton = document.getElementById("menu-button");
var toggle = true;
 
menuAnimation
  .set($('nav'), {css:{zIndex:1}}) // set is basically a 0-second duration tween
  .to(navMain, .8, {width: "100%", className : "+=reveal", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0)
 
menuAnimationBack
  .to(navMain, .6, {width: 0, className : "+=back", ease: Power4.easeIn, transform: "translate3d(0,0,0)"},0)
  .set($('nav'), {css:{zIndex:-1}}) // set is basically a 0-second duration tween

menuButton.onclick = function() {

  toggle = !toggle;
  toggle == false ? menuAnimation.play(0) : menuAnimationBack.play(0);
};



//Used for the Skills bar
$('.skills dd').each(function() {
    $(this).css({
      width: $(this).text() + '%'
    });
  });
  
// matchHeight.js
$(function() {
    $('.matchHeight').matchHeight();
});


//lightbox

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})