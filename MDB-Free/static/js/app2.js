
var API_KEY = 'pk.eyJ1IjoiZ3JpZmZpbmRpZW1lciIsImEiOiJjazJocHkwcWwwZ2lwM2xudmtpNmVsbmlpIn0.Zkr81-DiSjz-shnrTj8eAg'

var map = L.map("jobs_map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(map);

  d3.csv("./static/js/Top_30_Cities.csv").then(function(data) {
    console.log(parseFloat(data[0]))
    for (i =0; i<31;i++ ){
      var lat = parseFloat(data[i]['Lat'])
      var lng = parseFloat(data[i]['Lng'])
      // Creating a geoJSON layer with the retrieved data
      var marker = L.marker([lat,lng], {
        // Passing in our style object
        name: data[i].city,
        title: data[i].city
      }).addTo(map);
      marker.bindPopup("<h6>" + data[i]['City'] + "</h6>")

  }
});
