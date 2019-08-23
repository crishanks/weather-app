const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userInput = process.argv[2];

geocode(userInput, (error, { latitude, longitude, location }) => {
  if (error) return console.log(error)
  if (!userInput) return console.log('Please provide a location.')
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) return console.log(error)
    console.log(location)
    console.log(forecastData)
  })
})