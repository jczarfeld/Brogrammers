resultContentEl = document.querySelector("#result-content");
var newWorkout = localStorage.getItem("storedWorkout");
var getCity = localStorage.getItem("city");

var apiKey = "9da4bb573ba9574c53ffbc53979faaa4"

console.log(newWorkout);

//this turns the data back into an accessible object
var resultsWorkout = JSON.parse(newWorkout);
console.log(resultsWorkout);
console.log(resultsWorkout[0].name);

for (let index = 0; index < resultsWorkout.length; index++) {
    if (resultsWorkout[index].name !== undefined) {
        printResults(resultsWorkout[index])
    }
}

//this put the name, description and link button onto the second html
function printResults(resultsWorkout) {
    console.log(resultsWorkout.name);
    console.log(resultsWorkout.description);
    var resultCard = document.createElement('div');
    resultCard.classList.add('uk-card', 'uk-card-body', 'uk-card-hover', 'uk-padding-small', 'uk-box-shadow-medium', 'uk-width-medium')
    var resultBody = document.createElement('div');
    resultCard.append(resultBody);
    var nameContentEl = document.createElement('p');
    nameContentEl.innerHTML =
        '<strong>Exercise Name: </strong> ' + resultsWorkout.name + '<br/>';
    var descriptionContentEl = document.createElement('p');
    descriptionContentEl.innerHTML =
        '<strong>Exercise Description: </strong> ' + resultsWorkout.description + '<br/>';
    var linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', "https://wger.de/en/exercise/overview/");
    linkButtonEl.setAttribute('target', "_blank");
    linkButtonEl.classList.add('uk-button-primary');
    resultBody.append(nameContentEl, descriptionContentEl, linkButtonEl);
    resultContentEl.append(resultCard);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function forecast (getCity) {
    var forecastDisplay = document.getElementById("forecast-display");
    forecastDisplay.textContent = "";

    var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + getCity + "&appid=" + apiKey + "&units=imperial";

    console.log(forecastApi);

    // fetch forecast information
    fetch(forecastApi)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            
            // iterate over data and only pull back time with "12:00" present (returns several times for each day)
           // for (var i = 0; i < data.list.length; i++) {
            //    if (data.list[i].dt_txt.includes("12:00")) {
                
                var forecastEl = document.getElementById("forecast-display");
                var forecastCards = document.createElement('div');
                var forecastContainer = document.createElement('div');
                var forecastHeader = document.createElement('h3');
                var forecastCard = document.createElement('div');
                var forecastWind = document.createElement('p');
                var forecastHumidity = document.createElement('p');
                var forecastTemperature = document.createElement('p');

                forecastContainer.classList.add('uk-card', 'uk-card-primary', 'uk-card-hover', 'uk-margin-small', 'uk-padding-small', 'uk-box-shadow-medium', 'uk-width-medium');

                forecastCard.className = "uk-card-body uk-padding-small uk-margin-small";

                forecastHeader.className = "card-title";
                forecastHeader.textContent = moment().format("MMMM Do, YYYY");
                
                forecastWind.className = "card-text";
                forecastWind.textContent = capitalizeFirstLetter(data.list[0].weather[0].description);
                forecastHumidity.className = "card-text"
                forecastHumidity.textContent = "Humidity : " + data.list[0].main.humidity + "%";
                forecastTemperature.className = "card-text"
                forecastTemperature.textContent = "Temperature : " + data.list[0].main.temp_max + "°F";

                forecastCard.appendChild(forecastHeader)
                forecastCard.appendChild(forecastWind);
                forecastCard.appendChild(forecastHumidity);
                forecastCard.appendChild(forecastTemperature);
                forecastContainer.appendChild(forecastCard);
                forecastCards.appendChild(forecastContainer);
                forecastEl.appendChild(forecastContainer);

                
                }   
        )}        
        


forecast(getCity);