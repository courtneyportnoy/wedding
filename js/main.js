$(document).ready(function() {
   /* Parallax*/
   
   //global variable to determine if yogagirl animation has run once already
   var runOnce = false;
   var giftTop = $('.gift').offset().top;
   
   $(window).scroll(function(){ 
         
      var scrolled = $(window).scrollTop(); //position of scroll bar
      var totalHeight = $('body').height(); //total height
      var yogagirl1 = $('#yogagirl1');
      var yogagirl2 = $('#yogagirl2');
      var yogagirl3 = $('#yogagirl3');
      var yogagirl4 = $('#yogagirl4');
      var wine = $('#wine');
      var taxi = $('#taxi');
      var letter = $('#letter .textblock');
      
      parallaxScroll(scrolled);
      
      if(!runOnce && isScrolledIntoView(scrolled,yogagirl1)) {
         fadeImages(yogagirl1, yogagirl2,yogagirl3,yogagirl4);
      }
      if(isScrolledIntoView(scrolled,wine)) {
         drinkWine();
      }
      if(isScrolledIntoView(scrolled,taxi)) {
         driveTaxi(taxi);
      }
      if(isScrolledIntoView(scrolled,letter)) {
         letter.addClass('grow');
      }
   });
   
   function isScrolledIntoView(pos,elem) {
      var docViewTop = pos;
      var docViewBottom = docViewTop + $(window).height();    
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
   }
   
   function fadeImages(elem1, elem2,elem3,elem4) {
      runOnce = true;
      var first = elem1;
      var second = elem2;
      var third = elem3;
      var last = elem4;
      first.delay(1500).fadeOut('slow', function(e) {
         second.fadeIn('slow', function() {
            $(this).delay(400).fadeOut('slow');
          });
         third.delay(600).fadeIn('slow', function() {
            $(this).delay(800).fadeOut('slow');
         });
         last.delay(1600).fadeIn('slow');
      });    
   }
   
   function nextFrame(elem) {
      console.log("run once " + runOnce);
      runOnce = true;
      var next = elem.next();
      if(!next.length) return;
      elem.fadeTo(1000,0,function(e) {
         next.fadeIn('fast');
         elem = next;
         nextFrame(elem);
      });
   }
   
   function drinkWine() {
      var rect = $('.whiterect');
      rect.addClass('drink');
   }
   
   function driveTaxi(elem) {    
      elem.addClass('drive');
   }
   
   function parallaxScroll(var1){
      var scrolled = var1;
      $('#cloud1').css('top',(0+(scrolled*.25))+'px');
      $('#cloud2').css('top',(400-(scrolled*.5))+'px');
      $('#cloud3').css('top',(-100+(scrolled*.15))+'px');
      $('#cloud4').css('top',(200-(scrolled*.35))+'px');
      $('#cloud6').css('top',(700-(scrolled*.25))+'px');
      $('#cloud7').css('top',(1200-(scrolled*.5))+'px');
      $('.sun').css('top',(-300+(scrolled*.125))+'px');
      $('#seagull1').css('top',(200-(scrolled*.15))+'px');
      $('#seagull2').css('top',(100-(scrolled*.25))+'px');
      $('#seagull3').css('top',(100-(scrolled*1.1))+'px');
      $('#seagull4').css('top',(100+(scrolled*.05))+'px');
      $('#seagull5').css('top',(0-(scrolled*.25))+'px');
      $('#seagull6').css('top',(0-(scrolled*.65))+'px');
      $('#seagull7').css('top',(0+(scrolled*.06))+'px');
      $('#seagull8').css('top',(200-(scrolled*.05))+'px');
      //$('.present .textblock').css('top',(0-(scrolled*.25))+'px');
      $('.gift').css('top',(giftTop-(scrolled*.7))+'px');
  }
});
