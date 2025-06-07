/**
 * Database Configuration
 * Note: This is a placeholder for when you decide to add a database
 */

module.exports = {
  development: {
    // MongoDB configuration
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/bdpadrive_dev',
    
    // MySQL configuration
    mysql: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'bdpadrive_dev'
    }
  },
  production: {
    // MongoDB configuration
    mongoURI: process.env.MONGO_URI,
    
    // MySQL configuration
    mysql: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    }
  },
  test: {
    // MongoDB configuration
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/bdpadrive_test',
    
    // MySQL configuration
    mysql: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'bdpadrive_test'
    }
  }
};
