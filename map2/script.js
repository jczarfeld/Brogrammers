function initMap() {
    const pyrmont = { lat: 28.538, lng: -81.379234};
    const map = new google.maps.Map(document.getElementById("map"), {
      center: pyrmont,
      zoom: 15,
      mapId: "8d193001f940fde3",
    });
  
    const service = new google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");
  
    moreButton.onclick = function () {
      moreButton.disabled = true;
  
      if (getNextPage) {
        getNextPage();
      }
    };
  
    service.nearbySearch(
      { location: pyrmont, radius: 5000, type: "gym" },
      (results, status, pagination) => {
        if (status !== "OK" || !results) return;
        addPlaces(results, map);
        moreButton.disabled = !pagination || !pagination.hasNextPage;
  
        if (pagination && pagination.hasNextPage) {
          getNextPage = () => {
            pagination.nextPage();
          };
        }
      }
    );
  }
  
  function addPlaces(places, map) {
    const placesList = document.getElementById("places");
  
    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon,
          size: new google.maps.Size(75, 75),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(30, 30),
        };
        new google.maps.Marker({
          map,
          icon: image,
          title: place.name,
          position: place.geometry.location,
        });
        const li = document.createElement("li");
        li.textContent = place.name;
        placesList.appendChild(li);
        li.addEventListener("click", () => {
          map.setCenter(place.geometry.location);
        });
      }
    }
  }