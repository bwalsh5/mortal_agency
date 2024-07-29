window.onbeforeunload = function() {
  // scroll to top on refresh    
document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
document.body.scrollLeft = 0; // For Safari
}

if (window.safari) {
  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
      history.go(1);
  };
}

// if (/iPhone|Android/i.test(navigator.userAgent)){
//   alert('phone')
//   }
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
  const scroll = window.scrollX
  if(scrollX > 300) {
    document.getElementById("myModal").style.display='none'
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

gsap.set('#oval, #svg', {
	visibility: "visible"
})
      gsap.set('#svg path, header, footer', {
	autoAlpha:0
})  
//const portrait = window.matchMedia("(orientation: portrait)").matches;

//alert(portrait);

// if (portrait == true) {
//   alert('please rotate your device.');
// }
// portrait = `true` or `false` 

//let portrait2 = window.matchMedia("(orientation: portrait)");

//portrait2.addEventListener("change", function(e) {
 // if(e.matches) {
   //   alert('please rotate your device sideways.');
 // } else {
   //   alert('Landscape')
  //}
// })

//mobile



var titles  = [   `&nbsp;`,
  //0
      `<p class='title'>Aquamation, aka water cremation or alkaline hydrolysis, is an eco-friendly alternative to flame-based cremation. </p>`,
      //1    
         `<p class='title'>Bodies are placed into a metal cradle before being inserted into the aquamation chamber.</p>`,
  //2
               `<p class='title'>The chamber fills with water, and is heated to 300 \xB0 F for about 4 hours.  Elevated pressure prevents the solution from boiling. The lye gradually breaks down the body into its chemical components, leaving bone fragments.</p>`,



      //3  
      // `<p>one more thing</p>`,      
      // `<p class='title'>  Tissue is dissolved, resulting in a small amount of liquid mass and soft bone fragments that can be ground to ash.  </p>`,
          //3
          `<p class='title'>  
          Aquamation costs about $2,000 and up.    
          </p>`,
       //4   
             `<p class='title'> 
             Aquamation is more environmentally friendly than cremation.  </p>`,
     //5 
       `<p class='title'>  
          Like cremation, there is usually no witness for Aquamation.  </p>`,  
    //6 
     `<p class='title'>  
     Not all religions have an offical stance on Aquamation.  </p>`,
    //7          
      ` <p class='title'>  
      Aquamation is legal in 18 states.  </p>`
     //8     
      // `<p class='title'>  Consider your other options:  </p>`
  ]
  var texty = [`&nbsp;`,
  `<p>
  Instead of fire, a combination of alkalized water and heat work to reduce the body to ashes.</p>`,        
    //1      
    `<p>There is no need for a casket or embalming.</p>`,

              //  `<p>After eight hours only brittle bones and ash remain, similar to flame cremation</p>`,
              `<p>Just as with flame cremation, aquamated remains are carefully collected, then placed in a cremulator.
               A device pulverizes the remains leaving a more uniform, powdery substance, or “ashes.” Aquamated remains leave 20-30% more ashes which appear whiter in color, to that of flame-based cremation.</p>`,
      //money       
      `<p>But there are no additional costs for emlbalming, a casket, a cemetery plot or anything else. So Aquamation is actually on the cheaper side of your interment options.
      </p>
     <p> <span class="dot">&#9733; &#9733; &#9733; &#9734; &#9734;</span></p>`
      ,
    //2      
  `<p>Aquamation is a greener alternative as it can cut energy use by 90%, and cut greenhouse gas emissions by 35%.</p>` +
   //4 env
   `<ul id='natural' class='endnote'> 
   <li>The process uses about one-tenth the energy a crematorium does.</li> 
   <li>Emissions are much lower than the alternatives.</li> 
   <li>It does not incinerate implants, mercury or other pollutants.</li> 
  <li>The process uses about 300 gallons of water.  </li> 
   <li>Upon completion, the solution, made up of 82% fresh water, 4% KOH and 14% hydrolized human remains, is drained into the municipal sewer system, much like the blood and organs removed during the embalming process.</li>
  </ul>
  <p>Ranking:<span class="dot">&#9733; &#9733; &#9733; &#9733; &#9733;</span>;</p>`,
        
          //  `<p>  The bone fragments are collected into a cremulator to crush them down to 'ashes.'  </p>`,     
  //3 
        // `<ul class='endnote'> 
        //   <li>  It is only legal in 18 states, so travel may be required.  </li>  
        //       <li>Transporting a body across State lines can get complicated, with some states requiring embalming or refridgeration.  </li>  </ul>
        //       <p>Ranking: &#9679;&#9679;<span class="dot">&#9675;&#9675;&#9675</span></p>`,  
       
        
        //5: fam
            `<ul class='endnote'> 
                    <li> While there is limited or no family participation in the process, families can still have a service separate from the procedure.  </li> 
                    <li> The traditional tray can be replaced with a rented casket, if desired.  </li> 
                    <li>  Remains may be returned to families, much like in cremation. </li> 
                    <li>  The remains from Aquamation can also be used as fertilizer  </li>  
                    </ul> 
                    <p>Ranking:<span class="dot">&#9734; &#9734; &#9734; &#9734; &#9734;</span></p>`,
      //6  : god
                    `<ul  class='endnote'> 
                      <li>  While Christian faiths accept cremation as a means of disposal, 'water cremation' remains somewhat controversial.  </li> 
        
                      <li>  Some American Catholic diocese consider the process a denigration of the human body.  </li> 
                      <li>  A Catholic Conference in Ohio successfully prevented legislation legalizing Aquamation on these grounds.  
        </li>            
                    </ul>
                    <p>Ranking:<span class="dot">&#9733; &#9734; &#9734; &#9734; &#9734;</span></p>`,
        //7: location
             `<ul id='earth' class='endnote'> 
                      <li>  The number of Funeral Directors offering Aquamation is further limited by the cost of purchasing and installing a resomator: usually around $400,000.  </li> 
                   </ul>
                   <p>Ranking:<span class="dot">&#9733; &#9734; &#9734; &#9734; &#9734;</span></p>`,
    
    ];
document.getElementById('header').innerHTML = titles[0];
document.getElementById('pooter').innerHTML = texty[0];


gsap.set('#arrowBox', {
	y: "-20vh"
})

gsap.set('#svg', {
	// scale: 0.8
})

let fader = new gsap.timeline({delay:4});

fader.timeScale(4); 

fader.to('#svg path', {
		autoAlpha:1,
	stagger: .01
})
let mm = gsap.matchMedia();
    
mm.add("(min-width: 800px)", () => {
gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.2
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.1
});
gsap.set('#oval', {
  // scale: 1.25,
  // y: 180
})
});
mm.add("(max-width: 799px)", () => {  
	gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.35
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.2
});
	gsap.set('#oval', {
		  // y:120,
    // yPercent: -50

	})
  gsap.set('#dot, #square, #oval', {
    transformOrigin: "center center",
    scale: 0.65
  })
  gsap.set('footer p', {
        fontSize: "1em"
  })
	
});

mm.add("(max-width: 599px)", () => {  
		gsap.set('#oval', {
		 y: 120,
    yPercent: -50

	})
	
});

gsap.set('footer', {
  transformOrigin: "top center",
  fontSize: "1em"
})

//THERMOMETER
select = function (s) {
  return document.querySelector(s);
},
selectAll = function(s) {
  return document.querySelectorAll(s);
},
  liquid = selectAll('.liquid'),
  tubeShine = select('.tubeShine'),
  label = select('.label'),
  follower = select('.follower'),
  dragger = select('.dragger'),
  dragTip = select('.dragTip'),
  minDragY = -630,
  liquidId = 0,
  step = Math.abs(minDragY/100),
  snap = Math.abs(minDragY/10),
  followerVY = 0
gsap.set(dragTip, {
transformOrigin:'20% 50%'
})
var tl = new gsap.timeline()
tl.staggerTo(liquid, 0.7, {
x:'-=200',
ease:Linear.easeNone,
repeat:-1
},0.9)
tl.time(100);
function onUpdate(){
liquidId = 300
label.textContent = liquidId + '°';
gsap.to(liquid, 1.3, {
y: -328,
ease:Elastic.easeOut.config(1,0.4)
})
}
gsap.to(dragger, 1.4, {
y:minDragY/2,
onUpdate:onUpdate,
ease:Expo.easeInOut
})
var deg = '\u00B0';
/// end thermometer


//change text
let i = 0;
function change() {
	i++;
  if(i ==1) {
    gsap.to('header, footer', {
      autoAlpha: 1,
      duration: 2
    })
  }
	
	document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];
}

function unchange() {
		i--;
	document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];
}

//pins
ScrollTrigger.create({
  trigger: "header",
 horizontal: true,
  start: "center center",
  end: "#sum",  
    endTrigger: "#sum",
	pin: true
});
ScrollTrigger.create({
  trigger: "footer",
 horizontal: true,
  start: "center center",
  end: "#sum",  
    endTrigger: "#sum",
	pin: true
});

ScrollTrigger.create({
  trigger: "#arrowBox",
 horizontal: true,
  start: "right right",
  end: "#oval",  
    endTrigger: "#oval",
	pin: true
});

ScrollTrigger.create({
  trigger: "#dot",
 horizontal: true,
  start: "center center",
  end: "#end",  
    endTrigger: "#end",
	pin: true,
	 onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#square",
 horizontal: true,
  start: "center center",
  end: "#end",  
    endTrigger: "#end",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#oval",
 horizontal: true,
  start: "center center",
  end: "#end",  
    endTrigger: "#end",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#money",
 horizontal: true,
  start: "center center",
  end: "#env",  
    endTrigger: "#env",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange

});
ScrollTrigger.create({
  trigger: "#env",
 horizontal: true,
  start: "center center",
  end: "#fam",  
    endTrigger: "#fam",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#fam",
 horizontal: true,
  start: "center center",
  end: "#rel",  
    endTrigger: "#rel",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#rel",
 horizontal: true,
  start: "center center",
  end: "#globe",  
    endTrigger: "#globe",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#globe",
 horizontal: true,
  start: "center center",
  end: "#end",  
    endTrigger: "#sum",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
ScrollTrigger.create({
  trigger: "#sum",
 horizontal: true,
  start: "center center",
  end: "#the_end",  
    endTrigger: "#the_end",
	pin: true
});
ScrollTrigger.create({
  trigger: "#end_nav",
 horizontal: true,
  start: "center center",
  end: "#summary",  
    endTrigger: "#summary",
	pin: true
});
ScrollTrigger.create({
  trigger: "#summary",
 horizontal: true,
  start: "center center",
  end: "#chacha",  
    endTrigger: "#chacha",
	pin: true
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