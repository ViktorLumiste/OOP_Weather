class Weather{
    constructor(city){
        this.city = city
        this.key = "559b01018d1357db4e2132b83d795dd9"
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

}