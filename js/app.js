// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
  // clear the existing output
  tbody.html("");
  inputElement.property("value","");

  console.log(filteredData);
  // Step 5: Use d3 to update each cell's text with
  // sighting report values (datetime, city, state, country, shape, durationMinutes, comments )
  filteredData.forEach(function (tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

