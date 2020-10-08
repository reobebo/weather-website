const request = require('request');

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmJlYm8iLCJhIjoiY2tmajc3bjdpMGp0MTJ5cWV2OGtyM2RxeSJ9.lTHMIhWEqFaGWDwJ0GG3zA&limit=1'
    request({url,json:true}, (error,{body}) =>{
        if(error){
            callback('unable to connect to location services',undefined);
        } else if (body.features.length ===0) {
            callback('Unable to find location.  Try another search')

        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                logitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

};

module.exports=geocode;