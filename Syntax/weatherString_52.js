function createWeather(city, weather = 'GOOD Weather!') {
  return `The weatherforecast for the city ${city}: ${weather}`
}
console.log(createWeather('London', 'Cloudy'))
console.log(createWeather('Minsk', 'Sunny'))
console.log(createWeather('Berlin', undefined))
console.log(createWeather('Paris', ''))
console.log(createWeather('Slutsk'))
