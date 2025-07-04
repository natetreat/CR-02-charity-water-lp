document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const amount = document.getElementById('amount');
  const message = document.getElementById('successMessage');

  if (name.value && email.value && amount.value > 0) {
    message.textContent = `Thank you, ${name.value}, for your generous donation of $${amount.value}!`;
    message.style.display = 'block';

    // Clear fields
    name.value = '';
    email.value = '';
    amount.value = '';
  } else {
    message.textContent = 'Please fill out all fields correctly.';
    message.style.display = 'block';
    message.style.color = 'red';
  }
});
