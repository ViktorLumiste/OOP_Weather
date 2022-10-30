const ls = new LS()
const loadCity = ls.getCity()
const weather = new Weather(loadCity)
const ui = new UI()

const form = document.querySelector("#change-city")

form.addEventListener("submit", changeWeather)


function changeWeather(e){
    const city = document.querySelector("#city-name").value
    ls.addCity(city)
    weather.changeCity(city)
    getWeather()
    document.querySelector(("#city-name")).value = ""
    e.preventDefault()
}

function getWeather(){
    weather.getWeather()
    .then(data => {
        console.log(data)
        ui.drawWeather(data)
    })
        .catch(error => console.log(error))
}



getWeather()