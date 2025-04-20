// Wait for the DOM to load
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get values from input fields
    const costPerLiter = parseFloat(document.getElementById('cost').value);
    const litersPurchased = parseFloat(document.getElementById('liters').value);
  
    // Calculate total cost
    const totalCost = costPerLiter * litersPurchased;
  
    // Display the result, formatted to 2 decimal places
    document.getElementById('total').textContent = `Total: £${totalCost.toFixed(2)}`;
    
  });
  