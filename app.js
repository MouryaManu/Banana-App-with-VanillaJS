var click=document.querySelector('#click');
var input=document.querySelector("#txt-input");
var output=document.querySelector("#txt-output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function translate(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something wrong with server. Please try again after some time.")
}

function clickfunction()
{
    var inputtxt=input.value;
    fetch(translate(inputtxt))
   .then(response => response.json())
   .then(json => {
       var translatedtext= json.contents.translated;
       output.innerText= translatedtext;
   })
};
click.addEventListener("click",clickfunction);