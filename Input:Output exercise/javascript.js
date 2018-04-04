window.addEventListener("click", windowChangeWidth)

function windowChangeWidth() {
  if (window.innerWidth > 710) {
    document.getElementById("adj").innerHTML = "this is wide"
  }
  else {
    document.getElementById("adj").innerHTML = "it's pretty narrow"
  }
}

window.addEventListener("click", windowChangeHeight)

function windowChangeHeight() {
  if (window.innerHeight > 450) {
    document.getElementById("adj2").innerHTML = "It's long"
  }
  else {
    document.getElementById("adj2").innerHTML = "look it's short"
  }
}
