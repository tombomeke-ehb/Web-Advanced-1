const getWeatherButton = document.getElementById('getWeather');
const loaderElement = document.getElementById('loader');
const weatherDataElement


const fetchWeater = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.opeanweathermap.org/data/2.5/weather?lat=${lat}&lon${lon}&units=metric&appid=${apikey}`)
    }
}