$.fn.fullpage.scrollDefault = function(section, slide){
    if(typeof slide != 'undefined'){
      var slides = section.find('.slides');
      var destiny =  slides.find('[data-anchor="'+slide+'"]');
  
      if(!destiny.length){
        destiny = slides.find('.slide').eq(slide);
      }
  
      if(destiny.length){
        landscapeScroll(slides, destiny);
      }
    }
  };