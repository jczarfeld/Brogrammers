//var apiKey = 'd9eb4f1711b455af97554fa7e0564ee5fb06b502'

//console.log("wger.de/en/exercise/muscle/overview/");

var oneClickUrl = "https://wger.de/api/v2/exercise/?language=2&limit=229";
        fetch(oneClickUrl)
          .then(function (res) {


            return res.json();
          })
          .then(function (data) {


            console.log(data);
          })
          

    