// when a click happens
window.addEventListener("click", onWindowClick)
function onWindowClick (evt) {
  // figure out where to put the bike
    console.log(evt.x, evt.y)
  // set the top and left CSS of the bike
    var myCar = document.getElementById("car")
    myCar.style.top = evt.y + "px"
    myCar.style.left = evt.x + "px"
}

//other listeners
//window.addEventListener("scroll")
//window.addEventListener("keypress")
