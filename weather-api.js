
async function getWeather(zip, apiKey) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  const json = await res.json()
  return json //returns the whole promise
}
