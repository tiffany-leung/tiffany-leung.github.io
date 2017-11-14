
var namestring = "Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Joseph, Benjamin"

console.log(namestring)

var exampleArray = [1, 2, 3, 5, "hi", null, true]

console.log(exampleArray)
console.log(exampleArray.toString() )

var nameArray = namestring.split(",")
console.log(nameArray)


var container = document.querySelector(".output ul")
console.log (container)

// for(var i = 0; i < nameArray.length; i++) {
// 	console.log(nameArray[i])
// }

nameArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " is in position " + itsIndex)
})


nameArray.forEach(make_a_list);


function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = el 

	container.appendChild(listItem)
}


var names = document.querySelectorAll(".output ul li")
console.log(names)


names.forEach(changeBackground)

function changeBackground(el) {
	el.style.backgroundColor = "rgba(0,0,0,0)";
}