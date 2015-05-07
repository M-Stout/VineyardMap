var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.form').animate({
      right: "0"
    }, 200);

    $('body').animate({
      right: "40%"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.form').animate({
      right: "-40%"
    }, 200);

    $('body').animate({
      right: "40%"
    }, 200);
  });
};


$(document).ready(main);