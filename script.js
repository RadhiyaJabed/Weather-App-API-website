let weather = {
    "apiKey" : '9bcc314642d85159fb8593a1c4b9335b',
    fetchWeather: function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Lancaster,GB&units=metric&appid=9bcc314642d85159fb8593a1c4b9335b"
            ).then((response) => response.json())
            .then((data) => console.log(data));
    }
}