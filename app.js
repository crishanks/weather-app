const request = require('request')

const url = 'https://api.darksky.net/forecast/5ea6789990c966cb5445fdba4e2497ae/37.8267,-122.4233?units=us&lang=es'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location!')
  } else {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
  }
})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3Jpc2NvZGVzIiwiYSI6ImNqem01MDc0NzEyZTczYms2c3ZxN3VidGMifQ.UtAZQMh9gJfMWdJjSnn4eA"

request({ url: geocodeURL, json: true}, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.')
  } else {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];
    console.log(lat, long)
  }
})