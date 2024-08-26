document.addEventListener("DOMContentLoaded", function(event) { 
 
  const landscape = window.matchMedia("(orientation: landscape)").matches;
 
  // MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

    
window.onbeforeunload = function() {
  history.scrollRestoration = "manual";
  // scroll to top on refresh  
  window.scrollTo(0,0);   
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
document.body.scrollTop = 0; // For Safari

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
  var top =	 window.pageYOffset || document.documentElement.scrollTop;
  if (top > 500) {
    document.getElementById('myModal').style.display = "none";
    localStorage.setItem("modalshown", "0")
  } else {
    //document.getElementById('nav').style.background = "yellow";
  }
  };
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


const myTimeout = setTimeout(fade, 1);

function fade() {
  document.getElementById('svg').style.visibility = "visible";
}

gsap.set('#svg path', {
	autoAlpha:0,
	scaleX:0,
	scaleY:0
});


let fader = new gsap.timeline({delay:4});

fader.timeScale(5); 

fader.to('#svg path', {
		autoAlpha:1,
	scaleX:"100%",
	scaleY:"100%",

	stagger: .01
	
})

// gsap.to('nav', {
//   autoAlpha:1,
//   delay: 2,
//   duration: 2
// });


 var titles = [
 
`<p class='title'>A green burial involves burying an unembalmed body directly into the earth in a shroud or casket made of natural, biodegradable materials that won't harm the earth. </p>`,
 
`<p class='title'>Unlike standard casketed burials, a green burial avoids embalming, vaults, tombstones, and caskets made from metals and synthetic materials.</p>`,

`<p class='title'>Green burial <strong>does not</strong> require a vault or headstone.</p>`,


`<p>Since the body and casket are completely biodegradeable, you become a part of the surrounding Earth.</p> `,

`<p>Green burial is roughly the same cost as a traditional burial.
</p> `,
  
`<p class='title'>

This is the<em> most</em> environmentally friendly way to be interred.</p>` ,  
`<p class='title'> 

An appeal of green burial is the direct involvement of family and friends of the deceased.</p>` ,
  
`<p class='title'>

There are no prominent religious objections to green burial.</p> `,
    
`<p class='title'> 

There are only a few hundred green cemeteries in America.</p> `

// `<p class='title'>Consider your other options:</p> `

];

var texty = [

`<p>This is how people have been buried throughout human history; allowing the body to return to the earth so it can become part of nature. This method of burial remains an important part of funerary ritual for people of Muslim and Jewish faiths.</p> `,

`<p>Instead, a body can be shrouded, or a casket made from eco-friendly materials like wicker, cardboard, bamboo, or willow can be used. 
</p> `,

'<p>Green or conservation cemeteries (green burial grounds that are protected by a land conservation trust) do not use tombstones or other monuments, in order to allow surrounding nature and wildlife to thrive. These spaces honor nature while acknowledging our place in it as human beings. </p>',
// `so green cemeteries look more like a lush forest than a traditional graveyard, with its neat, orderly rows of graves.</p>


`<p>If you visit a green cemetery, you will be overwhelmed by how lush the growth is.</p> `,


`<ul>

<li>There are no fees for embalming or vaults,</li>

<li>There are no cemetery costs or hidden fees.</li>
<li>Just cost of the casket, a funeral director and the cemetery.</li>


</ul> 
<p>Rating: <span class="dot">&#9733;&#9733;&#9733;  &#9734;&#9734;</span></p>`,

`<p class='endnote'>
Only completely biodegradeable material is allowed to be buried.</p>
<p>No embalming, no vault of grave liner, no emissions.</p>

<p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,



`<p>There are numerous customizations allowed, such as personalizing the casket.</p>

<p>Rating:<span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,

`<p class='endnote'>Strict Islam and Judaism actually <em>require</em> a 'green' burial.</p>
<p>Rating: <span class="dot">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>`,


`<p>So unlike tradiational burial or cremation, green burial <em>requires advance planning.</em></p>
<p>Rating: <span class="dot">&#9733;&#9733;&#9734;&#9734;&#9734;</span></p>`



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
      // fadeVaultIn();
    }

    
   function two() {
        document.getElementById('title').innerHTML = titles[2];
        document.getElementById('text').innerHTML = texty[2];  
            //  fadeVaultOut();

    }

   function three() {
        document.getElementById('title').innerHTML = titles[3];
        document.getElementById('text').innerHTML = texty[3];   
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
 
      // document.getElementById('fade').style.display =  "none";
      // document.getElementById('coffin').style.display =  "none";
      gsap.to('#coffin', { autoAlpha: 0});
      gsap.to('#fade', { autoAlpha: 0});

    }



//  gsap.set('.arrow', {rotation: 180})
//  gsap.set('#arrowBox', {opacity: 0})
gsap.set('#coffinFront', {scale: 0.3})
gsap.set('#coffinBack', {scale: 0.3})
gsap.set('#fade', {scale: 0.3})


let mmx = gsap.matchMedia();

mmx.add("(max-width: 1200px)", () => {
  gsap.set('#fade', {scale: 0.5})
  gsap.set('#coffinFront', {scale: 0.5})
  gsap.set('#coffinBack', {scale: 0.5})

});

mmx.add("(max-width: 799px)", () => {
  gsap.set('#fade', {scale: 0.9})
  gsap.set('#coffinFront', {scale: 0.9})
  gsap.set('#coffinBack', {scale: 0.9})

});

// gsap.set('#vaultFront', {scale: 1.15})
// gsap.set('#vaultBack', {scale: 1.15, top: -30})
gsap.set('#globe', {scale: 0.5})

gsap.to('#arrowBox', {autoAlpha:1,
                     delay: 4
                     })
gsap.to('.arrow', {
	y: 10, 
	scaleX: 1.2,
	yoyo:true, 
  duration: 1.5,
	repeat: -1

})

let erf_fade = new gsap.timeline();
    
    erf_fade.to('#globe path', {
    autoAlpha: 0
});
	
erf_fade.pause();

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
  end: '.chacha',
  endTrigger: ".chacha",
  pin: true,
  pinSpacing: false,
   onEnter: zero,
    onLeaveBack: zero,
  //  toggleActions: "restart pause resume pause"
    
});

  
ScrollTrigger.create({
  trigger: "#text",
  start: "center 80%",
  end: '.chacha',
  endTrigger: ".chacha",

  pin: true,
  pinSpacing: false,
    
//     onEnter: zero(),
  onLeaveBack: zero

});

let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
  // desktop setup code here...
    ScrollTrigger.create({
  trigger: "#fade",
  start: "center center",
  endTrigger: "#end",
  end: "#end",
  pin: true,
  pinSpacing: false,
     onLeaveBack: zero
      //  toggleActions: "restart pause resume pause"
});
});

mm.add("(max-width: 1199px)", () => {
  // mobile setup code here...
    
ScrollTrigger.create({
  trigger: "#fade",
  start: "center center",
  endTrigger: "#end",
  pin: true,
  pinSpacing: false,
    //toggleActions: "restart pause resume pause"
    onLeaveBack: zero
});
});


ScrollTrigger.create({
  trigger: "#coffinFront",
  start: "center center",
    //+=yPercent",
  endTrigger: "#end",
end: "#end",
  pin: true,
  pinSpacing: false, 
onEnter: one,
  onLeaveBack: zero,
});

ScrollTrigger.create({
  trigger: "#coffinBack",
  start: "center center",
    //+=yPercent",
  endTrigger: "#end",
end: "#end",
  pin: true,
  pinSpacing: false, 
onEnter: one,
   onLeaveBack: zero
});




  let mm3 = gsap.matchMedia();

  mm3.add("(min-width: 1200px)", () => {  
    ScrollTrigger.create({
      trigger: "#grass",
      start: "center 18%",
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
    mm3.add("(max-width: 1199px)", () => {  
      ScrollTrigger.create({
        trigger: "#grass",
        start: "center 18%",
        endTrigger: "#end",
        pin: true,
        pinSpacing: false,
          onEnter: three,
         // toggleActions: "restart pause resume pause"
         onLeaveBack: three ,
        //  animation: flower
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
  endTrigger: ".chacha",
    end: ".chacha",
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
    onEnter: nine,
    onLeaveBack: nine
    //toggleActions: "restart pause resume pause"
});


ScrollTrigger.create({
  trigger: ".summary",
  start: "top 26%",
  endTrigger: "#end",
     end: "#end",
  pin: true,
  pinSpacing: false,
    // onEnter: nine,
    // onLeaveBack: nine
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