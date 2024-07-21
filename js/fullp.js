$(document).ready(function() {

//MODAL
var modal = document.getElementById("myModal");
// localStorage.setItem("modalshown", "1")

if(localStorage.getItem("modalshown") == "0") {
modal.style.display = "block";
localStorage.setItem("modalshown", "1")
// console.log('show modal')
} else {
  modal.style.display = "none";
  localStorage.setItem("modalshown", "0")
  // console.log('do not show modal')
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//START VISIBILITY

var resizeFont = function(d) {
  var el = $('html');
  $(el).css('font-size', parseInt($(el).css('font-size')) + d);  
  // $(el).css('line-height', parseInt($(el).css('line-height')) + d);  
}
$('#plus').click(function() {
resizeFont(1);
});

$('#minus').click(function() {
resizeFont(-1);
}); 
$('#color').click(function() {
$('body').css('background', 'white')
$('nav').css('background', 'white')
$('#title').css('background', 'white')
$('#texty').css('background', 'white')
$('#text').css('background', 'white')
$('header').css('background', 'white')
$('footer').css('background', 'white')
$('#green').css('background', 'white')

$('body').css('color', 'black')
$('nav').css('color', 'black')
$('#title').css('color', 'black')
$('#texty').css('color', 'black')
$('#text').css('color', 'black')
$('header').css('color', 'black')
$('footer').css('color', 'black')
}); 

      /* iOS re-orientation fix */
  if (navigator.userAgent.match(/iPhone/i)) {
      /* iOS hides Safari address bar */
          setTimeout(function() {
              window.scrollTo(0, 1);
          }, 1000);
  }
// faq
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

    new fullpage('#fullpage', {
        //  anchors: ['standard', 'cremation', 'green', 'aqumation', 'donation', 'home', 'composting'],
        //  menu: '.menu',
      licenseKey: "B80L9-WCO9J-7K117-18AJK-VEQXP",
      // responsiveHeight: 410,
      fitToSection: true,
      keyboardScrolling: true,
      verticalCentered: true,
      lazyLoading: true,
      loopHorizontal: true,
     navigation: true,
    //  slidesNavigation: true,
       paddingTop: 60,
       navigationTooltips: ['Standard Burial', 'Cremation','Green Burial','Aquamation','Body Donation','Home Burial', 'Human Composting']
  // scrollOverflow: true, 
  // scrollOverflowOptions:{ 
  //   click: false, 
  //   preventDefaultException: { tagName:/.*/ }, 
  // }
 
      // paddingBottom: 60
      //showActiveTooltip: true


    });


    });
  
  
  
  
