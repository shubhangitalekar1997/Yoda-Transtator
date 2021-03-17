var btn = document.querySelector("#btn");
var inputText = document.querySelector("#inputText");
var output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/yoda.json"
button.addEventListener('click',()=> {
    console.log("button clicked");
    var textInput = inputText.value;
    fetch(`${url}?text=${textInput}`)
        .then(res => res.json())
        .then(data => {
            output.innerText =  data.contents.translated;
        })
        .catch(() => alert('Sorry :( something is wrong with server'))
});