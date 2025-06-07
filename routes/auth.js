const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { ensureNotAuthenticated } = require('../middleware/auth');

// Login page
router.get('/login', ensureNotAuthenticated, (req, res) => {
  res.render('login', {
    title: 'Login',
    message: 'Log in to BDPA Drive'
  });
});

// Register page
router.get('/register', ensureNotAuthenticated, (req, res) => {
  res.render('register', {
    title: 'Register',
    message: 'Create a BDPA Drive Account'
  });
});

// Login process
router.post('/login', authController.login);

// Register process
router.post('/register', authController.register);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
