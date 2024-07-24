$(document).ready(function() {


  if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('../service-worker.js', { scope: '../' })  } 



    /* iOS re-orientation fix */
if (navigator.userAgent.match(/iPhone/i)) {
    /* iOS hides Safari address bar */
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 1000);
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

gsap.registerPlugin(ScrollTrigger)
    
gsap.set(
	'.bar, #bars',{ 
transformOrigin:'center left'
	});
let bars = new gsap.timeline({

}) 

bars
.to('.bar, .bar span', {
	opacity: "100%",
    padding: "6px",
    duration: 1,
//	stagger: .3
	})
.to(
	'#cremationbar',{
	width:"57.5%",
		borderWidth: "2px",
	ease: "none",
//		delay: .2
},1)

.to(
	'#burialbar',{
	width:"36.6%",
		borderWidth: "2px",
	ease: "none",
//		delay: .4
},1)
.to(
	'#etc',{
	width:"6%",
	borderWidth: "2px",
	ease: "none",
//		delay: .6
},1)

 bars.pause();   
    
gsap.registerPlugin(DrawSVGPlugin); 
//cash
gsap.set('#money_icon, #money_icon2', {
	drawSVG: 0
})
    
let cash = new gsap.timeline();
    
cash.to('#money_icon, #money_icon2', {										
	drawSVG: "100%",
//	delay: .5,
	duration: 1,
	ease: "none"
})
cash.to('#money_icon, #money_icon2', {

fill: "black",
duration: 1,

})
  cash.pause()  
 //env   
    
    gsap.set('#tree1', {
	drawSVG: 0
})
      
let tree = new gsap.timeline();
    
tree.to('#tree1', {										
	drawSVG: "100%",
	duration: 3,
	ease: "none"
})
tree.to('#tree1', {										
	fill: "black",
	duration: 1,
    delay: -2
	
})
  tree.pause()  
   //fam
    
    gsap.set('#family path', {
	drawSVG: 0
})
      
let fam = new gsap.timeline();
    
fam.to('#family path', {										
	drawSVG: "100%",
	duration: 2,
	ease: "none"
})
fam.to('#family path', {										
	fill: "black",
	duration: 2,
    delay: -1
	
})
  fam.pause()

    gsap.set('#god, #p1, #p2, #p3', {
	drawSVG: 0
})
      
let rel = new gsap.timeline();
    
rel.to('#god, #p1, #p2, #p3', {										
	drawSVG: "100%",
	duration: 2,
	ease: "none"
})
rel.to('#god, #p1, #p2, #p3', {										
	fill: "black",
	duration: 2,
    delay: -1
	
})
  rel.pause()

    gsap.set('#globe path', {
	drawSVG: 0
})
      
let erf = new gsap.timeline();
    
erf.to('#globe path', {										
	drawSVG: "100%",
	duration: 3,
	ease: "none"
})
erf.to('#globe path', {										
	fill: "black",
	duration: 2,
    delay: -2
	
})
  erf.pause()   
    
  
  let clickedDeath = false;
  let clickedAmerican = false;
  let clickedForeign = false;
  let clickedTalkYes = false;
  let clickedTalkNo = false;


  new fullpage('#fullpage', {

    licenseKey: "B80L9-WCO9J-7K117-18AJK-VEQXP",
    // responsiveHeight: 410,
    // fitToSection: true,
    keyboardScrolling: true,
    // verticalCentered: true,
    lazyLoading: true,
    onLeave: function(origin, destination, direction){
      // var leavingSection = this;

            //  if(origin.index == 1 && direction =='down' && clickedDeath == false) {
            //     fullpage_api.setAllowScrolling(false, 'up, down');
      
            //  }
            //   if( origin.index == 1 && clickedDeath == true) {
      
            //    fullpage_api.setAllowScrolling(true, 'down, up');
      
            //  }

  
    if(origin.index == 6 && direction =='down'){
    bars.play()
      }
        
      if(origin.index == 8 && direction =='down'){
       cash.play()
//        $('.gravestone').css('animation-play-state', 'running');
      }
  
      if(origin.index == 9 && direction =='down'){

    tree.play();

    }
          if(origin.index == 10 && direction =='down'){

    fam.play();

    }   
                if(origin.index == 11 && direction =='down'){

    rel.play();

    }  
                      if(origin.index == 12 && direction =='down'){

    erf.play();

    }  

    }
  });


  mortalYes.addEventListener('click', function() {
  //  clickedDeath = true;
    fullpage_api.moveSectionDown();
  });

  citizenYes.addEventListener('click', function() {
    fullpage_api.moveSectionDown();
  //  clickedAmerican = true;
  });
  citizenNo.addEventListener('click', function() {
    fullpage_api.moveSectionDown();
 //   clickedForeign = true;
  });
  talkYes.addEventListener('click', function() {
    fullpage_api.moveSectionDown();
    let values = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.id)
 
    if(values.includes("citizenYes")) {
      document.getElementById('ifelse').innerHTML = "Good for you! Only 26% of Americans have a plan in place, and roughly 100 million Americans will fall ill and need to rely on others for their health care decisions."
    } 
  
    else if (values.includes("citizenNo")) {
    
      document.getElementById('ifelse').innerHTML ="Good for you! This site is focused on the <em>American</em> choices for interment, so you may learn something."
    } 

  });
  talkNo.addEventListener('click', function() {
    fullpage_api.moveSectionDown();
    let values2 = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.id)

      if (values2.includes("citizenYes") ) {
 
        document.getElementById('ifelse').innerHTML = "The bad news: Without any input, you'll probably be embalmed, then buried or cremated. Only 26% of Americans have a plan in place, and roughly 100 million Americans will fall ill and need to rely on others for their health care decisions.<br/>The good news: We made this site for you - learn about your options!"
      } else if (values2.includes("citizenNo") ) {
    
        document.getElementById('ifelse').innerHTML ="This site is focused on the American choices for interment, so you may learn something!"
      } 
 
  });





})