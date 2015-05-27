var images = ['winebarrelrocketpixelly.png', 'scifri swadloon.png', 'sciencefriction.png', 'sciencefriction.png', 'salamandersoul.png', 'dappercoat.png', 'pichu.png']
var audios = ['rocket', 'swadloon', 'sciencegold', 'sciencebible', 'salamander', 'dapperdankmemes', 'pichuwaffles']


$(document).ready(function() {
  
    $( "#floatingHead" ).css({
      'right': "-10%",
      'top': Math.random() * 80 + 10 +'%',
      transform: 'rotate(0deg)'
    });
    
    var randomIndex = Math.floor(Math.random() * images.length);
    $("#floatingHead").attr("src","images/" + images[randomIndex]);
    $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");

    setInterval(floatBy, 10000);

});

function floatBy () {
  
  $("#floatingVoice")[0].play();
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
    
    var randomIndex = Math.floor(Math.random() * images.length);
    $("#floatingHead").attr("src","images/" + images[randomIndex]);
    $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");
  });
  

}