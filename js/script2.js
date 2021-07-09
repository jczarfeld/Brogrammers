resultContentEl = document.querySelector("#result-content");
var newWorkout = localStorage.getItem("storedWorkout");

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
    resultCard.classList.add('uk-card', 'uk-card-body', 'uk-card-hover', 'uk-margin-small', 'uk-padding-small', 'uk-box-shadow-medium');
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
