$(document).ready(function() {
  
  // Hide / show dashboard
  $('.dashboard #header #arrows span').click(function() {
    $('.dashboard #header').toggleClass('hide', 700, "easeOutSine");
    $('.dashboard main').toggleClass('expand', 700, "easeOutSine");
    
    $(this).removeClass('active');
    ($(this).index() == 0) ? $(this).next().addClass('active') : $(this).prev().addClass('active');
  });


});
