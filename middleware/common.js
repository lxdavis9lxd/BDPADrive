/**
 * Custom middleware to log request details
 */
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

/**
 * Middleware to add common variables to all views
 */
const viewVariables = (req, res, next) => {
  res.locals.currentYear = new Date().getFullYear();
  res.locals.appName = 'BDPA Drive';
  res.locals.currentPath = req.path;
  next();
};

module.exports = {
  requestLogger,
  viewVariables
};
