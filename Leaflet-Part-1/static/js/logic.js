// Store API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-07-04&endtime=2022-07-05";

// perform Get request to the query URL
d3.json(queryUrl).then(function (data) {
  createFeatures(data.features);
});

// map object
var map = L.map('map', {
  center: [0, 0], // lat,lon,
  zoom: 3
});

// add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// write functions

//     Display map function .features map
//     loop through features and create layer with location, mag, depth, etc

//     inside, create function to create circles using the mag as size and color as depth

//     pull lon and lat and create circle, with color and radius based on mag and depth

//     create circle marker and return from create circles function

//     in geoJSON call create circles function for loaded data

//     create base layer

//     all above is one function, then we get to d3

//     base, map and what filters, then legend

// d3.json to pull in data

// send data into functions 