/**
 * Authentication Middleware
 */

// Ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  
  req.flash('error_msg', 'Please log in to access this resource');
  res.redirect('/login');
};

// Ensure user is an admin
exports.ensureAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  
  req.flash('error_msg', 'You do not have permission to access this resource');
  res.redirect('/');
};

// Ensure user is not authenticated (for login/register pages)
exports.ensureNotAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  
  res.redirect('/dashboard');
};
