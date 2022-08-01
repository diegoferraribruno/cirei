let player1 = document.getElementById("player2");
let player2 = document.getElementById("player1");
var player = player1;
let corpo = document.getElementById("corpo1");
let cabeca = document.getElementById("c");
let x = 20;
let y = 20;
let speed = 8;
let frame = 0;
let dirx = 0;
let diry = 0;

let segue = 1;
let target = "#player1";

function animateScript(){
  $('rhand').append('<img src="/images/1f34c.png" class="color">');
}

//la vem o input

document.onkeydown = checkKey;
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

//moving
setInterval(function(){

    var reverse = 1
    /// limites da tela
  if (x > 3800){
      x = 3800;
    };
    if (x < 0){
      x = 0;
    };
  if (y > 2072){
      y = 2072;
    };
    if (y < 0)
      {
        y = 0;
    };
    ///Camera segue o player com suavidade
    if (segue != 0){
      let x1 = x-500;
      let y1 = y-300;
      let wx = window.scrollX;
      let wy = window.scrollY;
      let tx = wx+(x1-wx)*0.02;
      let ty = wy+(y1-wy)*0.02;
      window.scrollTo(tx, ty);
    }
    //colisoes
    if (doElsCollide(player1, player2))
    {
      reverse = -1.2;
    }
    else{
    reverse = 1;
    }
    player.style.left = x+ "px";
    player.style.top = y +"px";
    x = (x + dirx*speed*reverse);
    y = (y + diry*speed*reverse);
    
/* Tentando fazer o ysort
    const list = document.getElementsByClassName("casa");
    for (i in list) {
    doElsCollide(player1,list[i])
//    list[i].style.borderColor = "#222";
    }*/
  },
20); // 20ms = 50 frames per second

//ANIMATION
setInterval(function(){
    let position = frame*32;
    //corpo.style.background: 'url("standing-32.png") '${position}'px 0px';
    corpo.style.backgroundPosition = `-${position}px 0px`;
    frame++;
    if (frame > 3) {
      frame = 0
    }
    },
120);

//CAMERA

function seguecam(a){
  segue = a;
  if (segue != 0){
    disableScroll()
    let name = "player"
    player = document.getElementById(name.concat(a))
    x = parseInt(player.style.left, 10)
    y = parseInt(player.style.top,10)
    console.log(player,x,y);
    target = "#"+player;
  }else{
    enableScroll()
  }



  //let x1 = player.style.left;
  //let y1 = player.style.top;
  //x = parseInt(x1,10);
  //y = parseInt(y1,10);
}
