apiKey = "f85e16e4712c719f52ce489e766fd57443931aaf"

    var queryUrl = "https://wger.de/en/software/api/v2/?format=json";

    fetch(queryUrl)
        .then(function (response) {
            return response.json()
        })
        .then (function (data) {
            console.log(data);
        })

