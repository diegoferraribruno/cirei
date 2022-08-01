//list of links

let links = new Array ();

function myFunction(el,value) {
links = ["https://www.youtube.com/embed/qGpwGhPrkc4"]
links.push(value)
let x = document.getElementById(el);
if (x.style.display === "none") {
  x.style.display = "block";

  //loop through all the link which are in the list
  for(i = 0 ; i < links.length ; i++){
  let ifrm = document.createElement('iframe');
  ifrm.setAttribute('id', "ifrm"+i ); // assign an id

  // assign url
  ifrm.setAttribute('src', links[i]);
  ifrm.setAttribute('width', '560');
  ifrm.setAttribute('height', '300');
  // Append the iframe to the div
  document.getElementById("kataguruma").appendChild(ifrm);
  }

} else {
  x.style.display = "none";
  // remove all the iframes in the div when the button is pressed again
  let node = document.getElementById('kataguruma');
  node.innerHTML = "";
}
}
/*window.addEventListener(
  "keydown",
  (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        e.code
      )
    ) {
      e.preventDefault();
    }
  },
  false
);*/
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
