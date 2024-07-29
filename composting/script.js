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


   // END VIZ


gsap.registerPlugin(ScrollTrigger);

gsap.set('#oval', {
	visibility: "visible"
})
      gsap.set('#svg path, header, footer, #cremator', {
	autoAlpha:0,
})  


//NOTE: cremation has (had) BLANKS at teh front of texty and titles. so fix that. 
var titles = [
 
  `<p class='title'>Human Composting, aka Natural Organic Reduction is a process that transforms the body into soil that 
  can support new life.</p>`,
   
  
  `<p class='title'>The person's body is placed in an enclosed vessel with natural materials like wood chips and straw.</p>`,
  
  `<p class='title'>Over the next 5-8 weeks microbes break it down resulting in about one cubic yard of soil. </p>`,
  `<p class='title'>The cost ranges from $5-7,000. More than most Cremations, less than most Standard Burials.</p>`,
  `<p class='title'>Along with Home Burial, Human Composting is the most environmentally sound interment option.</p>`,  
  
  `<p class='title'>Friends and family of the deceased may be present for the vessel entry and may contribute keepsakes.</p>` ,
    
  `<p class='title'>Other than Orthodox Judaism and Islam, religions are mostly willing to embrace this new technology.</p> `,
      
  `<p class='title'> 
  This is an accepted form of disposition within the funeral industry, and composting facilities operate as licensed funeral homes.</p>`
  
  ];
  
  var texty = [
  
  `<p>While natural decomposition of human corpses into soil is a long-standing practice, a more rapid decomposition process was developed in the early 21st century.</p> `,
  
  `<p>The soil is removed from the vessel as it undergoes a curing process that takes several weeks. </p>`,
  
  `<p>Soil is returned to the family for scattering, used to plant a tree or flower/native plant garden, or donated to a land conservation project. </p> `,
  
 
  `<p class='endnote'>But there are no fees for embalming, caskets, or grave upkeep.</p>
  <p>Rating: <span class="dot">&#9733;&#9733;&#9733;  &#9734;&#9734;</span></p>`,
  
  `<p class='endnote'>No CO<sub>2</sub> emissions like Cremation, no carcinogens, rare woods or heavy metals, like Standard Burial.</p>
  <p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,
  
  `<p>Most people choosing this method are stating that they prefer it because it is a more meaningful process that allows for ritual and family involvement, primarily in the distribution of the fresh soil.</p>
  <p>Rating:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,
  
  `<p class='endnote'>Some Christians embrace composting as a 'direct fulfillment' of the Biblical declaration that <span class='italic'>we are dust and to dust we shall return</span> (Genesis 3:19), whereas the Catholic Church in the U.S. asserts that the process is a desecration of human remains.</p>
  <p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9734;&#9734;</span></p>`,
  
  `<p>As of June 2024, twelve states have legalized the process - five states in 2024 alone. Roughly ten more states have bills in process. </p>
  <p>Rating: <span class="dot">&#9733;&#9733;&#9734;&#9734;&#9734;</span></p>`
  
  ];
  



document.getElementById('header').innerHTML = titles[0];
document.getElementById('pooter').innerHTML = texty[0];



gsap.set('#arrowBox', {
	y: "-20vh" 
})

// gsap.set('#svg', {
// 	scale: 0.8
// })

let fader = new gsap.timeline({delay:4});

fader.timeScale(28); 

fader.to('#svg path', {
		autoAlpha:1,
	stagger: .01
})

// fader.pause();

// if(localStorage.getItem())

let mm = gsap.matchMedia();
    
mm.add("(min-width: 800px)", () => {
gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.2
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.1
});
});
mm.add("(max-width: 799px)", () => {  
	gsap.set('#money svg, #env svg, #rel svg', {
	// scale: 0.35
});
gsap.set('#fam svg, #globe svg', {
	// scale: 0.2
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

//change text
let i = 0;
function change() {

 	if(i == 0) {
    gsap.to('header, footer', {
      autoAlpha: 1,
      duration: 2
    })
  } 
document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];
i++;
}

function unchange() {
	i--;
document.getElementById('header').innerHTML = titles[i];
document.getElementById('pooter').innerHTML = texty[i];

if(i == 0) {
  gsap.to('header, footer', {
    autoAlpha: 0,
    duration: 2
  })
} 

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
  start: "center 94%",
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
	pin: true,

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