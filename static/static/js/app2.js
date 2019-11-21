
var API_KEY = 'pk.eyJ1IjoiZW1pbG91MTk4MSIsImEiOiJjazM3ejg4eXgwMnBwM2NtZ3Z1NXE2bDF5In0.dtzeOBO9XqFAggTb9ID8-Q'

var map = L.map("jobs_map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(map).on("click", function() {
    // get value of selection
    var value = d3.select(this).attr("title");
    console.log('YOU DID IT!')
    console.log(value)
  });

  var myFeatureGroup = L.featureGroup().addTo(map).on("click", groupClick);

  d3.csv("../static/static/js/Top_30_Cities.csv").then(function(data) {
    console.log(data[0])
    for (i =0; i<data.length;i++ ){
      var lat = parseFloat(data[i]['Lat'])
      var lng = parseFloat(data[i]['Lng'])
      // Creating a geoJSON layer with the retrieved data
      var marker = L.marker([lat,lng], {
        // Passing in our style object
        name: data[i]['City'],
        title: data[i]['City']
      }).addTo(myFeatureGroup)
      .bindPopup("<h6 class = 'marker'>" + data[i]['City'] + "</h6>")
      marker.name = data[i]['City'];

  }
});
searchBar = d3.select('.form-control')
console.log(myFeatureGroup)
function groupClick(event) {
  document.getElementsByClassName('form-control').property('value',event.layer.name ); 
  console.log(event.layer.name)

}
