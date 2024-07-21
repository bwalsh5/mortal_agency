new fullpage('#fullpage', {
   // anchors: ['traditional', 'cremation', 'green', 'aqumation', 'donation'],
  //   menu: '#menu',
  licenseKey: "B80L9-WCO9J-7K117-18AJK-VEQXP",
  responsiveHeight: 410,
  fitToSection: true,
  keyboardScrolling: true,
  verticalCentered: true,
  lazyLoading: true,
  loopHorizontal: false,
  navigation: true,
  slidesNavigation: true,
  paddingTop: 60
})

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