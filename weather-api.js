class OpenWeather {
  constructor(apiKey, units = 'imperial') {
    this.apiKey = apiKey
    this.units = units
  }

  async getWeather(zip) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    return json //returns the whole promise
  }
}

 

