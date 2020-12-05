require('dotenv').config()
const OpenWeatherApi = require('./umd/weather-api')

const apiKey = process.env.OPENWEATHERMAP_API_KEY
const weather = new OpenWeatherApi(apiKey)

let city = 'San Francisco'
console.log(weather)

weather.getWeatherByCity(city).then((json) => {
  console.log(json.temp)
}).catch((err) => {
  console.log(err.message)
})
