// Get a reference to the table
var tbody = d3.select("#jobs_table").select("tbody");

// from data.js
var tableData = data;
console.log(data);
// Select the button
// var button = d3.select("#filter-btn");

// button.on("click", function () {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
//   // clear the existing output
//   tbody.html("");
//   inputElement.property("value","");

//   console.log(filteredData);

// function test(){


  // Step 5: Use d3 to update each cell's text with
  // sighting report values (datetime, city, state, country, shape, durationMinutes, comments )
  tableData.forEach(function (tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
<<<<<<< Updated upstream:static/static/js/app.js
    var cell=row.append("td")
      cell.html(`<a href='http://${tableData.href}'>${tableData.job_title}</a>`)
    Object.entries(tableData).forEach(function ([key, value]) {
      console.log(key, value);
      if (key !=="href" && key!=="job_title") {
=======
    var cell = row.append("td");
    cell("html",`<a href='${tableData.href}'>${tableData.job_title}</a`)

    Object.entries(tableData).forEach(function ([key, value]) {
      console.log(key, value);
      if (key !=="job_title" && key !=="href") {
>>>>>>> Stashed changes:MDB-Free/static/js/app.js
        var cell = row.append("td");
        cell.text(value)
        
      };
      
      


      // tableData.forEach(function (tableData) {
      //   console.log(tableData);
      //   var row = tbody.append("tr");
      //   // var cell=row.append("td")
      //   //   cell.html(`<a href='http://${tableData.href}'>${tableData.job_title}</a>`)
      //   Object.entries(tableData).forEach(function ([key, value]) {
      //     console.log(key, value);
      //     // if (key !=="href" && "job_title") {
      //       var cell = row.append("td");
      //       cell.text(value)
      //     // }

      // console.log(key[5]);
      // Append a cell to the row for each value
      // in the weather report object
      // var cell = row.append("td");
      //   cell.text(value);

    });
    
  });
  $('#jobs_table').DataTable();
$('.dataTables_length').addClass('bs-select');

// }
  

// function handleChange() {
//     var tableData = data;
//     d3.select("tbody").selectAll("tr").remove();
//     var inputElement = d3.select("#job");
//     var date = inputElement.property("value");
//     console.log(date)
//     if (date !== "") {
//       var tableData = tableData.filter(ufo => ufo.datetime === date);
//     }
//     var inputElement = d3.select("#city");
//     var city = inputElement.property("value").toLowerCase();
//     if (city !== "") {
//       var tableData = tableData.filter(ufo => ufo.city === city);
//     }
//     var inputElement = d3.select("#state");
//     var state = inputElement.property("value").toLowerCase();
//     if (state !== "") {
//       var tableData = tableData.filter(ufo => ufo.state === state);
//     }
//     var inputElement = d3.select("#country");
//     var country = inputElement.property("value").toLowerCase();
//     if (country !== "") {
//       var tableData = tableData.filter(ufo => ufo.country === country);
//     }
//     var inputElement = d3.select("#shape");
//     var shape = inputElement.property("value").toLowerCase();
//     if (shape !== "") {
//       var tableData = tableData.filter(ufo => ufo.shape === shape);
//     }
//     tableData.forEach((tableData) => {
//         var row = tbody.append("tr");
//         Object.entries(tableData).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });
//   }
  
//     search.on("change", handleChange);
  
  
