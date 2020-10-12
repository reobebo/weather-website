const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2ac8ffc67fb8509f9e987ad528e69417&query=${longitude},${latitude}&units=f`
    request({url,json:true}, (error,{body}) =>{
        if(error){
            callback('unable to connect to location services',undefined);
        } else if (body.error) {
            callback('Unable to find location.  Try another search',undefined)

        } else {
            callback(undefined, 
               `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out.  There is a ${body.current.precip}% chance of rain and the humidity is ${body.current.humidity}%`
            )
        }
    })

};

module.exports=forecast;