// Create the Leaflet map
const map = L.map('map').setView([44.75874, 19.21437], 13);

// Add the OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to get the current location
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    // Check if the browser supports the Geolocation API
    if ("geolocation" in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // Successfully retrieved the position
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        function(error) {
          // Handle any errors that occurred
          reject("Error getting location: " + error.message);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      reject("Geolocation is not supported by your browser");
    }
  });
}

// Get the current location and add a marker when successful
getCurrentLocation()
  .then(position => {
    console.log("Location: ", position);

    // Add a marker for the current location
    L.marker([position.latitude, position.longitude]).addTo(map)
      .bindPopup('Your current location.<br> Easily customizable.')
      .openPopup();
  })
  .catch(error => {
    console.error(error);
  });

// Add other markers and circles to the map
L.marker([44.8199, 20.4587]).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup();

L.marker([44.8043, 20.4971]).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup();


L.marker([44.8004719921982, 20.48447326931219]).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup();
