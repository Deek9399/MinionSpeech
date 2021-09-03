var input = document.querySelector("#input-english");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var minionServerURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslateUrl(text) {
  return minionServerURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured !!", error);
  alert("Something went wrong with the server, Try again Later!!");
}

function clickEventHandler() {
  var inputText = input.value;
  fetch(getTranslateUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
