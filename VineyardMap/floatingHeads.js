var images = ['winebarrelrocketpixelly.png', 'scifri swadloon.png', 'sciencefriction.png', 'salamandersoul.png']



$(document).ready(function() {

    setInterval(floatBy, 10000);

});

function floatBy () {

  $("#floatingHead").attr("src","images/" + images[Math.floor(Math.random() * images.length)]);
  $( "#floatingHead" ).css({
    'right': "-10%",
    'top': Math.random() * 80 + 10 +'%',
  });    
  
  
  $( "#floatingHead" ).animate({
    right: "105%",
    transform: 'rotate(160deg)'
  }, 5000, function() {
   // Animation Complete
    $( "#floatingHead" ).css({
      'right': "-10%",
      'top': Math.random() * 80 + 10 +'%',
      transform: 'rotate(0deg)'
    
    });    
  });
  

}