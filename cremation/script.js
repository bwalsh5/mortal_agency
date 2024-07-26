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
  fader.play();

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

gsap.set('#oval', {
	visibility: "visible"
})
      gsap.set('#svg path, header, footer, #cremator', {
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

//mobile



let titles  = [
        
    ` <p class='title'>  
    Cremation uses fire to break down the muscles, tissues and bones of the human body. 

</p>`,

    `<p class="title">There are several different options for cremation, depending on the level of involvement a family wants. </p>`,

//2
`<p class='title'>The container with the body is placed in a large machine called a retort, which can get up to temperatures of 1,800 \u00B0 fahrenheit. The cremation process takes about three hours. Items like pacemakers or knee implants are removed from the body prior to cremation. </p>`,



  //4
  `<p class='title'>  

  Cremation is rather cheap.  
  
  </p>`,
 `<p class='title'> 

While cremation is more environmentally sustainable than traditional burial, it's certainly not carbon-neutral.  </p>`,
//6 
`<p class='title'>  

  Cremation in America is rarely perfomed in the presence of loved ones.  </p>`,  
//7 
`<p class='title'>  

Many religions have strict limitations on cremation.  </p>`,
//8          
`<p class='title'>  

Cremation rates vary greatly by country.  </p>`,

//9     
`<p class='title'>  Consider your other options:  </p>`


]
let texty = [
  `Embalming is not required by law. To ensure that the body is not unnecessarily embalmed be sure to talk to your family, your funeral director, or state your wishes in an advance directive.</p>

  <p class='title'>Prior to cremation bodies are placed in a container. This can be a cardboard casket decorated by chosen family, a simple, wooden casket, or another casket of your choosing. </p>`,

              `<p><span class="bold">Direct Cremation</span> is the least expensive option. Your body will go directly to the crematory where it will be cremated, and the ashes returned to your family. No service or viewing of the body takes place, however, this option can allow families to create a memorial at a later date.</p> 

<p><span class="bold">Cremation and Service</span> or a viewing can also be organized prior to cremation depending on your preferences and budget.</p>

<p><span class="bold">Witness Cremations</span> allow you to be present during the cremation. While this can be a wonderful option for people who want more of a hands-on experience, this may not be the best fit for everyone. For the most part crematories are industrial spaces and not designed with family involvement in mind, nor the space to accommodate more than a few people. Witness cremations can also come with additional costs from both the crematory and funeral home. `,
         

        //3        
`<p class='title'>The high temperatures dissolve the body's muscles and tissues, leaving behind ash and brittle bone fragments. These are carefully collected and then placed into a device called a cremulator which will pulverize the remaining material into “ashes,” a more uniform, powdery substance.</p>
         `,
 
      
 `<p>A direct cremation is the most affordable interment option, but doesn't include any memorialization, nor is it witnessed.</p>
         <p>Rating:<span class="dot">&#9734;&#9734;&#9734;&#9734;&#9734;</span></p>`,
     
        `<p>A typical cremation releases about 534 pounds of CO2 into the atmosphere. That's equivalent to a 600-mile car trip.</p>
              <p>Rating: <span class="dot">&#9733;&#9733;&#9734;&#9734;&#9734;</span></p>`,
      
      //5
      
          `<p> While witness cremation is allowed, crematoriums are industrial spaces, not as welcoming as a funeral home.</p>
               


<p>Rating: <span class="dot">&#9734;&#9733;&#9733;&#9733;&#9733;</span></p>`,
 
       `<p>Traditional Muslim and Judaic beliefs ban cremation. Catholocism and other Christian religions previously banned cremation because of a belief in the reincarnation of the body.</p>
                  <p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9734;&#9734;</span></p>`,
    
           `<ul id='earth' class='endnote'> 

                    <li>  It is ubiquitous in countries like Japan, with rates as high as 99.97%.  </li> 
                    <li> The cremation rate in America is about 59%.  </li> 
                    <li>  There are legal limits on where the ashes can be spread, which vary by state.  </li> 
                    <li>  Other than that, cremation is readily available everywhere in America.  </li> 
             
                 </ul>
                 <p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span>`   

  ];  

document.getElementById('header').innerHTML = titles[0];
document.getElementById('pooter').innerHTML = texty[0];



gsap.set('#arrowBox', {
	y: "-20vh"
})


let fader = new gsap.timeline({delay:4});

fader.timeScale(4); 

fader.to('#svg path', {
		autoAlpha:1,
	stagger: .01
})


let mm = gsap.matchMedia();
    
mm.add("(min-width: 1200px)", () => {
gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.2
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.1
});
});
mm.add("(max-width: 1199px)", () => {  
	gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.35
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.2
});
	gsap.set('#oval', {
		  // y:20,
    // yPercent: -50

	})
  gsap.set('#dot, #square, #oval', {
    transformOrigin: "center center",
    scale: 0.45
  })
  gsap.set('footer p', {
        fontSize: "1em"
  })
	
});


mm.add("(max-width: 799px)", () => {  
//phone styles here
gsap.set('#oval', {
  // y:20,
  // yPercent: -20
})
})
mm.add("(max-width: 599px)", () => {  
		gsap.set('#oval', {
		//  y: 120,
    // yPercent: -50

	})
	
});

gsap.set('footer', {
  transformOrigin: "top center",
  fontSize: "1em"
})

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
/// end thermometer,




//change text
let i = -1;
function change() {
	i++;
 	if(i ==0) {
    gsap.to('header, footer', {
      autoAlpha: 1,
      duration: 2
    })
  } 
  document.getElementById('header').style.display='block';
  document.getElementById('pooter').style.display='block';
document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];
}

function unchange() {
  i--;
	document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];
if(i ==0 ) {
  gsap.to('header, footer', {
    autoAlpha: 0,
    duration: 2
  })
}
if(i ==0 ) {
   document.getElementById('header').style.display='none';
   document.getElementById('pooter').style.display='none';

  }
}

//pins
ScrollTrigger.create({
  trigger: "header",
 horizontal: true,
  start: "center center",
  end: ".chad",  
    endTrigger: ".chad",
	pin: true
});
ScrollTrigger.create({
  trigger: "footer",
 horizontal: true,
  start: "center center",
  end: ".chad",  
    endTrigger: ".chad",
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
  end: "#summary",  
    endTrigger: "#summary",
	pin: true,
	onEnter: change,
	onLeaveBack: unchange
});
//this is for summary:
ScrollTrigger.create({
  trigger: "#summary",
 horizontal: true,
  start: "center center",
  end: "#end_nav",  
    endTrigger: "#end_nav",
	pin: true
});
//this is for FAQ:
ScrollTrigger.create({
  trigger: "#end_nav",
 horizontal: true,
  start: "center center",
  end: "#cc",  
  endTrigger: "#cc",
	pin: true
});

ScrollTrigger.create({
  trigger: ".summary",
 horizontal: true,
  start: "center center",
  end: "#stopper",  
  endTrigger: "#stopper",
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