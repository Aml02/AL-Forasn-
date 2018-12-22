function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes();
    
    

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) ;
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);
/***************************************************************************/
 /*wow*/
new WOW().init();
/****************************************************************************/
function randombg(){
  var random= Math.floor(Math.random() * 3) + 0;
  var bigSize = ["url('images/background/BACKGROUND.png')",
                 "url('images/background/background2.png')",
                 "url('images/background/background3.png')"
                 ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
/**************************************************************************/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
/***************************************************************************/
  $('#featured').owlCarousel({
  nav:true,
  dots:false,
  next:false,
    loop:true,
    margin:0,
  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})
  
  
  
  
  
  
  
}