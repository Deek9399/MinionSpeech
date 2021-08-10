var input = document.querySelector("#input-english");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

function clickEventHandler() {
  output.innerText = "chddhh hdjhd hdjhdd " + input.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
