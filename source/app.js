const express = require('express')
const path =require('path')
const hbs = require('hbs')

const geo_weather = require('./function_folder/geo_weather_function')
const forcast = require('./function_folder/forcast_function')


const app = express();



//define path for express config

const public_Dir=path.join(__dirname,'../public')
const view_dir =path.join(__dirname,'../template/views')
const partial_dir = path.join(__dirname,'../template/partials')


//setup static dir to serve
app.use(express.static(public_Dir))




// setup handlbar and views location 
app.set('view engine','hbs')
app.set('views',view_dir)
hbs.registerPartials(partial_dir)

app.get('' , (request ,response) =>{
    response.render('index',{
                title:'1st page coming from web-server/view/index.hbs',
                value: 100,
    })
})

app.get('/about' , (request ,response) =>{
    response.render('about',{
                title:'2 nd page coming from web-server/view/about.hbs',
                value: 99,
    })
})

app.get('/weather' , (request,response)=>{
    response.render('weather',{})
})

app.get('/weather_test', (request ,response) =>{

    if(!request.query.address){
        return response.send({
            error : 'You must provide address'
        })
    }

    geo_weather(request.query.address,(error ,value) => {
        if (error){
            return response.send({
                error
            })
        }
        forcast(value.latitute , value.longititute , (error ,value) =>{
            if (error){
                return response.send(
                    error
                )
            }
            console.log(value)
            response.send(value)
        })
    })

    

    
})




app.get('/customer',(request,response)=>{
    if (!request.query.search){
        return response.send({
            error:'You must provide search term'
        })
    }
    console.log(request.query.search)
    response.send({
        
    })
})

app.get('*', (request ,response) =>{
    response.send('404 Page')
})


app.listen(3000, ()=>{
    console.log('server is up running on port 3000')
})

