// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
<<<<<<< HEAD
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
>>>>>>> e2ba28865e92b757c16b2e96d6d76b359c1bcb7d
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
<<<<<<< HEAD
  Light: light,
=======
  Street: streets,
>>>>>>> e2ba28865e92b757c16b2e96d6d76b359c1bcb7d
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
<<<<<<< HEAD
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
=======
  center: [30, 30],
  zoom: 2,
  layers: [streets]
>>>>>>> e2ba28865e92b757c16b2e96d6d76b359c1bcb7d
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

<<<<<<< HEAD
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/nickdsharpe/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style:myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airline " + feature.properties.airline + "<h2> <hr> <h2>Destination: " + feature.properties.dst + "<h2>");
=======
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/nickdsharpe/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "<h2> <hr> <h2>Airport Name: " + feature.properties.name + "<h2>");
>>>>>>> e2ba28865e92b757c16b2e96d6d76b359c1bcb7d
  }
}).addTo(map);
});
