const request = require('request');
const forecast = (latitude, longitude,callback) => {
    const url = `https://api.darksky.net/forecast/f7f3fba367fb562c05fd4ce51428769e/${latitude},${longitude}?units=si`;
    request({url: url, json: true}, (error, response) => {
    if (error)
        callback("unable to connect to forecast services!", undefined);
    else if (response.body.error)
        callback('unable to find location', undefined);
    else
        callback(undefined, `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% change of rain.`)
    });
}

module.exports = forecast;