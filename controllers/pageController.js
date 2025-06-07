/**
 * Page Controllers
 */

// Render the home page
exports.getHomePage = (req, res) => {
  res.render('index', { 
    title: 'BDPA Drive',
    message: 'Welcome to BDPA Drive!' 
  });
};

// Render the about page
exports.getAboutPage = (req, res) => {
  res.render('about', { 
    title: 'About BDPA Drive',
    message: 'About BDPA Drive' 
  });
};

// Render the contact page
exports.getContactPage = (req, res) => {
  res.render('contact', { 
    title: 'Contact Us',
    message: 'Contact BDPA Drive' 
  });
};

// Process contact form submission
exports.postContactForm = (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate inputs
  if (!name || !email || !subject || !message) {
    req.flash('error_msg', 'Please fill in all fields');
    return res.redirect('/contact');
  }
  
  // In a real application, you would send an email or save to a database
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Set success flash message and redirect
  req.flash('success_msg', 'Your message has been sent successfully!');
  res.redirect('/contact');
};
