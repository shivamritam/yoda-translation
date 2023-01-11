const button = document.querySelector('button');

const output = document.querySelector('#output');

const input = document.querySelector('input');

button.addEventListener('click',()=>{Handler()});

function Handler(){

    let text = input.value;

    let enURI = encodeURI(text);

    let url = `https://api.funtranslations.com/translate/yoda.json?text=${enURI}}`;

    fetch(url).then((res)=>{return res.json()}).then((jso)=>{output.innerText = jso.contents.translated })


}