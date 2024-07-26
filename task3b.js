// Fetch the data from the REST Countries API
// Define an async function to fetch and display country details
async function fetchCountryDetails() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all'); // Fetch data from the API
      const data = await response.json(); // Convert response to JSON
  
      // Loop through the data and log the details
      data.forEach(country => {
        console.log(`Name: ${country.name.common}, Region: ${country.region}, Subregion: ${country.subregion}, Population: ${country.population}`);
      });
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  }
  
  // Call the function
  fetchCountryDetails();
  
