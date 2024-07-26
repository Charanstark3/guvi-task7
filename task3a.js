//to compare two JON objects in JavaScript where the order of properties

var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "Person 1"};

function compareObjects(obj1, obj2) {
    // Get the keys of both objects
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);

    // Check if number of keys match
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    // Sort keys (to handle cases where keys are in different order)
    obj1Keys.sort();
    obj2Keys.sort();

    // Check if keys are identical
    if (!obj1Keys.every(function(value, index) { return value === obj2Keys[index]; })) {
        return false;
    }

    // Check if values are identical for each key
    for (var i = 0; i < obj1Keys.length; i++) {
        var key = obj1Keys[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all checks pass, objects are considered equal
    return true;
}

// Test the function
if (compareObjects(obj1, obj2)) {
    console.log("Objects have the same properties (order-independent).");
} else {
    console.log("Objects do not have the same properties.");
}

// Fetch the data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and print the required details
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subRegion = country.subregion;
      const population = country.population;
      
      console.log(`Name: ${name}, Region: ${region}, Sub-region: ${subRegion}, Population: ${population}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
