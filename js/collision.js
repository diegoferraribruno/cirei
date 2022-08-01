doElsCollide = function(el1, el2) {
    el1 = document.getElementById("player1");
    el2 = document.getElementById("player2");
    var rect1 = {x: parseInt(el1.style.left,10), y: parseInt(el1.style.top,10), width:parseInt(el1.style.Width,10), height:parseInt(el1.style.Height,10) };
    var rect2 = {x: parseInt(el2.style.left,10), y: parseInt(el2.style.top,10), width:parseInt(el2.style.Width,10), height:parseInt(el2.style.Height,10) };
    
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y)
        {
            window.alert("colidiu!");
        }
        else {
            window.alert("p1 "+rect1.y + " largu "+rect1.width+" p2 "+rect2.y+" p2largura "+ rect2.width);
        //no collision
    }
};