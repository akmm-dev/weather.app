var search = document.querySelector('#search');

search.addEventListener('click', () => {
    let city = document.querySelector('#location')
    if (city.value === ' ') { 
    } else {
     localStorage.setItem('userLocation', city.value.trim());
    city.value = '';      
    }    
    location.reload();
})

let userlocation = localStorage.getItem('userLocation');

let apiKey ="7adcf771a979cdc3b6b303dcf750a49f";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
let apiLoc = userlocation;

async function getweather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${apiLoc}`);
    var data = await response.json();
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.real_feel').innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector('.sea-level').innerHTML = data.visibility+'km';
    document.querySelector('.pressure').innerHTML = data.main.pressure + 'hPa';
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '<sup>°C</sup>';
    document.querySelector('.condition').innerHTML = Math.round(data.main.temp_max) + '°' + '/' + Math.round(data.main.temp_min) + '°';
    document.querySelector('.weather').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.City').innerHTML = data.name.toUpperCase();
}
window.onload = () => {
    getweather();

}
