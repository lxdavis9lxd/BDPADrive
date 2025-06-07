// Main JavaScript file for client-side functionality

document.addEventListener('DOMContentLoaded', () => {
  console.log('BDPA Drive application loaded');
  
  // Example: Add event listeners to interactive elements
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(`Navigating to: ${link.getAttribute('href')}`);
    });
  });
});
