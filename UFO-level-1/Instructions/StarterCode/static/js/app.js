// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(tableData){
    //clears out existing tables
    tbody.html("");
    console.log(tableData);

    tableData.forEach(function(ufoData){
        console.log(ufoData);
        let row = tbody.append("tr");

        Object.entries(ufoData).map(([key,value]) => {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
            cell.text();
    });
  });
}


var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    let filteredData = tableData;

    if (inputValue){
        
        filteredData = filteredData.filter(date => date.datetime === inputValue);

        console.log(filteredData);  
    }

    buildTable(filteredData);
});

buildTable(tableData);
