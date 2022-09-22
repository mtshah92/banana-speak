var translatebtn = document.querySelector(".btn-translate");
var txtArea = document.querySelector("textarea");
var outputTxt = document.querySelector(".output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translatedURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler() {
  console.log("error occured", error);
  alert("something went wrong please try after some time");
}

function clickEventHander() {
  var inputTxt = txtArea.value;

  fetch(translatedURL(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      outputTxt.innerText = translatedTxt;
    })
    .catch(errorHandler);
}

translatebtn.addEventListener("click", clickEventHander);
