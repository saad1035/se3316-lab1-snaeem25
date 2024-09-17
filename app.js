// Orchid data with their botanical names and provinces
const orchids = [
    { name: "Amerorchis Rotundifolia", provinces: ["Newfoundland and Labrador", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"]},
    { name: "Calypso Bulbosa", provinces: ["Newfoundland and Labrador", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"]},
    { name: "Cypripedium Reginae", provinces: ["Newfoundland and Labrador", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan"]},
    { name: "Epipactis Gigantea", provinces: ["British Columbia"]},
    { name: "Galearis Spectabilis", provinces: ["New Brunswick", "Quebec", "Ontario"]},
    { name: "Isotria Verticillata", provinces: ["Ontario"]},
    { name: "Listera Australis", provinces: ["Nova Scotia", "Ontario", "Quebec"]},
    { name: "Listera Ovata", provinces: ["Ontario"]},
    { name: "Piperia Elegans", provinces: ["British Columbia"]},
    { name: "Piperia Maritima", provinces: ["British Columbia"]},
    { name: "Platanthera Ciliaris", provinces: ["Ontario"]},
    { name: "Platanthera Lacera", provinces: ["Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Ontario", "Manitoba"]},
    { name: "Spiranthes Casei", provinces: ["Nova Scotia", "Quebec", "Ontario"]},
    { name: "Spiranthes Lucida", provinces: ["Ontario", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Ontario"]},
    { name: "Spiranthes Ochroleuca", provinces: ["Newfoundland and Labrador", "Nova Scotia", "Ontario"]},
];
    
// Function to validate the input entered in the search field
// Ensures that input is between 1-20 characters and only contains upper case and lower case letters A-Z
function validateInput(input) {
    const regex = /^[a-zA-Z]{1,20}$/;
    return regex.test(input);
}
    
// Function to search for orchids by botanical names
function searchOrchid() {

    // Get search field value and remove leading/trailing spaces
    const field = document.getElementById('searchBox').value.trim(); 
    
    // Validates input using validateInput function
    if (!validateInput(field)) {
        alert("Please enter a valid botanical name (up to 20 characters, A-Z upper or lower case)");
        return;
    }
    
    // Filter the orchid list to find matches based on the input
    const match = orchids.filter(orchid => orchid.name.toLowerCase().includes(field.toLowerCase()));
    
    // Makes sure the matches give at most 5 orchids
    const limitMatch = match.slice(0, 5);
    
    let message;
    
    // If matches are found, join the names of the orchids into string
    if (limitMatch.length > 0) {
        message = limitMatch.map(orchid => orchid.name).join(', ');
    }
    else {
        message = "No matches found."
    }
    
    // Display result using alert
    alert(`Matches: ${message}`);
}
    

// Function to filter orchids based on province selected
function filterByProvince() {

    // Gets the selected province
    const provinceField = document.getElementById('provinceSelect').value;
    
    // Checks if a province has been selected, otherwise display an alert
    if (!provinceField) {
        alert('Please select a province.');
        return;
    }

    // Filter the orchids array to find orchids found in the selected province
    const match = orchids.filter(orchid => orchid.provinces.includes(provinceField));
    
    let message;
    
    // If matches are found, join the names of the orchids into a string
    if (match.length > 0) {
        message = match.map(orchid => orchid.name).join(', ');
    }
    else {
        message = "No orchids found in this province"
    }
    
    // Display result using alert
    alert(`Orchids in ${provinceField}: ${message}`);
}

