const apiKeys = `c9c4aebf7a6856d83a886be9d8a31da3`;
const getValue=()=>{
    const city = document.getElementById('city-name');
    const cityName=city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKeys}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>showTemperature(data))
    city.value='';
}
const showCity = (id, text)=>{
    document.getElementById(id).innerText=text;
}
const showTemperature = temperature =>{
    showCity('city', temperature.name);
    showCity('temp', temperature.main.temp);
    showCity('weather', temperature.weather[0].main);
    const imgUrl =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherImg = document.getElementById('weather-img');
    weatherImg.setAttribute('src', imgUrl);
}