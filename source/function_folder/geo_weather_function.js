const request = require('request')

const geo_weather = (address,callback) => {
    const geo_url_for_latititute_and_longititute = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1pdDAxMTMiLCJhIjoiY2s5bXBnMWJxMDF0ZDNmcGRxbnJlOTg0ZyJ9.70Pgw8T5COz0sRmduqN72w'

    request({url:geo_url_for_latititute_and_longititute}, (error,response) =>{
        //console.log(response.body)
    
        const data = JSON.parse(response.body)
        
        if (error)
        {
            callback('unable to connect to location service')
        }
        else if (data.features.length==0)
        {
            callback('unable to find location find other location ')
        }
        else{
            const latitute = data.features[0].center[1]
            const longititute = data.features[0].center[0]
            callback(undefined,{
                                latitute :latitute,
                                longititute: longititute,
                                location:data.features[0].place_name
            })
        }
    
    })

}

module.exports = geo_weather ;