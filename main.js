var translatebtn = document.querySelector(".btn-translate");
var txtArea = document.querySelector("textarea");
var outputTxt = document.querySelector(".output-txt");

function clickEventHander() {
  console.log("clicked!");
  const inputValue = parseInt(txtArea.value, 10);

  for (var i = 2; i < inputValue; i++) {
    if (inputValue % i == 0) {
      outputTxt.value = txtArea.value + " is not prime.";
    } else {
      outputTxt.value = txtArea.value + " is prime.";
    }
  }
}

translatebtn.addEventListener("click", clickEventHander);
