/*
-ajax call, then()
-new city(temp, .., ..)
-push to cities
-render :)
*/
import WeatherBox from './modules/weatherbox.js';
import Comment from './modules/comment.js';

const cities = [];

const getCity = function (cityInput) {
    $.get({
        url: "https://api.apixu.com/v1/current.json?key=dd2fa0d513d54bdbb9c112308180609&q=" + cityInput,
        success: function (data) {
            const cityName = data.location.name
            const cityTemp = data.current.temp_c
            const country = data.location.country
            const img = data.current.condition.icon
            let weather = data.current.condition.text
            let city = new WeatherBox(cityName, cityTemp, country, img, weather) 
            cities.push(city);
            renderView();
        },
        error: function () {
            console.log("error :(")
        },
    })
}

function renderView() {
    $('.city-container').empty();
    let source = $('#city-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({cities})
    $('.city-container').append(newHTML)
}

function findCityById(id) {
    for (let i in cities) {
        if (cities[i].id == id) {
            return cities[i];
        }
    }
}

function postComment(text ,id) {
    let comment = new Comment(text)
    let city = findCityById(id)
    city.comments.push(comment)
    renderView()
}



$('.search').on('click', function() {
    let city = $(this).closest('.city-input').find('.city-form').val();
    getCity(city)
})

$('.city-container').on('click', '.post-comment', function() {
    let comment = $(this).closest('.city').find('.input-comment').val();
    let id = $(this).closest('.city').data().id
    postComment(comment, id)
    renderView();
})