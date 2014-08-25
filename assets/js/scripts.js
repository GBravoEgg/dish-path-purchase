$(function(){
  
  $('#fullpage').fullpage({
    paddingBottom: '66px',
    scrollingSpeed: 700,
    easing: 'swing',
    normalScrollElements: '#full-view',
    navigation: true,
    navigationTooltips: ['Switch', 'Resolve', 'Evaluation', 'Exploration', 'Preparation', 'Intro', 'Full View'],
    anchors: ['stage5', 'stage4', 'stage3', 'stage2', 'stage1', 'intro', 'full-view'],
        
    afterLoad: function(anchorLink, index){
    
      if(anchorLink == 'stage1'){
        $('.stage-1 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage2'){
        $('.stage-2 .triggers').addClass('fadeInUp animated');
      }
            
      if(anchorLink == 'stage3'){
        $('.stage-3 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage4'){
        $('.stage-4 .triggers').addClass('fadeInUp animated');
      }
      
      if(anchorLink == 'stage5'){
        $('.stage-5 .triggers').addClass('fadeInUp animated');
      }
    
    }
    
  });
  
  $('.slide-up-btn').click(function(){
    $.fn.fullpage.moveSectionUp();
  });
  
  
  segmentNav = function() {
    
    var navLink = $('.segment-nav a');
    
    navLink.on('click',function(e){
      e.preventDefault();
      var body = $('body');
      var segment = $('[data-segment]');
      var navLinkSegment = $(this).attr('data-segment');
      var segmentData = segment.attr('data-segment');
      
      if(navLinkSegment!='all') {
        segment.removeClass('fade-back');
        segment.not("[data-segment='" + navLinkSegment + "']").addClass('fade-back');
      }else{
        segment.removeClass('fade-back');
      }
      
      navLink.removeClass('active');
      $(this).addClass('active');

    });
    
  }

  waterDrops = function() {
  
    var $dropsContainter = $('.water-drops');
    var dropsHtml = "";
    
    console.log(posX);
    
    for (var i = 0; i < 5; i++) {
      var posX = Math.floor(Math.random() * (70 - 1) + 1);
      dropsHtml += '<div class="drop animated infinite" style="left: ' + posX + 'px"></div>';
    }
    
    $dropsContainter.html(dropsHtml);

  }
    
  segmentNav();
  waterDrops();
  
});