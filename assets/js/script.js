resultContentEl = document.querySelector("#result-content");
var workoutBtn = document.getElementById("getWorkout");

// This takes the category number, inserts it into the url vairable and selects a random workout
// Then this logs the exercise base from the workout chosen


function getMyWorkout(event) {
  event.preventDefault();
  var workoutChoice = document.querySelector('#workout-input').options[document.querySelector('#workout-input').selectedIndex].getAttribute("value");
  var timeChoice = document.querySelector('#time-input')
  console.log(workoutChoice);
  console.log(timeChoice);

  getExercises(workoutChoice, timeChoice)
}


    function getExercises(workoutChoice, timeChoice) {
  var categoriesUrl = "https://wger.de/api/v2/exercise/?category=" + inputCategory;
  fetch(categoriesUrl)
    .then(function (catRes) {


      return catRes.json();
    })
    .then(function (catData) {
      console.log(catData);
      var catItem = catData.results[Math.floor(Math.random() * catData.results.length)];

      console.log(catItem);
      console.log(catItem.name);
      console.log(catItem.description);
      console.log(catItem.exercise_base);


      printResults(catItem);

    })

}

function printResults(catItem) {
  console.log(catItem);

  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var nameContentEl = document.createElement('p');
  nameContentEl.innerHTML =
    '<strong>Exercise Name: </strong> ' + catItem.name + '<br/>';

  var descriptionContentEl = document.createElement('p');
  descriptionContentEl.innerHTML =
    '<strong>Exercise Description: </strong> ' + catItem.description + '<br/>';

  var linkButtonEl = document.createElement('a');
  linkButtonEl.textContent = 'Read More';
  linkButtonEl.setAttribute('href', "https://wger.de/en/exercise/307/view/" + catItem.name.text);
  linkButtonEl.classList.add('btn', 'btn-dark');

  resultBody.append(nameContentEl, descriptionContentEl, linkButtonEl);

  resultContentEl.append(resultCard);



}


workoutBtn.addEventListener("click", getMyWorkout);















