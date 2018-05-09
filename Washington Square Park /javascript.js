element.addEventListener("click", myFunction)

function myFunction() {
    var Popuplink = document.getElementById("myPopup");
    Popuplink.classList.toggle("show");
}


var Podcast1938 = new Audio();
  Podcast1938.src = "Mackenzie.mp3";
function Play1938(){
  Podcast1938.play();
}
function Pause1938(){
	Podcast1938.pause();
}

function onSuccess(position) {
  console.log(position)
}

if (pos.coords.latitude > 40.726471 && pos.coords.latitude < 40.726775 && pos.coords.longitude < -73.977795 && pos.coords.longitude > -73.9783193) {
    document.getElementById("txt1938").style.Color = "red"
} else {
    document.getElementById("txt1938").style.Color = "white"
}
