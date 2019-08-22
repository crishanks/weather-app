const request = require('request')

const url = 'https://api.darksky.net/forecast/5ea6789990c966cb5445fdba4e2497ae/37.8267,-122.4233?units=us&lang=es'

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})