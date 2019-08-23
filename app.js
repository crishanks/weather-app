const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userInput = process.argv[2];

geocode(userInput, (error, data) => {
  if (error) return console.log(error)
  if (!userInput) return console.log('Please provide a location.')
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) return console.log(error)
    console.log(data.location)
    console.log(forecastData)
  })
})