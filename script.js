let weather = {
    "apiKey" : '9bcc314642d85159fb8593a1c4b9335b',
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +",GB&units=metric&appid="+this.apiKey)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
}