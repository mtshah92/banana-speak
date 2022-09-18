var translatebtn = document.querySelector(".btn-translate");
var txtArea = document.querySelector("textarea");
var outputTxt = document.querySelector(".output-txt");

function clickEventHander() {
  console.log("clicked!");
  outputTxt.value = "aaaa " + txtArea.value;
}

translatebtn.addEventListener("click", clickEventHander);
