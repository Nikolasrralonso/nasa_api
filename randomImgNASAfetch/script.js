
// API Data

const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = config.apiKey;

// HTML Selectors

let title = document.getElementById('title');
let date = document.getElementById('date');
let descr = document.getElementById('description');
let img = document.getElementById('image');


// Fetching Data from the API function

const fetchAPIData = async () => {
    try {
        const response = await fetch(`${url}${apiKey}`)
        const data = await response.json()
        fillData(data)
    } catch(err){
        console.log(err)
    }
}

fetchAPIData();

const fillData = data => {
    title.textContent = data.title;
    date.textContent = data.date;
    img.src = data.hdurl;
    descr.textContent = data.explanation;    
}
