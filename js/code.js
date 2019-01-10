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
setInterval(
function randombg(){
  var random= Math.floor(Math.random() * 3) + 0;
  var bigSize = ["url('images/background/BACKGROUND.png')",
                 "url('images/background/background2.png')",
                 "url('images/background/background3.png')"
                 ];
  document.body.style.backgroundImage=bigSize[random];
},5000);
/**************************************************************************/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";}
  /****************************************************************/
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

})

