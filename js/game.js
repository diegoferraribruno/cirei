doElsCollide = function(el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
    /*if (el1.offsetBottom > el2.offsetBottom){
        el1.style.zIndex = 1;
        el2.style.zIndex = 0;
    };
    if (el1.offsetBottom < el2.offsetBottom){
        el1.style.zIndex = 0;
        el2.style.zIndex = 1;
    };*/
    return !((el1.offsetBottom < el2.offsetTop) ||
             (el1.offsetTop > el2.offsetBottom) ||
             (el1.offsetRight < el2.offsetLeft) ||
             (el1.offsetLeft > el2.offsetRight))

};
mudaCara(quem){
    document.getElementById('head2').src='https://diegoferraribruno.github.io/cirei/images/daciolo48.png'
}