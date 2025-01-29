// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
  });
  
  // Contact form validation
document.querySelector('#contact form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form inputs
  const name = document.querySelector('#contact input[type="text"]').value.trim();
  const email = document.querySelector('#contact input[type="email"]').value.trim();
  const message = document.querySelector('#contact textarea').value.trim();

  // Validate inputs
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If validation passes, submit the form (you can replace this with an AJAX request)
  alert('Thank you for your message! We will get back to you soon.');
  this.reset(); // Clear the form
});

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
  // Update the year in the footer dynamically
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Blue Black Team. All rights reserved.`;