
var tribes = "Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Joseph, Benjamin"

console.log(tribes)


var tribesArray = tribes.split(",")
console.log(tribesArray)


var container = document.querySelector(".tribes ul")


tribesArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " is in position " + itsIndex)
})


tribesArray.forEach(make_a_list);


function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = theElement

	container.appendChild(listItem)
}


var tribenames = document.querySelectorAll(".tribes ul li")
console.log(tribenames)



