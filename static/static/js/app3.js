// @TODO: Complete the following function that builds the metadata panel
function constructMetadata(cities) {

    // Use `d3.json` to fetch the metadata for a sample
    d3.json(`/metadata/${cities}`).then((data) => {

        // Use d3 to select the panel with id of `#sample-metadata`
        let selectManipulatePanel = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        selectManipulatePanel.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata
        Object.entries(data).forEach(([key, value]) => {
            selectManipulatePanel.append("h6").text(`${key}: ${value}`);
        });
    });
};

function constructMetadata2(cities) {

    // Use `d3.json` to fetch the metadata for a sample
    d3.json(`/metadata/${cities}`).then((data) => {

        // Use d3 to select the panel with id of `#sample-metadata`
        let selectManipulatePanel = d3.select("#sample-metadata2");

        // Use `.html("") to clear any existing metadata
        selectManipulatePanel.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata
        Object.entries(data).forEach(([key, value]) => {
            selectManipulatePanel.append("h6").text(`${key}: ${value}`);
        });
    });
};

function init() {

    // Grab a Reference to the Dropdown Select Element
    let dropdownSelect = d3.select("#selDataset");
    
    // Use the List of Sample Names to Populate the Select Options
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            dropdownSelect
                .append("option")
                .text(sample)
                .property("value", sample)
        });
    
        // Use the First Sample from the List to Build Initial Plots
        let firstSample = sampleNames[0];
        constructMetadata(firstSample);
    });
};
    

function init2() {

    // Grab a Reference to the Dropdown Select Element
    let dropdownSelect2 = d3.select("#selDataset2");
    
    // Use the List of Sample Names to Populate the Select Options
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            if (sample !== sampleNames[18]) {
                dropdownSelect2
                    .append("option")
                    .text(sample)
                    .property("value", sample)
            }else
                dropdownSelect2
                    .append("option")
                    .text(sample)
                    .property("value", sample)
                    .attr('selected', true)

                
        });
        console.log(sampleNames[18])
        // Use the First Sample from the List to Build Initial Plots
        let secondSample = sampleNames[18];
        constructMetadata2(secondSample);
    });
};




function collectNewData(newSample) {

    // Fetch New Data Each Time a New Sample is Selected
    constructMetadata(newSample);
};
    
// Initialize the Dashboard
init();
init2();

