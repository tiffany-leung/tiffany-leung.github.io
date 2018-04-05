var elem = document.getElementById('spotlight'),
    canTouch = !!('ontouchstart' in window);
    var spotlight = document.querySelector('.spotlight');
    var isUserMotion = false;


if(canTouch){
  document.body.addEventListener('touchmove', onTouchStart, false);
  document.body.addEventListener('touchstart', onTouchStart, false);
}else{
  document.body.addEventListener('mousemove', onMouseMove, false);
}

function onTouchStart(e){
  var target = e.targetTouches[0];
  elem.style.backgroundImage  = '-webkit-radial-gradient(' + target.pageX + 'px ' + target.pageY + 'px, circle cover, rgba(6, 11, 51,0.2) 30px, rgba(6, 11, 51,1) 300px)';
}

function onMouseMove(e) {
    elem.style.backgroundImage  = '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle cover, rgba(6, 11, 51,0.2) 30px, rgba(6, 11, 51,1) 300px)';
}

function move(e) {
  if (e.clientX || e.touches) {
    isUserMotion = true;
    spotlight.style.setProperty('--x', (e.clientX || e.touches[0].clientX)+'px');
    spotlight.style.setProperty('--y', (e.clientY || e.touches[0].clientY)+'px');
  }
}


//text swap
document.querySelector(".line1").onclick = function () {
  document.querySelector(".line1").style.display = "none";
  document.querySelector(".line1.ii").style.display = "block";
}
document.querySelector(".line1.ii").onclick = function () {
  document.querySelector(".line1.ii").style.display = "none";
  document.querySelector(".line1").style.display = "block";
}

document.querySelector(".line2").onclick = function () {
  document.querySelector(".line2").style.display = "none";
  document.querySelector(".line2.ii").style.display = "block";
}
document.querySelector(".line2.ii").onclick = function () {
  document.querySelector(".line2.ii").style.display = "none";
  document.querySelector(".line2").style.display = "block";
}

document.querySelector(".line3").onclick = function () {
  document.querySelector(".line3").style.display = "none";
  document.querySelector(".line3.ii").style.display = "block";
}
document.querySelector(".line3.ii").onclick = function () {
  document.querySelector(".line3.ii").style.display = "none";
  document.querySelector(".line3").style.display = "block";
}

document.querySelector(".line4").onclick = function () {
  document.querySelector(".line4").style.display = "none";
  document.querySelector(".line4.ii").style.display = "block";
}
document.querySelector(".line4.ii").onclick = function () {
  document.querySelector(".line4.ii").style.display = "none";
  document.querySelector(".line4").style.display = "block";
}
