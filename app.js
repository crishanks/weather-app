const request = require('request')

const url = 'https://api.darksky.net/forecast/5ea6789990c966cb5445fdba4e2497ae/37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently)
})