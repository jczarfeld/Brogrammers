resultContentEl = document.querySelector("#result-content");
var newWorkout = localStorage.getItem("storedWorkout");
var getCity = localStorage.getItem("city");
var apiKey = "9da4bb573ba9574c53ffbc53979faaa4";

console.log(newWorkout);
console.log(getCity);

//this turns the data back into an accessible object

var resultsWorkout = JSON.parse(newWorkout);
console.log(resultsWorkout);
console.log(resultsWorkout.name);

//this put the name, description and link button onto the second html

for (let index = 0; index < resultsWorkout.length; index++) {
    if (resultsWorkout[index].name !== undefined) {
        printResults(resultsWorkout[index])
    }
}

function printResults(resultsWorkout) {
    console.log(resultsWorkout.name);
    console.log(resultsWorkout.description);

    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'mb-3', 'p-3');
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
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
    linkButtonEl.classList.add('btn', 'btn-dark');
    resultBody.append(nameContentEl, descriptionContentEl, linkButtonEl);
    resultContentEl.append(resultCard);
}
function forecast (getCity) {
    var forecastHeader = document.getElementById("forecast-header");
    forecastHeader.removeAttribute("class", "invisible");

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
                var forecastCard = document.createElement('div');
                var forecastHeader = document.createElement('h3');
                var forecastWind = document.createElement('p');
                var forecastHumidity = document.createElement('p');
                var forecastTemperature = document.createElement('p');

                forecastContainer.className = "card bg-primary text-white justify-content-evenly";

                forecastCard.className = "card-body p-2 me-1";

                forecastHeader.className = "card-title";
              //  forecastHeader.textContent = moment(data.list[i].dt_txt.split("12:")[0]).format("MMMM Do, YYYY");
                
                forecastWind.className = "card-text";
                forecastWind.textContent = "Wind Speed: " + data.list[0].wind.speed + " MPH";
                forecastHumidity.className = "card-text"
                forecastHumidity.textContent = "Humidity : " + data.list[0].main.humidity + "%";
                forecastTemperature.className = "card-text"
                forecastTemperature.textContent = "Temperature : " + data.list[0].main.temp_max + "°F";



                forecastCard.appendChild(forecastHeader);
                forecastCard.appendChild(forecastWind);
                forecastCard.appendChild(forecastHumidity);
                forecastCard.appendChild(forecastTemperature);
                forecastContainer.appendChild(forecastCard);
                forecastCards.appendChild(forecastContainer);
                forecastEl.appendChild(forecastContainer);
                }   
        )}        
        


forecast(getCity);