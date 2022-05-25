const param = {
     "url": "httpі://api.openweathermap.org/data/2.5/",
    "appid": "678f24633e8ac74193d58f7c2b77776a"
    
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch (`${param.url} weather?id = ${cityId}&units = metric&APPID = ${param.appid}`)
    .then(weather => {
        return weather.json();
    })
    .then(showWeather);
}

function showWeather(data) {
    document.querySelector('.weather_city').textContent = data.name;
    document.querySelector('.weather_wind').textContent = 'Wind' + ' ' + Math.round(data.wind.speed) + ' ' + 'm/s';
    document.querySelector('.features_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.weather_forecast').innerHTML = Math.round(data.main.temp) + "&deg";
    console.log(data); 
}

getWeather();
document.querySelector('#city').onchange = getWeather;