(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.OpenWeatherApi = factory(global.axios));
}(this, (function (axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  // import fetch from 'node-fetch'
  if (typeof module !== 'undefined' && module.exports) { 
    console.log('this script is running in Node.js'); 
    // import fetch from 'node-fetch'
  } else { 
    console.log('this script is not running in Node.js'); 
  } 

  class OpenWeather {
    constructor(apiKey, units = 'imperial') {
      this.apiKey = apiKey;
      this.units = units;
    }

    async getWeatherByZip(zip) {
      const {apiKey, units} = this;
      const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
      const res = await axios__default['default'].get(path);
      const json = await res.data;

      // Get all of the relavant info 
      const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json;
      const { temp, pressure, humidity, temp_max, temp_min } = main;
      const { description, icon } = weather[0];
      // Reformat the object that is returned
      return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }

    }

    async getWeatherByCity(city) {
      const {apiKey, units} = this;
      const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      const res = await axios__default['default'].get(path);
      const json = await res.data;

      // Get all of the relavant info 
      const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json;
      const { temp, pressure, humidity, temp_max, temp_min } = main;
      const { description, icon } = weather[0];
      // Reformat the object that is returned
      return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
    }

    async getWeatherByCityID(cityId) {
      const {apiKey, units} = this;
      const path = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}`;
      const res = await axios__default['default'].get(path);
      const json = await res.data;
      // Get all of the relavant info 
      const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json;
      const { temp, pressure, humidity, temp_max, temp_min } = main;
      const { description, icon } = weather[0];
      // Reformat the object that is returned
      return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
    }

    async getWeatherByGeo(lat, lon) {
      const {apiKey, units} = this;
      const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
      const res = await axios__default['default'].get(path);
      const json = await res.data;

      // Get all of the relavant info 
      const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json;
      const { temp, pressure, humidity, temp_max, temp_min } = main;
      const { description, icon } = weather[0];
      // Reformat the object that is returned
      return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
    }
  }

  return OpenWeather;

})));
