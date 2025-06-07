const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Import custom middleware
const { requestLogger, viewVariables } = require('./middleware/common');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(helmet({ contentSecurityPolicy: false })); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(requestLogger); // Custom request logger
app.use(viewVariables); // Add common view variables

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'bdpadrive-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Set up flash messages
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Set up EJS as the view engine with layouts
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Import routes
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render('error', { 
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.',
    error: { status: 404 }
  });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).render('error', {
    title: 'Error',
    message: err.message || 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
