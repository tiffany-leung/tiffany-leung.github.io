var elem = document.getElementById('spotlight'),
    canTouch = !!('ontouchstart' in window);


if(canTouch){
  document.body.addEventListener('touchmove', onTouchStart, false);
  document.body.addEventListener('touchstart', onTouchStart, false);
}else{
  document.body.addEventListener('mousemove', onMouseMove, false);
}

function onTouchStart(e){
  var target = e.targetTouches[0];
  elem.style.backgroundImage  = '-webkit-radial-gradient(' + target.pageX + 'px ' + target.pageY + 'px, circle cover, rgba(6, 11, 51,0.2) 30px, rgba(6, 11, 51,1) 400px)';
}

function onMouseMove(e) {
    elem.style.backgroundImage  = '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle cover, rgba(6, 11, 51,0.2) 30px, rgba(6, 11, 51,1) 400px)';
}

document.querySelector(".line1").onclick = function () {
  document.querySelector(".line1").style.display = "none";
  document.querySelector(".line1.ii").style.display = "block";
}
