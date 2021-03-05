  //section2
  jQuery(document).ready(function ($) {
  
    var tabContents = $('.tab-content div');
    var maxHeight = 0;
    
    tabContents.each(function(){
      var currentHeight = $(this).outerHeight();
      
      if (currentHeight > maxHeight){
        maxHeight = currentHeight;
      }
    })
    
    $('.tab-content').css('height', maxHeight);
  
  $('.tab-nav button').on('click', function(){
  
     var index = $(this).index();
    
      $('.tab-content div').removeClass('active');
    $('.tab-content div').eq(index).addClass('active');
    $('.tab-nav button').removeClass('active');
    $(this).addClass('active');
  });
    
      
  });

  // -------------------------------------------------------------------------------
