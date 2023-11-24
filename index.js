window.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const currentNumberInput = document.getElementById('currentNumber');
    const convertBtn = document.getElementById('convertBtn');
    const resultOutput = document.getElementById('result');
  
    // Add event listener to the convert button
    convertBtn.addEventListener('click', convertToNextNumber);
  
    // Function to convert currentNumber to the next number
    function convertToNextNumber() {
      const currentNumber = parseFloat(currentNumberInput.value);
  
      if (isNaN(currentNumber)) {
        resultOutput.value = 'Invalid input';
        return;
      }
  
      const nextNumber = currentNumber + 1;
      resultOutput.value = nextNumber.toFixed(2);
    }
  });