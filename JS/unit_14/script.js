

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "678f24633e8ac74193d58f7c2b77776a"
}

function showWeather(data) {
  
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = `<img src = 'http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png'><br>${Math.round(data.main.temp)}&deg;C`;
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];

}

getWeather();
document.querySelector('#city').onchange = getWeather;