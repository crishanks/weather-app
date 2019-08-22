const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/5ea6789990c966cb5445fdba4e2497ae/37.8267,-122.4233?units=us&lang=es'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location!')
//   } else {
//     console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//   }
// })

geocode('Utah', (error, data) => {
  console.log('Error', error);
  console.log('Data', data)
})