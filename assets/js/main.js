$(function () {
  var $window = $(window);

  //parallax
  $('section[data-type="background"]').each(function() {

    var $bgobj = $(this); //assigning obj
    $($window).scroll(function(){

    var yPos = -($window.scrollTop()/ $bgobj.data('speed'));

    var cords = '50% '+ yPos + 'px';

    //move the background position
    $bgobj.css({backgroundPosition: cords});
    });

  });

});
