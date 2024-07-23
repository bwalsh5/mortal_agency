document.addEventListener("DOMContentLoaded", function(event) { 

  const landscape = window.matchMedia("(orientation: landscape)").matches;

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

   // END VIZ
// FAQ
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

//end fAQ

window.onbeforeunload = function() {
  history.scrollRestoration = "manual";
  // scroll to top on refresh  
  window.scrollTo(0,0);   
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
document.body.scrollTop = 0; // For Safari

}
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
ScrollTrigger.config({ 
isTouch: 2
  })
    
  const myTimeout = setTimeout(fade, 1);

  function fade() {
    document.getElementById('svg').style.visibility = "visible";
  }
  
  gsap.set('#svg path', {
    autoAlpha:0,
    // scaleX:0,
    // scaleY:0
  })
  
  let fader = new gsap.timeline({delay:8});
  
  fader.timeScale(5); 
  
  fader.to('#svg path', {
      autoAlpha:1,
    // scaleX:"100%",
    // scaleY:"100%",
  
    stagger: .01
    
  })
//  fix so this happens when we get to it
gsap.to('.green', 3, {fill: "#7fc241",  delay: 2, scrollTrigger:'.green'});


// gsap.to("#first", {duration: 5, text: "traditional", autoAlpha: 1, delay: 1});
// gsap.to("#second", {duration: 6, text: "burial", delay: 2});

let erf_fade = new gsap.timeline();
    
    erf_fade.to('#globe path', {
    autoAlpha: 0
});
	
erf_fade.pause();

    var titles  = [
        `<p class='title'>A standard burial usually begins with embalming your body,`,
    
       `<p class='title'>...then placing it in a casket,</p>`,
       `<p class='title'>which is then laid inside a concrete vault or grave liner,</p>`,
    
       `<p class='title'>and finally buried in a cemetery or graveyard.</p>`, 
`<p class='title'>Traditional burial is rather expensive. 
        
        </p>`,
        
           `<p class='title'>
           This is the least environmentally friendly way to be interred. It's also unsustainable.</p>`,
    
    ` <p class='title'>A primary appeal of traditional burial is the involvement of family and friends of the deceased.</p>`,  
   
  `<p class='title'>Another appeal of traditional burial is its embrace and encouragement from American churches.</p>`,
            
    `<p class='title'>Traditional burial is ubiquitous across America.</p>`
    ]
var texty = [
  
  `<p>Embalming is common practice in the U.S. It is rarely done in other countries. The  process involves draining all of the organs and blood from the body and replacing them with a chemical solution to slow down decomposition. Embalming is not required by law, nor does it “sanitize” a body or make it safer to be around. Dead bodies pose no public health risk.</p>`,
  
   `<p>Most caskets are made from hardwood, metals, and other synthetic materials. While some “sealer,” “protective,” or “gasketed” models may claim to preserve bodies by hermetically sealing them, the lack of air can create an environment that results in accelerated decomposition. No amount of embalming or special caskets can prevent decay; our bodies will eventually decompose as nature intended us to.</p>`,
//3
 
       `<p>Before a body is buried in a modern cemetery, a concrete vault or grave liner will be installed in the earth to prevent the ground above from moving, making it easier to maintain the landscape.</p>`,
//4
   
`<p>Most cemeteries are independently owned businesses that can create their own rules and policies. This may include strict rules about the types of grave markers or tombstones that can be used, what types of items can be left at a grave and for how long, etc. </p>`,
      
         `<p>In addition to paying for a casket, a vault, and an embalming, there are cemetery costs and frequent hidden fees - making this option frequently cost between $8-12,000.</p>
           <p>Rating: <span class="dot">&#9734;&#9734;&#9734;&#9734;&#9734;;</span></p>`,
      //env
 `<p class='endnote'>Each year,<em>Americans </em>put into the ground:</p>
             <ul id='natural' class='endnote'>

                <li>827,060 gallons of embalming fluid</li>
                <li>2,700 tons of copper & bronze</li>
                <li>30 million board feet of hardwoods</li>
               <li>1,600,000 tons of reinforced concrete</li>
                <li>14,000 tons of steel</li>
                <ul>
                <p>Rating: <span  class="dot">&#9734;&#9734;&#9734;&#9734;&#9734;</span></p>`,
          `<ul id='natural' class='endnote'>
                  <li>Some feel alienated by the spectacle, especially that of the embalmed body.</li> 
                  <li>Achieving a 'sense of closure' gets mixed results with traditional burial.</li>
                  </ul>
                  <p>Rating:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>`,
      
       `<p class='endnote'>Many Christians consider traditional burial their only option - in fact, and the Catholic church required it until 1963.</p>
   <p>Yet this is not an option for a Jewish Orthodox or Muslim burial, as embalming is required, and the interment usually takes more than 24 hours.</p>
                    <p>Rating:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>`,
      
           `<p id='earth' class='endnote'> That said, space in cemeteries and graveyards is running out, and the Earth is a finite resource.</p>
          
                    <p>Rating:<span class='dot'>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`
      
  ];
    
document.getElementById('title').innerHTML = titles[0];
document.getElementById('text').innerHTML = texty[0]; 
    
    
function zero() {
         document.getElementById('title').innerHTML = titles[0];
        document.getElementById('text').innerHTML = texty[0]; 
}
    function one() {
        document.getElementById('title').innerHTML = titles[1];
        document.getElementById('text').innerHTML = texty[1];   
    }

   function two() {
        document.getElementById('title').innerHTML = titles[2];
        document.getElementById('text').innerHTML = texty[2];   
    }

   function three() {
        document.getElementById('title').innerHTML = titles[3];
        document.getElementById('text').innerHTML = texty[3];   
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
    // document.getElementById('text').innerHTML = texty[9];  
      erf_fade.play();
      // document.getElementById('title').style.display =  "none";
      // document.getElementById('nav').style.display =  "none";
      // document.getElementById('text').style.display =  "none";
          document.getElementById('fade').style.display =  "none";
    document.getElementById('coffin').style.display =  "none";
    document.getElementById('vault').style.display =  "none";
    }

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
        end: "+=600",
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
        end: "+=1900"
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
        end: "+=1900"
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
        end: "+=1900",
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
        scrub: true,
        end: "+=600"
    }
})
erf.to('#globe path', {										
	fill: "black",
	duration: 3,
    scrollTrigger: {
     trigger: "#globe",
        scrub: true,
        end: "+=1600",
//        horizontal: true
    }
})


gsap.to('#green', 3, {fill: "#7fc241",  delay: 1});

//  gsap.set('.arrow', {rotation: 180})
//  gsap.set('#arrowBox', {opacity: 0})
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

	ScrollTrigger.create({
      trigger: "#arrowBox",
  start: "center 26%",
  endTrigger: "#coffin",
  pin: true,
  pinSpacing: false   
});
ScrollTrigger.create({
  trigger: "#title",
  start: "center 15%",
  endTrigger: "#fifthLister",
   end: "#fifthLister",
  pin: true,
  pinSpacing: false,
//    onEnter: zero(),
    onLeaveBack: zero,
  //  toggleActions: "restart pause resume pause"
    
});  
    
ScrollTrigger.create({
  trigger: "#text",
  start: "center 80%",
  endTrigger: "#fifthLister",
   end: "#fifthLister",
  pin: true,
  pinSpacing: false,
  //  animation: fit,
//     onEnter: zero(),
  // onLeaveBack: zero

});


    ScrollTrigger.create({
  trigger: "#fade",
  start: "center center",
  endTrigger: "#fifthLister",
  pin: true,
  pinSpacing: false,
     onLeaveBack: zero

});

let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {  
//desktop
ScrollTrigger.create({
  trigger: "#coffin",
  start: "center 40%",
  endTrigger: "#fifthLister",
// end: "#end",
  pin: true,
  pinSpacing: false, 
onEnter: one,
  onLeaveBack: zero,
});
    });
    
    mm2.add("(min-device-width: 768px) && (max-device-width: 1024px) && (-webkit-min-device-pixel-ratio: 2)", () => {    
      //mobile
      ScrollTrigger.create({
        trigger: "#coffin",
        start: "center 43%",
        endTrigger: "#fifthLister",
       end: "#fifthLister",
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
  start: "center 43%",
  endTrigger: "#fifthLister",
 end: "#fifthLister",
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
  endTrigger: "#fifthLister",
  pin: true,
  pinSpacing: false,
    onEnter: two,
  onLeaveBack: two
   // toggleActions: "restart pause resume pause"
});
  });
  mm3.add("(min-device-width: 768px) && (max-device-width: 1024px) && (-webkit-min-device-pixel-ratio: 2)", () => {    
    //mobile
    ScrollTrigger.create({
      trigger: "#vault",
      start: "center 43%",
      endTrigger: "#fifthLister",
     end: "#fifthLister",
      pin: true,
      pinSpacing: false, 
    onEnter: one,
      onLeaveBack: zero,
    });
    
     }); 
mm3.add("(max-width: 799px)", () => {    
//mobile
  ScrollTrigger.create({
  trigger: "#vault",
  start: "center 43%",
  endTrigger: "#fifthLister",
  pin: true,
  pinSpacing: false,
    onEnter: two,
  onLeaveBack: two
   // toggleActions: "restart pause resume pause"
});  
});




mm3.add("(min-width: 800px)", () => {  
ScrollTrigger.create({
  trigger: "#grass",
  start: "center 300%",
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
mm3.add("(max-width: 799px)", () => {  
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
//listers
    
ScrollTrigger.create({
  trigger: "#firstLister",
  start: "top 20%",
    end: "#secondLister",
  endTrigger: "#secondLister",
  pin: true,
  pinSpacing: false,
    animation: cash,
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
    animation: tree,
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
    animation: fam,
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
    animation: rel,
    onEnter: seven,
  onLeaveBack: seven
   // toggleActions: "restart pause resume pause"
});
ScrollTrigger.create({
  trigger: "#fifthLister",
  start: "top 20%",
  endTrigger: ".chad",
    end: ".chad",
  pin: true,
  pinSpacing: false,
    animation: erf,
    onEnter: eight,
    onLeaveBack: eight
    //toggleActions: "restart pause resume pause"
});

ScrollTrigger.create({
  trigger: "#sixthLister",
  start: "top 20%",
  endTrigger: ".ninja",
     end: ".ninja",
  pin: true,
  pinSpacing: false,
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
 });


