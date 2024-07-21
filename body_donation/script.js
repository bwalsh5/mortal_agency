document.addEventListener("DOMContentLoaded", function(event) { 

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


   // END VIZ



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin) 



gsap.set('#oval, #svg', {
	visibility: "visible"
})

      gsap.set('#svg path, header, footer', {
	autoAlpha:0,
})  
// const portrait = window.matchMedia("(orientation: portrait)").matches;

//alert(portrait);

// if (portrait == true) {
//   alert('please rotate your device.');
// }
// portrait = `true` or `false` 

// let portrait2 = window.matchMedia("(orientation: portrait)");

// portrait2.addEventListener("change", function(e) {
//   if(e.matches) {
//       alert('please rotate your device sideways.');
//   } else {
   
//   }
// })



var titles  = [``,

  `<p class='title'> 
  You can choose to donate your whole body after death to research and education at little to no cost.
</p>`,

  `<p class='title'>While this option is considered a generous gift and body donations are vital to advancing medical science, it also comes with risks. </p>`,

  `<p>That said, donation is needed for Medical and Physical Therapy programs, as well as research.</p>`,

  `<p>Donated bodies are usually used for 2-18 months.</p>`,

// `<p>After research, the cremated remains are returned to the family.</p>`,
  
          //4
          `<p class='title'> 
          Body Donation is usually free.  
          </p>`,
       //5   
             `<p class='title'> 
     You will still have a sizeable environmental impact.</p>`,
     //6 
       `<p class='title'>  
  
          Body Donation is not an option for those who want a memorial service with the body present.  </p>`,  
    //7 
     `<p class='title'>  
  
     Most religions are supportive of body donation.  </p>`,
    //8          
       `<p class='title'>  
  
     There is no geographic limitation on body donation, but arrangements for donation must be made in advance.  </p>`
      
  ]
  var texty = [``,
      
  `<p>Each donation program has different requirements for bodies depending on their needs, so things like age, weight, cause of death, etc. may disqualify a body for donation. </p><p>It's key to do your research and ask as many questions as possible to find the right fit. Start by checking with local universities which may have a donor program in place. It's important to understand an institution's policies and arrange donation beforehand to avoid misunderstandings and to have an alternative plan.</p>`,
        
            `<p class='endnote'> 
            At this time there is no federal oversight or regulation, allowing for-profit businesses to buy, sell and use an individual's remains in ways that you and your family may not be comfortable with. </p>`,
 
        //7

        `<p>Students recognize the selflessness of donation, and treat bodies with the utmost respect. Many schools have 'Gratitude Ceremonies' at the end of the Academic year to honor those who gave so generously.</p>`,

             `<p class='title'> In most cases remains will be embalmed and later cremated and returned to the family.

             </p>`,
             
//1
    `<p> 
  A lab or University may require a small fee for processing the body, but this cost pales in comparison to other interment options.  
        </p>
        <p>Ranking:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,   
          
    //2    
               ` <p> Embalming and cremation of the body will still result in carcinogens being added to both the land and the air.
       </p>

       <p>Ranking:<span class="dot">&#9733;&#9733;&#9733;&#9734;&#9734;</span></p>`,
       
    //3      
  `<p>The body is donated immediately upon death. A memorial service may be held, but probably not with the body present.
       </p>

       <p>Ranking:<span class="dot">&#9733;&#9734;&#9734;&#9734;&#9734;</span></p>`,

       //4
          `<ul> 
           <li>Most Christian religions consider body donation a charitable act of love.
       </li> 
       <li>Judaism and Buddhism are supportive of it too.
       </li> 
       <li>Hinduism does not prevent body donation, and considers it a personal choice. 
       </li> 
           <li>Islam prefers organ donation over whole body donation. 
       </li> 
       </ul>

       <p>Ranking:<span class="dot">&#9733;&#9734;&#9734;&#9734;&#9734;</span></p>`,
   //5
`<p> Most bodies are donated locally, rather than crossing state lines.</p> 
<p> Many alumni prefer to donate their bodies to their schools' medical school.</p>

<p>Ranking:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`
      
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

gsap.set('#globule path', {
	drawSVG: 0,
	scale: 0,
	transformOrigin: "center center",
	rotation: -300,
	y: 0
})

gsap.set('#tools path, #tools circle', {
	drawSVG: 0,
	scale: 0,
	transformOrigin: "center center",
	rotation: 90,
	y: 0,
	x: 0
})
gsap.set('#research path, #research circle', {
	drawSVG: 0,
	scale: 0,
	transformOrigin: "center center",
	rotation: 90,
	y: 0,
	x: 0
})

let meds = new  gsap.timeline({duration:2});

meds.to('#globule path', {
	drawSVG: "100%",
	scale: .6,
	rotation:0,
	y:-400
	
})

meds.to('#tools path, #tools circle', {
	drawSVG: "100%",
	scale: .6,
	rotation:0,
	y:-400,
	x:0,
	stagger: .1
})

meds.to('#research path, #research circle', {
	drawSVG: "100%",
	scale: .6,
	rotation:0,
	y:-400,
	x:0,
	stagger: .1
	
},0)
  meds.to("#research path, #research circle, #tools path, #tools circle, #globule path", {
    y: -386,
      x: 7,
      rotation: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
      stagger: .1,
//      delay: -3
  });



let mm = gsap.matchMedia();
    
mm.add("(min-width: 800px)", () => {
gsap.set('#money svg, #env svg, #rel svg', {
	scale: 0.2
});
gsap.set('#fam svg, #globe svg', {
	scale: 0.1
});
});
mm.add("(max-width: 799px)", () => {  
	gsap.set('#money svg, #env svg, #rel svg', {
	scale: 0.35
});
gsap.set('#fam svg, #globe svg', {
	scale: 0.2
});
	gsap.set('#oval', {
		  y:20,
    yPercent: -50

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



let i = 0;
function change() {
	i++;
  if(i ==1) {
    gsap.to('header, footer', {
      autoAlpha: 1,
      duration: 2
    })
  }
  if(i==4) {
    gsap.to('#research', {
      autoAlpha: 0
    })
  }

	
	document.getElementById('header')
.innerHTML = titles[i];
document.getElementById('pooter')
.innerHTML = texty[i];
}
function unchange() {
		i--;
	document.getElementById('header')
.innerHTML = titles[i];
document.getElementById('pooter')
.innerHTML = texty[i];

}
//temp gauge
select = function(s) {
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
liquidId = 1800
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
  trigger: "#research",
 horizontal: true,
  start: "center center",
  endTrigger: "#end",
	pin: true,
	pointerEvents: "none",
  onEnter: change,
  onLeaveBack: unchange,
    animation: meds

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
    endTrigger: "#end_nav",
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

gsap.set('.flame', {transformOrigin: "bottom center"})

const fire_tl = new gsap.timeline({
	scrollTrigger: {
			trigger: '#flame',
		horizontal: true,
	scrub: true,
	// markers: true,
		  start: "right center",
    end: "+=10000"
}
	})
	fire_tl.to('#Match2 path', {
	y: 28,
	x:8,
	scaleX: 1.6,
		scaleY: 1.4,
		duration: 100,
		repeat: -1,
		yoyo: true,
	stagger: 2,
		autoAlpha: .6
})
fire_tl.to('#Match3 path', {
	y: 36,
	x:6,
	scale: 1.5,
duration: 100,
		repeat: -1,
		yoyo: true,
	stagger: 3
})
	fire_tl.to('#Match path', {
	y: 48,
	x:-4,
	scale: 1.7,
duration: 100,
		repeat: -1,
		yoyo: true,
	stagger: 5
})
   


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


})