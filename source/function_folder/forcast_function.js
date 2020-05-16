const request = require('request')
const forcast = (latitute,longititute,callback)=> {
    const url = 'http://api.weatherstack.com/current?access_key=6297b5fdda019bb9ddb260bf552b97e5&query='+latitute+','+longititute

    request({url:url}, (error,response) =>{
        //console.log(response.body)
    
        const data = JSON.parse(response.body)
        if (error)
        {
            callback('unable to connect to location service')
        }
        else if (data.error)
        {
            callback('unable to find location find other location ')
        }
        else
        {
            //console.log(data)
            callback(undefined,data)
        }
    // to return aobject from json string 
    //console.log(data.current)

    //to print string using data.current.temperature property
    


})
}

module.exports = forcast ;