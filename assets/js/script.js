resultContentEl = document.querySelector("#result-content");
// make one big function that contains both api calls to compare the exercise bases


// make calls and figure out IDs for each body part

var inputCategory = 8;

// This takes the category number, inserts it into the url vairable and selects a random workout
// Then this logs the exercise base from the workout chosen


function categorySelected() {

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




// still need to move this number into a comparison filter against the images json




//var twoClickUrl = "https://wger.de/api/v2/exerciseimage/?limit=118";
//fetch(twoClickUrl)
//  .then(function (res2) {

//loop over the data got back and pull out all with same base(use filter-return brand new array)




//  return res2.json();
// })


// .then(function (data2) {


//  console.log(data2);


// getMatchingEBase(data2, catItem);

//   let matchingEBase = data2.results.filter( (obj) => {
//   if(obj.exercise_base == catItem.exercise_base) {
//    console.log(matchingEBase);
//   }})


// need to move this outside of the function? need local storage?




// function getMatchingEBase(data2, catItem) {


//let matchingEBase = data2.results.filter( (obj) => {
//  if(obj.exercise_base == catItem.exercise_base) {
//  console.log(matchingEBase);

// }})}

categorySelected();





















//var oneClickUrl = "https://wger.de/api/v2/exercise/?language=2&limit=229";
//   fetch(oneClickUrl)
//    .then(function (res) {


//     return res.json();
//   })
//  .then(function (data) {


// the use input will give the data.results[] identifying number, then we can grab the exercise_base


//    console.log(data);
//   console.log(data.results[19].exercise_base);
//create secondary function to call with the base that comes back from muscle grp use this to get img
// getImages(data.results[19].exercise_base);













// })