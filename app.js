const weather = new Weather("Tartu")

function getWeather(){
    weather.getWeather()
    .then(data => {
        console.log(data)
    })
        .catch(error => console.log(error))
}

getWeather()