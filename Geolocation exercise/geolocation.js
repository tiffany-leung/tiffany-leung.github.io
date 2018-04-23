function onSuccess(position) {

  console.log(position)

  var img= new Image ();

  // img.src="https://maps.googleapis.com/maps/api/staticmap?center=" +
  // position.coords.latitude + "," + position.coords.longitude +
  // "&zoom=18&size=300x300&sensor=false";
  //
  // document.body.appendChild(img);
  // If latitude is above 0, Northern Hemisphere
  //Otherwise, Southern Hemisphere

  // if (position.coords.latitude > 0) {
  //   console.log("northern")
  // }
  // else {
  //   console.log("southern")
  // }
var x1 = position.coords.longitude
var y1 = position.coords.latitude

var x2 =  -73.98168414831161
var y2 = 40.72643147684234

var a = x1 - x2;
var b = y1 - y2;

var c = Math.sqrt(a*a + b*b);

var hello = document.getElementById("hello")
hello.style.opacity = c
console.log(c)

// 0.005 ---------- 0 GPS Distance
//     0 ---------- 1 Opacity

//x = output
//y = input
//OPACITY
xMax = 1;
xMin = 0;

yMax = 0;
yMin = 0.0005;

percent = (c - yMin) / (yMax - yMin) ;
var outputX = percent * (xMax - xMin) + xMin;

console.log(outputX)
hello.style.opacity = outputX

}

function onFailure() {
  console.log('not working')
}

navigator.geolocation.getCurrentPosition(onSuccess,onFailure)
