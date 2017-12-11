// Box1.html
function coinsFunction() {
    var popup = document.getElementById("CoinsPopup");
    popup.classList.toggle("show");
}
function HKFunction() {
    var popuphk = document.getElementById("PopupHK");
    popuphk.classList.toggle("show");
}
function USFunction() {
    var popupUS = document.getElementById("PopupUS");
    popupUS.classList.toggle("show");
}
// Singapore_page.html
var myAudio2 = new Audio()
myAudio2.src = "MRT.mp3"
function PlaySound2() {
	myAudio2.play();
}
var myAudio3 = new Audio()
myAudio3.src = "SG_Sounds.mp3"
function PlaySound3() {
	myAudio3.play();
}
function PauseSound3() {
	myAudio3.pause();
}
function myFunction2() {
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show2");
}
function myFunction3() {
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show3");
}

// UWCSEA_page.html
function myFunction4() {
    var popup4 = document.getElementById("myPopup4");
    popup4.classList.toggle("show4");
}
function myFunction5() {
    var popup5 = document.getElementById("myPopup5");
    popup5.classList.toggle("show5");
}
function myFunction6() {
    var popup6 = document.getElementById("myPopup6");
    popup6.classList.toggle("show6");
}

// StAnthony.html
var myAudio4 = new Audio()
myAudio4.src = "SchoolSong.mp3"
function PlaySound4() {
	myAudio4.play();
}
function PauseSound4() {
	myAudio4.pause();
}

// SSIS_page.html
function myFunction7() {
    var popup7 = document.getElementById("myPopup7");
    popup7.classList.toggle("show7");
}
function myFunction8() {
    var popup8 = document.getElementById("myPopup8");
    popup8.classList.toggle("show8");
}
function myFunction9() {
    var popup9 = document.getElementById("myPopup9");
    popup9.classList.toggle("show9");
}

// Shanghai_page.html
function myFunction10() {
    var popup10 = document.getElementById("myPopup10")
    popup10.classList.toggle("show10");
}
function myFunction11() {
    var popup11 = document.getElementById("myPopup11");
    popup11.classList.toggle("show11");
}
function myFunction12() {
    var popup12 = document.getElementById("myPopup12");
    popup12.classList.toggle("show12");
}

//St.Anthony.html
function myFunction13() {
    var popup13 = document.getElementById("myPopup13")
    popup13.classList.toggle("show13");
}
function myFunction14() {
    var popup14 = document.getElementById("myPopup14");
    popup14.classList.toggle("show14");
}
function myFunction15() {
    var popup15 = document.getElementById("myPopup15");
    popup15.classList.toggle("show15");
}
function myFunction16() {
    var popup16 = document.getElementById("myPopup16")
    popup16.classList.toggle("show16");
}
function myFunction17() {
    var popup17 = document.getElementById("myPopup17")
    popup17.classList.toggle("show17");
}

//UWC_uniform.html
function uwcFunction() {
    var uwcpopup = document.getElementById("myPopupuwc")
    uwcpopup.classList.toggle("uwcshow");
}
function uwcFunction2() {
    var uwcpopup2 = document.getElementById("myPopupuwc2")
    uwcpopup2.classList.toggle("uwcshow2");
}
function uwcFunction3() {
    var uwcpopup3 = document.getElementById("myPopupuwc3")
    uwcpopup3.classList.toggle("uwcshow3");
}
function uwcFunction4() {
    var uwcpopup4 = document.getElementById("myPopupuwc4")
    uwcpopup4.classList.toggle("uwcshow4");
}
function uwcFunction5() {
    var uwcpopup5 = document.getElementById("myPopupuwc5")
    uwcpopup5.classList.toggle("uwcshow5");
}

//SSIS_uniform.html
function ssisFunction() {
    var ssispopup = document.getElementById("myPopupssis")
    ssispopup.classList.toggle("ssisshow");
}
function ssisFunction2() {
    var ssispopup2 = document.getElementById("myPopupssis2")
    ssispopup2.classList.toggle("ssisshow2");
}
function ssisFunction3() {
    var ssispopup3 = document.getElementById("myPopupssis3")
    ssispopup3.classList.toggle("ssisshow3");
}
function ssisFunction4() {
    var ssispopup4 = document.getElementById("myPopupssis4")
    ssispopup4.classList.toggle("ssisshow4");
}
function ssisFunction5() {
    var ssispopup5 = document.getElementById("myPopupssis5")
    ssispopup5.classList.toggle("ssisshow5");
}
function ssisFunction6() {
    var ssispopup6 = document.getElementById("myPopupssis6")
    ssispopup6.classList.toggle("ssisshow6");
}

// Box-2.html
// music player 1
var myAudio = new Audio();
myAudio.src = "Audio1.mp3";
function PlaySound(){
	myAudio.play();
}
function PauseSound(){
	myAudio.pause();
}

//video player 1
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("popupvideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}