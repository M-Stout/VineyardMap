var main = function() {
  /*for right to left */
  /* Push the body and the nav over by 285px over */
  $('.right-menu').click(function() {
    $('.fromRight').animate({
      right: "0"
    }, 200);

    $('body').animate({
      right: "40%"
    }, 200);
  });

  /* Then push them back */
  $('.right-close').click(function() {
    $('.fromRight').animate({
      right: "-40%"
    }, 200);

    $('body').animate({
      right: "40%"
    }, 200);
  });
  
  /*for bottom up */
  /* Push the body and the nav over by 285px over */
  $('.bottom-menu').click(function() {
    $('.fromBottom').animate({
      bottom: "50%"
    }, 200);
  });

  /* Then push them back */
  $('.bottom-close').click(function() {
    $('.fromBottom').animate({
      bottom: "-100%"
    }, 200);

  });
};


$(document).ready(main);