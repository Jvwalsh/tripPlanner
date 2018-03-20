const mapboxgl = require("mapbox-gl");
const oneFunction = function (string, location) {

    mapboxgl.accessToken = "pk.eyJ1Ijoicmlja3kwMzIxIiwiYSI6ImNqZXp1MmVsaDBmdWEyeG9oNWlueHR2b3gifQ.C2Ej5Uix1g5985Myju82Sg";

    // console.log('called it!');
    // console.log(string);
    // console.log(location);

    //string is the type of marker

    //location is the array coords
    let bckGround;


    if (string === "hotel") {
        bckGround = "url(http://i.imgur.com/D9574Cu.png)";

    }
    else if (string === 'activity') {
        console.log('success');
        bckGround = "url(http://i.imgur.com/WbMOfMl.png)";

    }
    else if (string === 'restaurant') {
        bckGround = "url(http://i.imgur.com/cqR6pUI.png)";
    }

    // return {
    //     bckGround, location};

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = bckGround;
    console.log(markerDomEl, "dom El");

    let markerNew = new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);
    // console.log(markerNew, 'look here');
    // return {markerDomEl, location}
}


module.exports = oneFunction
