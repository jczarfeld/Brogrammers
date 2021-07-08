// make one big function that contains both api calls to compare the exercise bases
var workoutBtn = document.getElementById("getWorkout");
// make calls and figure out IDs for each body part
// This takes the category number, inserts it into the url vairable and selects a random workout
// Then this logs the exercise base from the workout chosen
function getMyWorkout(event) {
  event.preventDefault();

  var workoutChoice = document.querySelector('#workout-input').options[document.querySelector('#workout-input').selectedIndex].getAttribute("value");
  var timeChoice = document.querySelector('#time-input').options[document.querySelector('#time-input').selectedIndex].getAttribute("value");
  console.log(workoutChoice);
  console.log(timeChoice);

  location.href = "./index2.html"

  getExercises(workoutChoice, timeChoice)
}

function getExercises(workoutChoice, timeChoice) {
  var categoriesUrl = "https://wger.de/api/v2/exercise/?category=" + workoutChoice + "&language=2";
  fetch(categoriesUrl)
    .then(function (catRes) {
      return catRes.json();
    })
    .then(function (catData) {
      console.log(catData);

      // for (var i = 0; i < timeChoice, i++) {

      var catItem = catData.results[Math.floor(Math.random() * catData.results.length)];


      console.log(catItem);
      console.log(catItem.name);
      console.log(catItem.description);
      console.log(catItem.exercise_base);

      //this tuurns the object into a string so it can be stored and moved
      var storedWorkout = JSON.stringify(catItem);
      console.log(storedWorkout);
      localStorage.setItem("storedWorkout", storedWorkout);

      // }
    })

  // printResults(catItem);

}

workoutBtn.addEventListener("click", getMyWorkout);