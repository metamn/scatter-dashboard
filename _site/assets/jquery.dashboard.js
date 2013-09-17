$(document).ready(function() {
  
  // Navigate inside a section
  $('section nav li').click(function() {
    var index = $(this).index() + 2;
    
    var slide = $('article:nth-child(' + index + ')');
    $("html, body").animate({ scrollTop: slide.offset().top }, "slow");
    
    $('section nav li').removeClass('active');
    $(this).addClass('active');
    
    return false;
  });
  
  
  // Hide / show dashboard
  $('#header #arrows span').click(function() {
    $(' #header').toggleClass('hide', 700, "easeOutSine");
    $('main').toggleClass('expand', 700, "easeOutSine");
    
    $(this).removeClass('active');
    ($(this).index() == 0) ? $(this).next().addClass('active') : $(this).prev().addClass('active');
  });


});
