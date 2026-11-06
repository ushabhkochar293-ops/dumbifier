const apikey = "dbafbf8b7ea29f4f3058c702551d94d0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const serchbox = document.getElementById("city");
const serchbotton =document.getElementById("searchbtn");
const weatherIcon = document.querySelector(".weather-icon");
 async function getweather(city){
    const response = await fetch(apiurl +city + `&appid=${apikey}`)
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querrySelector(".weather").style.display = "none";
    } 
    else{
    var data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temparature").innerHTML = Math.round(data.main.temp) +"°C";
 document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
 document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
 if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
   }
 else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "./images/clear.png";
   }
 else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./images/rain.png";
   }
 else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src ="./images/drizzle.png";
   }
 else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./images/mist.png";
   }
   else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "./images/snow.png";
   }
 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";
}
}
serchbotton.addEventListener("click", ()=>{
 getweather(serchbox.value);})