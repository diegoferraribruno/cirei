var player = document.getElementById("player2");
var corpo = document.getElementById("corpo2");
var x = 48;
var y = 0;
var speed = 20;
var frame = 0;
var dirx = 0;
var diry = 0;

//la vem o input
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    diry -= 1 // up arrow
    corpo.style.backgroundImage = "url('/images/anda.png')";
  }
  if (e.keyCode == '40') {
    diry += 1  // down arrow
    corpo.style.backgroundImage = "url('/images/anda.png')";

  }
  if (e.keyCode == '37') {
    dirx -= 1 // left arrow
    corpo.style.backgroundImage = "url('/images/anda.png')";
  }
  if (e.keyCode == '39') {
    dirx += 1// right arrow
    corpo.style.backgroundImage = "url('/images/andaR.png')";
  }
  if (dirx > 1){dirx=1}
  if (dirx < -1){dirx=-1}
  if (diry > 1){diry=1}
  if (diry < -1){diry=-1}
}
document.addEventListener('keyup', (event)=> {
  //alert(event.keyCode);
  switch(event.keyCode){
    case 37:
    if (dirx < 0) {
      dirx = 0;
      corpo.style.backgroundImage = "url('/images/funk.png')";
      break;
    }
      case 39:
      if (dirx > 0) {
        dirx = 0;
        corpo.style.backgroundImage = "url('/images/danca.png')";
        break;
      }
      case 38:
      if (diry < 0) {
        corpo.style.backgroundImage = "url('/images/danca.png')";
        diry = 0;
        break;
      }
      case 40:
      if (diry > 0) {
        corpo.style.backgroundImage = "url('/images/funk.png')";
        diry = 0;
        break;
      }
    }
  });
//moving
setInterval(function(){
    player.style.left = x+ "px";
    player.style.top = y +"px";
    x = x + dirx*speed
    y = y + diry*speed
  if (x > 3000){
      x = 3000
    };
    if (x < 0){
      x = 0
    };
  if (y > 2000){
      y = 2000
    };
    if (y < 0)
      {
        y = 0
    };
     },
20); // 20ms = 50 frames per second
//ANIMATION
setInterval(function(){
    var position = frame*32;
    //corpo.style.background: 'url("standing-32.png") '${position}'px 0px';
    corpo.style.backgroundPosition = `-${position}px 0px`;
    frame++;
    frame = frame
    if (frame > 3) {
      frame = 0
    }
    },
120);
