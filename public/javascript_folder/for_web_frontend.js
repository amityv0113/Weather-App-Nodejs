

console.log('javascript comming from client side load to frontend ')

fetch('http://localhost:3000/weather_test?address=Allahabad').then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            console.log(data.error)
        }
        else{
            console.log(data)
        }
    })
})


const search = document.querySelector('input')


var lat_1=0
var log_1=0


const weatherform = document.querySelector('form')

weatherform.addEventListener('submit',(event)=>{
    event.preventDefault()

    const location_1 = search.value

    fetch('http://localhost:3000/weather_test?address='+location_1).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            console.log(data.error)
        }
        else{
            var x=""
            var x1="Location "+location_1+" "+data.location.region+" "+'Country '+data.location.country+" and Obsevation time "+data.location.localtime
            var x2 ="Temperature of "+location_1+" is "+data.current.temperature+" and feels like "+data.current.feelslike +" and Weather Description : "+data.current.weather_descriptions
            var x3= "Wind Speed is "+data.current.wind_speed+" and its Direction is "+data.current.wind_dir+" precipitation percentage "+data.current.precip+" humidity "+data.current.humidity
            lat_1=data.location.lat
            log_1=data.location.lon
            console.log(lat_1)
            console.log(log_1)
            Object.keys(data.location).forEach((key,index)=>{
                 x=x+"<p>"+key+" : "+data.location[key]+"</p>"
            })
            document.getElementById("img-1").src=data.current.weather_icons[0]
            document.getElementById("p-1").innerHTML = x
            document.getElementById("p-2").innerHTML = x1
            document.getElementById("p-3").innerHTML = x2
            document.getElementById("p-4").innerHTML = x3

        }
    })
})
    
})


        // Initialize and add the map
        function initMap() {
            // The location of Uluru
            var uluru = {
                lat: lat_1,
                lng: log_1
            };
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
        }
    
    




  