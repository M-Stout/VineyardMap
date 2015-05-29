
  var now = new Date();
  var hours = now.getUTCHours();

  //Keep in code - Written by Computerhope.com
  //Place this script in your HTML heading section

  document.write('The time is now: ', hours, ' o&rsquo;clock', '<br><br>');
  document.bgColor="#CC9900";

  //18-19 night
  if (hours > 17 && hours < 20){
    $( "body" ).animate({
      "background-color": "#ffd27f",
    }, 5000);
    document.write('Good Afternoon from space!')
  }
  //20-21 night
  else if (hours > 19 && hours < 22){
    $( "body" ).animate({
      "background-color": "#ffb499",
    }, 5000);
    document.write('Good Evening from space!')
  }
  //22-4 night
  else if (hours > 21 || hours < 5){
    $( "body" ).animate({
      "background-color": "##48648C",
    }, 5000);
    document.write('Can&rsquo;t talk right now I&rsquo;m asleep, in space!')
  }
  //9-17 day
  else if (hours > 8 && hours < 18){
    $( "body" ).animate({
      "background-color": "#ffd27f",
    }, 5000);
    document.write('Can&rsquo;t talk right now I&rsquo;m at work, in space!')
  }
  //7-8 day
  else if (hours > 6 && hours < 9){
    $( "body" ).animate({
      "background-color": "#c3e6f5",
    }, 5000);  
    document.write('Good Morning from space!');
  }
  //5-6 day
  else if (hours > 4 && hours < 7){
    $( "body" ).animate({
      "background-color": "#a2c0d9",
    }, 5000);
    document.write('It&rsquo;s a bit early to be up, in space!')
  }
  else {
    $( "body" ).animate({
      "background-color": "#d8d8d8",
    }, 5000);
    document.write('Oh no the universe&rsquo;s watch is broken again, better start working on it.')
  }
