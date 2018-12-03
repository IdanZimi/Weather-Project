class WeatherBox {
    constructor(name, temp, country, img, weather) {
        this.id = WeatherBox.id;
        this.cityname = name;
        this.temp = temp;
        this.country = country;
        this.img = img;
        this.weather = weather
        this.comments = []
        WeatherBox.id++
    }

}
WeatherBox.id = 0;
export default WeatherBox;


