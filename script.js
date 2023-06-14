let string = ""; // Initialize an empty string to store the calculator input

// Get all the buttons on the calculator
let buttons = document.querySelectorAll('.button');

// Iterate over each button
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      // If the clicked button is '=', evaluate the input string
      string = eval(string); // Note: Using eval can be a security risk, consider alternative approaches
      document.querySelector('input').value = string; // Display the result in the input field
    } else if (e.target.innerHTML === 'AC') {
      // If the clicked button is 'AC', clear the input string
      string = "";
      document.querySelector('input').value = string; // Clear the input field
    } else {
      // For other buttons, concatenate the clicked button's value to the input string
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string; // Update the input field with the new string
    }
  });
});
