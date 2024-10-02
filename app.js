document.addEventListener('DOMContentLoaded', function() {

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

    function filterOrchids() {

        const provinceCheckboxes = document.querySelectorAll('.province-checkbox');
    
        let selectedProvinces = [];
        provinceCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedProvinces.push(checkbox.value);
            }
        });

        const query = document.getElementById('searchBox').value.trim();

        if (!validateInput(query) || query === "") {
            clearResults();
            return;
        }
    
        const filteredOrchids = orchids.filter(orchid => 
            orchid.name.toLowerCase().includes(query.toLowerCase()) && selectedProvinces.some(province => orchid.provinces.includes(province))
        );
    
        displayOrchidList(filteredOrchids);
    }

    function displayOrchidList(filteredOrchids) {

        clearResults();
    
        if (filteredOrchids.length === 0) {
            return;
        }

        const block = document.createElement('div');
        block.id = 'resultsBlock'
        const list = document.createElement('ul');
        block.appendChild(list);
    
        filteredOrchids.forEach(orchid => {
            const listItem = document.createElement('li');

            const name = document.createElement('strong');
            name.textContent = orchid.name;
            listItem.appendChild(name);

            const province = document.createElement('p');
            province.textContent = orchid.provinces;
            listItem.appendChild(province);
        
            list.appendChild(listItem);
        });

        const searchField = document.getElementById('searchField');
        searchField.parentNode.insertBefore(block, searchField.nextSibling);
    }

    function clearResults() {
        let existingResult = document.getElementById('resultsBlock');
        if (existingResult) {
            existingResult.remove();
        }
    }

    document.getElementById('searchBox').addEventListener('input', filterOrchids);

    document.querySelectorAll('.province-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', filterOrchids); 
    })

});
