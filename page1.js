const apiKey = "a8d5e446802a120a475be9e15b02e502";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();


     document.querySelector(".city").innerHTML = data.name
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"
     document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
     if(data.weather[0].main == "Clouds"){
         weatherIcon.src = "images/clouds.png"
     }
     else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "images/rain.jpeg"
     }
     else if(data.weather[0].main == "Thunderstorm"){
         weatherIcon.src = "images/thunderstorm.png"
    }
     else if(data.weather[0].main == "Snow"){
         weatherIcon.src = "images/snow.jpeg"
    }
    else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "images/mist.png"
     }else{
        weatherIcon.src = "images/clear.png"
    }

     document.querySelector(".weather").style.display = "block"
 }


searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);

 })

    