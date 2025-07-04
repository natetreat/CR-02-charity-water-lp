// This script makes the "Fund a Future" button go to a different HTML file when clicked

// Wait until the page is fully loaded
window.onload = function() {
  // Find the button using its ID
  var button = document.getElementById('fundButton');

  // Add a click event to the button
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the link from doing its default action

    // Go to a different HTML file (change 'thankyou.html' to your file name)
    window.location.href = 'donate.html';
  });
};