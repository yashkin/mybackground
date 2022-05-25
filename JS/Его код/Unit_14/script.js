let select = document.getElementById('city');

const cities = {
    "2643743": "London",
    "625144": "Minsk",
    "3099434": "Gdansk",
    "703448": "Kyiv",
    "5419384": "Denver",
    "698740": "Odessa"
}
for (let key in cities) {
    let newOpt = document.createElement('option');
    newOpt.value = key;
    newOpt.innerHTML = cities[key];
    select.appendChild(newOpt);
}

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "678f24633e8ac74193d58f7c2b77776a"
}

const features = [
    "visibility", "feels_like", "wind", "sun", "humidity", "pressure", "current_time"
];
for (let i = 0; i < features.length; i++) {
    let newFeature = document.createElement('li');
    newFeature.classList.add(features[i]);
    document.querySelector('.features').appendChild(newFeature);
}



function getWeather() {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
        .then(weather => { return weather.json(); })
        .then(showWeather)
}

function showWeather(data) {
    console.log(data);
    const cityId = document.querySelector('#city').value;

    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = `<img src = 'http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png'><br>${Math.round(data.main.temp)}&deg;C`;
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.visibility').innerHTML = `Visibility: ${data.visibility} m`;
    document.querySelector('.feels_like').innerHTML = `Feels like: ${Math.round(data.main.feels_like)}&deg;C`;
    document.querySelector('.wind').innerHTML = `Wind: ${data.wind.speed} meter/sec`;
    document.querySelector('.sun').innerHTML = `Sunrise/sunset:<br> ${getTime(data.sys.sunrise, data.timezone)} / ${getTime(data.sys.sunset, data.timezone)}`;
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity} %`;
    document.querySelector('.pressure').innerHTML = `Pressure: ${data.main.humidity} hPa`;

}

function getTime(unixTimestamp, timeZone) {
    let locDate = new Date((unixTimestamp + timeZone) * 1000);
    let h = locDate.getUTCHours();
    let m = locDate.getUTCMinutes();
    return `${h} h, ${m} min`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;



