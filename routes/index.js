const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const { ensureAuthenticated } = require('../middleware/auth');
const File = require('../models/file');

// Home page route
router.get('/', pageController.getHomePage);

// About page route
router.get('/about', pageController.getAboutPage);

// Contact page routes
router.get('/contact', pageController.getContactPage);
router.post('/contact', pageController.postContactForm);

// Dashboard route (protected)
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
  try {
    const files = await File.getAllFiles();
    res.render('dashboard', {
      title: 'Dashboard',
      files
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    req.flash('error_msg', 'An error occurred while loading the dashboard');
    res.redirect('/');
  }
});

module.exports = router;
