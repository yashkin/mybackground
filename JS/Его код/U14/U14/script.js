const param = {
    'url': 'https://api.openweathermap.org/data/2.5/',
    'appid': '868d4441026a3a23229d94d5a74d8d3c',
}

function getWeather() {
    let cityId = document.querySelector('#listCity').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => { return weather.json(); })
        .then(showWeather);
}


function showWeather(data) {
    //Вывод данных
    console.log(data);

    document.querySelector('.city').textContent = data.name;
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;C';

    outData(data.weather[0]['description']);
    outData(`давление : ${data.main.pressure - 243}мм рт.ст.`);
    outData(`скорость  ветра : ${data.wind['speed']}м/с`);
    outData(`влажность : ${data.main.humidity}%`);

}

function outData(param) {
    let list = document.querySelector('.desc');
    let changeElem = document.createElement('li');
    changeElem.classList.add('desc-item')
    changeElem.innerHTML = param;
    list.append(changeElem);
}

const cities = {
    703448: "Kiev",
    698740: "Odessa",
    7839805: "Melbourne",
    2761333: "Vienna",
    6355183: 'Playa de las Américas',
}
console.log(cities);

function outSelect() {
    let sel = document.querySelector('.select');
    // sel.classList.add('#listCity');

    for (const key in cities) {
        console.log(cities[key]);
        let option = document.createElement('option');
        option.setAttribute('value', key);
        option.innerHTML = cities[key];
        sel.append(option);

        if (cities[key] === ' ') {
            option.setAttribute('value', key);
        }

    }
}
outSelect()

document.querySelector('#listCity').onchange = getWeather;
getWeather();