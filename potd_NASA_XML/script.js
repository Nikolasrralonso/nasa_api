// Using XMLHttpRequest

// API DATA
const req = new XMLHttpRequest();
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const apiKey = config.apiKey;

// HTML Selectors

let title = document.getElementById('title')
let date = document.getElementById('date')
let descr = document.getElementById('description')
let img = document.getElementById('image')

req.open("GET", url+apiKey);
req.send();

req.addEventListener("load", function(){
    if(req.status=200 && req.readyState==4){
        let response = JSON.parse(req.responseText);
        console.log(response)
        title.textContent = response.title;
        date.textContent = response.date;
        img.src = response.hdurl;
        descr.textContent = response.explanation;
    }
})