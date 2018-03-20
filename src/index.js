const mapboxgl = require("mapbox-gl");
const multiFunc = require('./marker');

mapboxgl.accessToken = "pk.eyJ1Ijoicmlja3kwMzIxIiwiYSI6ImNqZXp1MmVsaDBmdWEyeG9oNWlueHR2b3gifQ.C2Ej5Uix1g5985Myju82Sg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


let tempMark = multiFunc('activity', [-87.6254, 41.8685]);
let tempMark2 = multiFunc('restaurant', [-87.6254, 41.5685]);
// let tempMark2 =

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = tempMark;




// new mapboxgl.Marker(document.getElementById(markerDomEl)).setLngLat([-87.6354, 41.8885]).addTo(map);
// new mapboxgl.Marker(document.getElementById(markerDomEl)).setLngLat([-87.6454, 41.8985]).addTo(map);
// new mapboxgl.Marker(tempMark.markerDomEl).setLngLat(tempMark.location).addTo(map);
//
// new mapboxgl.Marker(tempMark2.markerDomEl).setLngLat(tempMark2.location).addTo(map);
