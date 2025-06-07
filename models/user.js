/**
 * User Model
 * In a real application, this would interact with a database
 */

// Mock data store
const users = [
  { 
    id: 1, 
    username: 'admin', 
    email: 'admin@example.com', 
    password: 'password123', // In a real app, this would be hashed
    role: 'admin',
    createdAt: '2025-06-01'
  },
  { 
    id: 2, 
    username: 'user', 
    email: 'user@example.com', 
    password: 'password123', // In a real app, this would be hashed
    role: 'user',
    createdAt: '2025-06-02'
  }
];

// Get all users
exports.getAllUsers = () => {
  // Remove sensitive information like passwords
  return Promise.resolve(users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }));
};

// Get user by ID
exports.getUserById = (id) => {
  const user = users.find(user => user.id === parseInt(id));
  
  if (!user) {
    return Promise.resolve(null);
  }
  
  // Remove sensitive information
  const { password, ...userWithoutPassword } = user;
  return Promise.resolve(userWithoutPassword);
};

// Get user by username
exports.getUserByUsername = (username) => {
  const user = users.find(user => user.username === username);
  return Promise.resolve(user || null);
};

// Get user by email
exports.getUserByEmail = (email) => {
  const user = users.find(user => user.email === email);
  return Promise.resolve(user || null);
};

// Create a new user
exports.createUser = (userData) => {
  const newUser = {
    id: users.length + 1,
    username: userData.username,
    email: userData.email,
    password: userData.password, // In a real app, this would be hashed
    role: userData.role || 'user',
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  users.push(newUser);
  
  // Return user without password
  const { password, ...userWithoutPassword } = newUser;
  return Promise.resolve(userWithoutPassword);
};

// Update a user
exports.updateUser = (id, userData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  
  if (index === -1) {
    return Promise.resolve(null);
  }
  
  const updatedUser = {
    ...users[index],
    ...userData,
    id: parseInt(id)
  };
  
  users[index] = updatedUser;
  
  // Return user without password
  const { password, ...userWithoutPassword } = updatedUser;
  return Promise.resolve(userWithoutPassword);
};

// Delete a user
exports.deleteUser = (id) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  
  if (index === -1) {
    return Promise.resolve(false);
  }
  
  users.splice(index, 1);
  return Promise.resolve(true);
};
