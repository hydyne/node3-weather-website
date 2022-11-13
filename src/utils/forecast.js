const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f5aaed5f116c336cf110651a00f17d8e&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connecto to location services!", undefined)
        } else if (body.error) {
            callback("Weatherstack internal error.\nError code: " + body.error.code , undefined)
        } else {
            callback(undefined, 'It is now ' + body.current.temperature + ' deg, and it feels like ' + body.current.feelslike + ' deg.' + '\n'
            + 'Wind speed is ' + body.current.wind_speed + '. Wind direction ' + body.current.wind_dir + '.')
        }
    })
}

module.exports = forecast