// // script.js

// // Item data
// const items = [
//     { srNo: 1, name: "A.C.(SPLIT)-Outdoor Part", volumeCFT: 0.22 },
//     { srNo: 2, name: "A.C.(SPLIT)-Indoor Part", volumeCFT: 0.11 },
//     { srNo: 3, name: "A.C.(WINDOW)", volumeCFT: 0.22 },
//     { srNo: 4, name: "ALMIRAH", volumeCFT: 0.92 },
//     { srNo: 5, name: "AQUARIUM", volumeCFT: 0.22 },
//     // Add more items as necessary...
//     { srNo: 118, name: "WRITING TABLE", volumeCFT: 0.34 }
// ];

// // Populate the checkbox group with item names
// const itemCheckboxes = document.getElementById('itemCheckboxes');
// items.forEach(item => {
//     const checkboxDiv = document.createElement('div');
//     checkboxDiv.innerHTML = `
//         <input type="checkbox" id="item-${item.srNo}" value="${item.srNo}">
//         <label for="item-${item.srNo}">${item.name}</label>
//     `;
//     itemCheckboxes.appendChild(checkboxDiv);
// });

// // Update quantity inputs when checkboxes are selected
// itemCheckboxes.addEventListener('change', function() {
//     const selectedCheckboxes = Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]:checked'));
//     const quantityInputsContainer = document.getElementById('quantityInputsContainer');
    
//     // Clear previous inputs
//     quantityInputsContainer.innerHTML = '';

//     // Create input fields for each selected item
//     selectedCheckboxes.forEach(checkbox => {
//         const selectedItem = items.find(item => item.srNo == checkbox.value);
//         const inputDiv = document.createElement('div');
//         inputDiv.innerHTML = `
//             <label for="quantity-${selectedItem.srNo}">${selectedItem.name} Quantity:</label>
//             <input type="number" id="quantity-${selectedItem.srNo}" placeholder="Quantity" value="1" min="1">
//         `;
//         quantityInputsContainer.appendChild(inputDiv);
//     });
// });

// // Calculate volume when button is clicked
// document.getElementById('calculate').onclick = function() {
//     const selectedCheckboxes = Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]:checked'));
//     const resultsContainer = document.getElementById('resultsContainer');
//     resultsContainer.innerHTML = '';

//     let totalVolumeCFT = 0;
//     let totalVolumeCBM = 0;

//     // Calculate total volume for each selected item
//     selectedCheckboxes.forEach(checkbox => {
//         const selectedItem = items.find(item => item.srNo == checkbox.value);
//         const quantityInput = document.getElementById(`quantity-${selectedItem.srNo}`);
//         const quantity = parseInt(quantityInput.value);

//         if (isNaN(quantity) || quantity <= 0) {
//             alert(`Please enter a valid quantity for ${selectedItem.name}.`);
//             return;
//         }

//         const itemVolumeCFT = selectedItem.volumeCFT * quantity;
//         const itemVolumeCBM = itemVolumeCFT * 0.028;

//         totalVolumeCFT += itemVolumeCFT;
//         totalVolumeCBM += itemVolumeCBM;

//         // Display individual item results
//         const itemResult = document.createElement('p');
//         itemResult.textContent = `${selectedItem.name}: ${itemVolumeCFT.toFixed(2)} CFT, ${itemVolumeCBM.toFixed(2)} CBM`;
//         resultsContainer.appendChild(itemResult);
//     });

//     // Display total results
//     const totalResult = document.createElement('h3');
//     totalResult.textContent = `Total Volume: ${totalVolumeCFT.toFixed(2)} CFT, ${totalVolumeCBM.toFixed(2)} CBM`;
//     resultsContainer.appendChild(totalResult);
// };

// // Reset functionality
// document.getElementById('reset').onclick = function() {
//     // Clear the selection and input
//     Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]')).forEach(checkbox => checkbox.checked = false); // Reset selection
//     document.getElementById('quantityInputsContainer').innerHTML = ''; // Clear quantity inputs
//     document.getElementById('resultsContainer').innerHTML = ''; // Clear results
// };




// Item data
const items = [
    { srNo: 1, name: "A.C.(SPLIT)-Outdoor Part", volumeCFT: 0.22 },
    { srNo: 2, name: "A.C.(SPLIT)-Indoor Part", volumeCFT: 0.11 },
    { srNo: 3, name: "A.C.(WINDOW)", volumeCFT: 0.22 },
    { srNo: 4, name: "ALMIRAH", volumeCFT: 0.92 },
    { srNo: 5, name: "AQUARIUM", volumeCFT: 0.22 },
    { srNo: 118, name: "WRITING TABLE", volumeCFT: 0.34 }
];

// Populate the checkbox group with item names
const itemCheckboxes = document.getElementById('itemCheckboxes');
items.forEach(item => {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.style.display = 'flex'; // Use flexbox for horizontal alignment
    checkboxDiv.style.alignItems = 'center'; // Center items vertically

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item-${item.srNo}`;
    checkbox.value = item.srNo;

    const label = document.createElement('label');
    label.htmlFor = `item-${item.srNo}`;
    label.style.marginLeft = '10px'; // Add space between checkbox and label
    label.textContent = item.name;

    // Append the checkbox and label to the container
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    // Append the checkboxDiv to the main container
    itemCheckboxes.appendChild(checkboxDiv);
});

// Update quantity inputs when checkboxes are selected
itemCheckboxes.addEventListener('change', function() {
    const selectedCheckboxes = Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]:checked'));
    const quantityInputsContainer = document.getElementById('quantityInputsContainer');
    
    // Clear previous inputs
    quantityInputsContainer.innerHTML = '';

    // Create input fields for each selected item
    selectedCheckboxes.forEach(checkbox => {
        const selectedItem = items.find(item => item.srNo == checkbox.value);
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `
            <label for="quantity-${selectedItem.srNo}">${selectedItem.name} Quantity:</label>
            <input type="number" id="quantity-${selectedItem.srNo}" placeholder="Quantity" value="1" min="1">
        `;
        quantityInputsContainer.appendChild(inputDiv);
    });
});

// Calculate volume when button is clicked
document.getElementById('calculate').onclick = function() {
    const selectedCheckboxes = Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]:checked'));
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    let totalVolumeCFT = 0;
    let totalVolumeCBM = 0;

    // Calculate total volume for each selected item
    selectedCheckboxes.forEach(checkbox => {
        const selectedItem = items.find(item => item.srNo == checkbox.value);
        const quantityInput = document.getElementById(`quantity-${selectedItem.srNo}`);
        const quantity = parseInt(quantityInput.value);

        if (isNaN(quantity) || quantity <= 0) {
            alert(`Please enter a valid quantity for ${selectedItem.name}.`);
            return;
        }

        const itemVolumeCFT = selectedItem.volumeCFT * quantity;
        const itemVolumeCBM = itemVolumeCFT * 0.028;

        totalVolumeCFT += itemVolumeCFT;
        totalVolumeCBM += itemVolumeCBM;

        // Display individual item results
        const itemResult = document.createElement('p');
        itemResult.textContent = `${selectedItem.name}: ${itemVolumeCFT.toFixed(2)} CFT, ${itemVolumeCBM.toFixed(2)} CBM`;
        resultsContainer.appendChild(itemResult);
    });

    // Display total results
    const totalResult = document.createElement('h3');
    totalResult.textContent = `Total Volume: ${totalVolumeCFT.toFixed(2)} CFT, ${totalVolumeCBM.toFixed(2)} CBM`;
    resultsContainer.appendChild(totalResult);
};

// Reset functionality
document.getElementById('reset').onclick = function() {
    // Clear the selection and input
    Array.from(itemCheckboxes.querySelectorAll('input[type="checkbox"]')).forEach(checkbox => {
        checkbox.checked = false; // Reset selection
    });
    
    document.getElementById('quantityInputsContainer').innerHTML = ''; // Clear quantity inputs
    document.getElementById('resultsContainer').innerHTML = ''; // Clear results
};