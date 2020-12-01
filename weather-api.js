
function getWeather(zip, apiKey, success, error) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      success(json)
    })
    .catch(err => 
      error(err))
}


