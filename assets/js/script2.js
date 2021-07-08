resultContentEl = document.querySelector("#result-content");
var newWorkout = localStorage.getItem("storedWorkout");
var nameContent = localStorage.getItem('name');
var descriptionContent = localStorage.getItem('description');
console.log(nameContent);
//console.log(nameContent);
  //  console.log(descriptionContent);
function printResults() {
    console.log(nameContent);
    console.log(descriptionContent);
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'mb-3', 'p-3');
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);
    var nameContentEl = document.createElement('p');
    nameContentEl.innerHTML =
      '<strong>Exercise Name: </strong> ' + nameContent + '<br/>';
    var descriptionContentEl = document.createElement('p');
    descriptionContentEl.innerHTML =
      '<strong>Exercise Description: </strong> ' + descriptionContent + '<br/>';
    var linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', "https://wger.de/en/exercise/307/view/" + nameContent);
    linkButtonEl.classList.add('btn', 'btn-dark');
    resultBody.append(nameContentEl, descriptionContentEl, linkButtonEl);
    resultContentEl.append(resultCard);
  }
  printResults();