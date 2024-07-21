document.addEventListener("DOMContentLoaded", function(event) { 

  // const landscape = window.matchMedia("(orientation: landscape) and (max-width: 800px)").matches;

  // if (landscape == true) {
  //   alert('please rotate your device.');
  // }
  //MODAL

// Get the modal

var modal = document.getElementById("myModal");
// localStorage.setItem("modalshown", "1")

if(localStorage.getItem("modalshown") == "0") {
modal.style.display = "block";
localStorage.setItem("modalshown", "1")
// console.log('show modal')
} else {
  modal.style.display = "none";
  // localStorage.setItem("modalshown", "0")
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
window.onscroll = function(){
  var top =	 window.pageYOffset || document.documentElement.scrollTop;
  if (top > 500) {
    document.getElementById('myModal').style.display = "none";
    localStorage.setItem("modalshown", "0")
  } else {
    //document.getElementById('nav').style.background = "yellow";
  }
  };


//END MODAL
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


   gsap.registerPlugin(ScrollTrigger);
   // END VIZ

  window.onbeforeunload = function() {
    history.scrollRestoration = "manual";
    // scroll to top on refresh  
    window.scrollTo(0,0);   
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
  
  }
  gsap.registerPlugin(DrawSVGPlugin) 
  gsap.registerPlugin(MorphSVGPlugin)
  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


gsap.to("#first", {duration: 5, text: "traditional", autoAlpha: 1, delay: 1});
gsap.to("#second", {duration: 6, text: "burial", delay: 2});


const myTimeout = setTimeout(fade, 1);

function fade() {
  document.getElementById('svg').style.visibility = "visible";
}


gsap.set('#svg path', {
	autoAlpha:0,
	scaleX:0,
	scaleY:0
})


let fader = new gsap.timeline({delay:8});

fader.timeScale(8); 

fader.to('#svg path', {
		autoAlpha:1,
	scaleX:"100%",
	scaleY:"100%",

	stagger: .01
	
})




    let titles  = [
     `<p class='title'>Home funerals are performed by chosen family or friends.`,
    
      `<p class='title'>They allow us to spend time with the deceased in a familiar and comfortable setting,</p>`,
   
      `<p class='title'>Burials on private property are legal in most states with the exception of California, Indiana, Washington, and the District of Columbia.</p>`,
   
            `<p class='title'>There may be regulations on where a grave is dug, including distance requirements from public roads, power and water sources.</p>`,
       
       `<p class='title'>  
         
       Home Burial can vary in cost.  
       
       </p>`,
       
          `<p class='title'> 

  Like green burial, this is the most environmentally friendly way to be interred. </p>`,
   
    `<p class='title'>  
    
       A primary appeal of home burial is the involvement of family & friends of the deceased. </p>`,  
  
  `<p class='title'>  
   
  There are no specific religious doctrines pertaining to home burial.</p>`,
           
   `<p class='title'>  

        
There are very strict rules on where one can be buried on their own land: </p>`,
  
       
   `<p class='title'>  Consider your other options:  </p>`

  
      
  ];
let texty = [

  `<p>The right to care for your own dead is a safe, legal, and low cost option in every U.S. state.</p>
  `,
   
  `<p>and create an opportunity for more meaningful involvement. This may include decorating a coffin or shroud, arranging flowers, memorial making, and holding a funeral service that is family and community led instead of funeral industry led. 
  </p>`,
       
  
  //3
            `<p>While legal, if there isn't a cemetery legally established on your property, you will need to contact your local zoning board regarding regulations, permits, and more. 
            </p>`,
  //4
       
  `<p>Once a location is selected a grave can be dug by hand, allowing for additional family or community involvement. There is no vault or grave liner, and the grave can be marked however you wish. 
  </p>`,
        //$
           `<p class='endnote'> 
  
                But it avoids the outsized costs of a casket, a vault, and embalming.</p>
                <p>Ranking:
                <span class="dot">&#9733; &#9733; &#9733; &#9734; &#9734;</span>
                </p>` 
  ,
        //env
          `<p class='endnote'> 
  
              No embalming fluid, casket, vault, or carbon footprint.  </p>
              <p>Ranking:<span class="dot">&#9733; &#9733; &#9733; &#9733; &#9733;
              </span></p>`, 
        
  
      //fam
            `<p class='endnote'> 
  
                  Those that have participated in a home burial emphasize the strong sense of closure created by being directly involved.  </p>
                  <p>Ranking:<span class="dot">&#9733; &#9733; &#9733; &#9733;&#9733;</span></p>`,
          
   //rilgion     
         `<p class='endnote'> 
  
                    Some religions prefer cremation, or burial in a specific location, like a church graveyard.  </p>
                    <p>Ranking:<span class="dot">&#9733; &#9733; &#9733; &#9733; &#9734;</span></p>`,
   //geo     
   
       `<p>In addition to the previously mentioned restrictions, ten states require the services of a licensed Funeral Director for home burial.</p> 
  
         <p>Ranking:<span class="dot">&#9733; &#9733; &#9733; &#9734; &#9734;</span></p>`
        


]
    
document.getElementById('title').innerHTML = titles[0];
document.getElementById('text').innerHTML = texty[0]; 
    
    
function zero() {
         document.getElementById('title').innerHTML = titles[0];
        document.getElementById('text').innerHTML = texty[0]; 
}
    function one() {
        document.getElementById('title').innerHTML = titles[1];
        document.getElementById('text').innerHTML = texty[1];   
                gsap.to("#fade", {duration: 1.5, autoAlpha: 0});

    }

   function two() {
        document.getElementById('title').innerHTML = titles[2];
        document.getElementById('text').innerHTML = texty[2]; 
        gsap.to("#vault", {duration: 1.5, autoAlpha: 0});
    }

   function three() {
        document.getElementById('title').innerHTML = titles[3];
        document.getElementById('text').innerHTML = texty[3];   
        // gsap.to("#coffin", {duration: 1.5, autoAlpha: 0});

//              alert('three')
    }
   function four() {
    document.getElementById('title').innerHTML = titles[4];   
    document.getElementById('text').innerHTML = texty[4]; 


    }
  function five() {
    document.getElementById('title').innerHTML = titles[5];  
    document.getElementById('text').innerHTML = texty[5];   
    }
  function six() {
    document.getElementById('title').innerHTML = titles[6]; 
    document.getElementById('text').innerHTML = texty[6];   

    }
  function seven() {
    document.getElementById('title').innerHTML = titles[7];  
    document.getElementById('text').innerHTML = texty[7];   

    }
  function eight() {
    document.getElementById('title').innerHTML = titles[8]; 
   document.getElementById('text').innerHTML = texty[8];   

    }
    

  function nine() {
    // document.getElementById('title').innerHTML = titles[9];  
    // document.getElementById('text').innerHTML = texty[9]; 
      // document.getElementById('nav').style.display =  "none";
      document.getElementById('text').style.display =  "none";
      document.getElementById('coffin').style.display =  "none";

      document.getElementById('title').style.display =  "none";

    }

//gsap.to('#bod', {fill: "#7fc241", delay: 2});

//gsap.to('.green', 3, {fill: "#7fc241",  delay: 1});

 gsap.set('.arrow', {rotation: 180})
 gsap.set('#arrowBox', {opacity: 0})
    //mm
    
  let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {  
        gsap.set('#vaultFront', {top: "4vh"})

});
mm.add("(max-width: 799px)", () => {
          gsap.set('#vaultFront', {top: "2vh"})
// mobile setup code here...
    });
    

gsap.set('#vaultFront', {scale: 0.8})
gsap.set('#vaultBack', {scale: .8})


gsap.to('#arrowBox', {autoAlpha:1,
                     delay: 4
                     })
gsap.to('.arrow', {
	y: 10, 
	scaleX: 1.2,
	yoyo:true, 
	repeat: -1

})

    //ICONS
    
    //cash
    gsap.set('#money_icon, #money_icon2', {
      drawSVG: 0,
        transformOrigin: "bottom center"
    })
        
    let cash = new gsap.timeline();
        
    cash.to('#money_icon, #money_icon2', {										
      drawSVG: "100%",
      duration: 3,
      ease: "none", 
        scrollTrigger: {
         trigger: "#money_icon",
       
            scrub: true,
            end: "+=600"
        }
    })
        
    cash.to('#money_icon, #money_icon2', {
    fill: "black",
    duration: 1,
     scrollTrigger: {
         trigger: "#money_icon",
      
         scrub: true,
         end: "+=1600",
    
        }
    
    })

 
    gsap.set('#tree1', {
      drawSVG: 0
    })
          
    let tree = new gsap.timeline();
        
    tree.to('#tree1', {										
      drawSVG: "100%",
      duration: 3,
      ease: "none",    
        scrollTrigger: {
         trigger: "#tree1",
            scrub: true,
            end: "+=600"
    
        }
    })
    tree.to('#tree1', {										
      fill: "black",
      duration: 1,  
        scrollTrigger: {
         trigger: "#tree1",
            scrub: true,
            end: "+=1600"
        }
      
    })
    //  tree.pause()  
       //fam
        gsap.set('#family', {
            scale: 0.6
        })
        gsap.set('#family path', {
      drawSVG: 0
    })
          
    let fam = new gsap.timeline();
        
    fam.to('#family path, #family circle', {										
      drawSVG: "100%",
      duration: 3,
      ease: "none",
        scrollTrigger: {
         trigger: "#family",
            scrub: true,
            end: "+=600",
    //        horizontal: true
        }
    })
    fam.to('#family path, #family .parent', {										
      fill: "black",
      duration: 1,
        scrollTrigger: {
         trigger: "#family",
            scrub: true,
            end: "+=1600"
        }
      
    })
    
        gsap.set('#god, #p1, #p2, #p3', {
      drawSVG: 0
    })
          
    let rel = new gsap.timeline();
        
    rel.to('#god, #p1, #p2, #p3', {										
      drawSVG: "100%",
      duration: 3,
      ease: "none",
        scrollTrigger: {
         trigger: "#god",
            scrub: true,
            end: "+=600",
    //        horizontal: true
        }
    })
    rel.to('#god, #p1, #p2, #p3', {										
      fill: "black",
      duration: 1,
        scrollTrigger: {
         trigger: "#god",
            scrub: true,
            end: "+=1600",
    //        horizontal: true
        }
      
    })
    //  rel.pause()
    
             //erf
        
        gsap.set('#globe path', {
      drawSVG: 0
    })
          
    let erf = new gsap.timeline();
        
    erf.to('#globe path', {										
      drawSVG: "100%",
      duration: 3,
      ease: "none",
        scrollTrigger: {
         trigger: "#globe",
            scrub: true
      
        }
    })
    erf.to('#globe path', {										
      fill: "black",
      duration: 3,
        scrollTrigger: {
         trigger: "#globe",
            scrub: true
        }
    })

let end_of_days = new gsap.timeline();

end_of_days.to('#globe path', {
  autoAlpha: 0
})

    
    // let fit = new gsap.timeline();
    
    // fit.to('#text', {
    //   width: "fit-content",
    //     height: "fit-content"
    // })
    


	ScrollTrigger.create({
      trigger: "#arrowBox",
  start: "center 26%",
  endTrigger: "#coffin",
  pin: true,
  pinSpacing: false   
});
ScrollTrigger.create({
  trigger: "#title",
  start: "center 12%",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
//    onEnter: zero(),
    onLeaveBack: zero,
  //  toggleActions: "restart pause resume pause"
    
});

  
ScrollTrigger.create({
  trigger: "#text",
  start: "center 80%",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
    // animation: fit,
//     onEnter: zero(),
  onLeaveBack: zero

});


    ScrollTrigger.create({
  trigger: "#fade",
  start: "center center",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
     onLeaveBack: zero

});
  let mm2 = gsap.matchMedia();
mm2.add("(min-width: 800px)", () => {  
//desktop
ScrollTrigger.create({
  trigger: "#coffin",
  start: "center 35%",
  endTrigger: "#end",
// end: "#end",
  pin: true,
  pinSpacing: false, 
onEnter: one,
  onLeaveBack: zero,
});
    });
mm2.add("(max-width: 799px)", () => {    
//mobile
ScrollTrigger.create({
  trigger: "#coffin",
  start: "center 40%",
  endTrigger: "#end",
// end: "#end",
  pin: true,
  pinSpacing: false, 
onEnter: one,
  onLeaveBack: zero,
});

 });   
    
  let mm3 = gsap.matchMedia();
mm3.add("(min-width: 800px)", () => {  
//desktop
ScrollTrigger.create({
  trigger: "#vault",
  start: "center 40%",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
    onEnter: two,
  onLeaveBack: two
   // toggleActions: "restart pause resume pause"
});
  });
mm3.add("(max-width: 799px)", () => {    
//mobile
  ScrollTrigger.create({
  trigger: "#vault",
  start: "center 43%",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
    onEnter: two,
  onLeaveBack: two
   // toggleActions: "restart pause resume pause"
});  
});

    
    
    let mm4 = gsap.matchMedia();


    mm4.add("(min-width: 800px)", () => {  
      ScrollTrigger.create({
        trigger: "#grass",
        start: "center 20%",
        endTrigger: "#end",
        pin: true,
        pinSpacing: false,
          onEnter: three,
         // toggleActions: "restart pause resume pause"
         onLeaveBack: three

          //onEnterBack is not firing b/c it's pinned so the grass  never fires the trigger again.
          //probs the same with the ones above, too.
      });
      });
      mm4.add("(max-width: 799px)", () => {  
        ScrollTrigger.create({
          trigger: "#grass",
          start: "center 20%",
          endTrigger: "#end",
          pin: true,
          pinSpacing: false,
            onEnter: three,
           // toggleActions: "restart pause resume pause"
           onLeaveBack: three 

            //onEnterBack is not firing b/c it's pinned so the grass  never fires the trigger again.
            //probs the same with the ones above, too.
        });
        });
ScrollTrigger.create({
  trigger: "#firstLister",
  start: "top 20%",
    end: "#secondLister",
  endTrigger: "#secondLister",
  pin: true,
  pinSpacing: false,
    onEnter: four,
   onLeaveBack: four
   // toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: "#secondLister",
  start: "top 20%",
  endTrigger: "#thirdLister",
    end: "#thirdLister",
  pin: true,
  pinSpacing: false,
    onEnter: five,
    onLeaveBack: five
   // toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: "#thirdLister",
  start: "top 20%",
  endTrigger: "#fourthLister",
    end: "#fourthLister",
  pin: true,
  pinSpacing: false,
    onEnter: six,
  onLeaveBack: six
   // toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: "#fourthLister",
  start: "top 20%",
  endTrigger: "#fifthLister",
  end: "#fifthLister",

    pin: true,
  pinSpacing: false,
    onEnter: seven,
  onLeaveBack: seven
   // toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: "#fifthLister",
  start: "top 20%",
   endTrigger: "#sixthLister",
    end: "#sixthLister",
  pin: true,
  pinSpacing: false,
    onEnter: eight,
    onLeaveBack: eight
    //toggleActions: "restart pause resume pause"
});

ScrollTrigger.create({
  trigger: "#sixthLister",
  start: "top 26%",
  endTrigger: ".ninja",
   end: ".ninja",
  pin: true,
  pinSpacing: false,
  animation: end_of_days,
    onEnter: nine,
    onLeaveBack: nine
    //toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: ".summary",
  start: "top 20%",
  endTrigger: "#end",
    end: "#end",
  pin: true,
  pinSpacing: false,
  //  onEnter: ten,
  //   onLeaveBack: ten
    //toggleActions: "restart pause resume pause"
});

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


});