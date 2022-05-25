const param = {
	"url": "https://api.openweathermap.org/data/2.5/",
    "appid": "678f24633e8ac74193d58f7c2b77776a"
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}&id=${cityId}&units=metric`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
}

getWeather(); 
document.querySelector('#city').onchange = getWeather;