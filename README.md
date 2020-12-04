# Open Weather Map API wrapper library
 
[Open Weather Map API](https://openweathermap.org). 


## OpenWeather Class:

1. ```const weather = OpenWeather(apiKey, units) ```
1. ```weather.getWeatherByZip(zip)```
1. ```weather.getWeatherByCity(city)```
1. ```weather.getWeatherByCityID(cityId)```
1. ```weather.getWeatherByGeo(lat, lon)```



Here is a list of the URLs this library uses: 

- By city name
  - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
- By city ID
  - api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
- By geocoordinates
  - api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
- By zip code 
  - api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
