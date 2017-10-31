function firstclick() {
    var person = prompt("What's your name?", "Name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Welcome " + person + ". Now find the link. (hover to the right to find the link)";
    }
}





