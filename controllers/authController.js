/**
 * Authentication Controller
 */
const User = require('../models/user');

// Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Validate inputs
    if (!username || !password) {
      req.flash('error_msg', 'Please provide both username and password');
      return res.redirect('/login');
    }
    
    // Find user
    const user = await User.getUserByUsername(username);
    
    if (!user) {
      req.flash('error_msg', 'Invalid username or password');
      return res.redirect('/login');
    }
    
    // In a real application, you would use bcrypt to compare passwords
    if (user.password !== password) {
      req.flash('error_msg', 'Invalid username or password');
      return res.redirect('/login');
    }
    
    // Create user session
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    };
    
    req.flash('success_msg', 'You are now logged in');
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    req.flash('error_msg', 'An error occurred during login');
    res.redirect('/login');
  }
};

// Register
exports.register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const errors = [];
    
    // Validate inputs
    if (!username || !email || !password || !confirmPassword) {
      errors.push({ msg: 'Please fill in all fields' });
    }
    
    if (password !== confirmPassword) {
      errors.push({ msg: 'Passwords do not match' });
    }
    
    if (password.length < 6) {
      errors.push({ msg: 'Password should be at least 6 characters' });
    }
    
    // Check if user already exists
    const existingUser = await User.getUserByEmail(email);
    if (existingUser) {
      errors.push({ msg: 'Email is already registered' });
    }
    
    if (errors.length > 0) {
      return res.render('register', {
        title: 'Register',
        errors,
        username,
        email
      });
    }
    
    // Create user
    await User.createUser({ username, email, password });
    
    req.flash('success_msg', 'You are now registered and can log in');
    res.redirect('/login');
  } catch (error) {
    console.error('Registration error:', error);
    req.flash('error_msg', 'An error occurred during registration');
    res.redirect('/register');
  }
};

// Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.redirect('/');
    }
    res.redirect('/login');
  });
};
