// Item data
const items = [
    { srNo: 1, name: "A.C.(SPLIT)-Outdoor Part", volumeCFT: 8 },
    { srNo: 2, name: "A.C.(SPLIT)-Indoor Part", volumeCFT: 4 },
    { srNo: 3, name: "A.C.(WINDOW)", volumeCFT: 8 },
    { srNo: 4, name: "ALMIRAH", volumeCFT: 33 },
    { srNo: 5, name: "AQUARIUM", volumeCFT: 8 },
    { srNo: 118, name: "WRITING TABLE", volumeCFT: 12 }
];

// Populate the quantity inputs for each item
const quantityInputsContainer = document.getElementById('quantityInputsContainer');

items.forEach(item => {
    const inputDiv = document.createElement('div');
    inputDiv.style.display = 'flex';
    inputDiv.style.alignItems = 'center';
    inputDiv.style.margin = '10px 0'; // Add margin between each item

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = `quantity-${item.srNo}`;
    quantityInput.placeholder = "Quantity";
    quantityInput.value = 0; // Set default quantity to 0
    quantityInput.min = 0; // Allow zero as a minimum value
    quantityInput.style.width = '50px';
    quantityInput.style.margin = '0 5px';
    quantityInput.style.padding = '5px'; // Add padding inside the input

    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.style.margin = '0 5px'; // Add margin around buttons
    decrementButton.style.padding = '5px 10px'; // Add padding inside the button
    decrementButton.onclick = function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            quantityInput.value = quantity - 1;
        }
    };

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.style.margin = '0 5px'; // Add margin around buttons
    incrementButton.style.padding = '5px 10px'; // Add padding inside the button
    incrementButton.onclick = function() {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    };

    // Create a label and position it to the right of the buttons
    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = `${item.name} Quantity:`;
    quantityLabel.style.marginLeft = '10px'; // Add space between label and buttons
    quantityLabel.style.padding = '5px'; // Add padding around the label

    // Append elements to the inputDiv in the desired order
    inputDiv.appendChild(decrementButton);
    inputDiv.appendChild(quantityInput);
    inputDiv.appendChild(incrementButton);
    inputDiv.appendChild(quantityLabel); // Label is now at the end

    // Append the inputDiv to the quantity inputs container
    quantityInputsContainer.appendChild(inputDiv);
});

// Calculate volume when button is clicked
document.getElementById('calculate').onclick = function() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    let totalVolumeCFT = 0;
    let totalVolumeCBM = 0;
    let resultDetails = ''; // To store item names and quantities

    // Calculate total volume for each item
    items.forEach(item => {
        const quantityInput = document.getElementById(`quantity-${item.srNo}`);
        const quantity = parseInt(quantityInput.value);
        
        totalVolumeCFT += item.volumeCFT * quantity;

        // Add item name and quantity to result details
        if (quantity > 0) {
            resultDetails += `${item.name}: ${quantity}<br>`;
        }
    });

    // Convert total volume to cubic meters (1 CFT = 0.0283168 CBM)
    totalVolumeCBM = totalVolumeCFT * 0.028;

    // Display results
    resultsContainer.innerHTML = `
        <p>${resultDetails}</p>
        <p><b>Total Volume: ${totalVolumeCFT.toFixed(2)} CFT</b></p>
        <p><b>Total Volume: ${totalVolumeCBM.toFixed(2)} CBM </b></p>
    `;
};

// Reset functionality
document.getElementById('reset').onclick = function() {
    // Clear all quantity inputs and reset to zero
    items.forEach(item => {
        const quantityInput = document.getElementById(`quantity-${item.srNo}`);
        quantityInput.value = 0; // Reset quantity to 0
    });

    // Clear the results section
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results
};
