/**
 * File Model
 * In a real application, this would interact with a database
 */

// Mock data store
const files = [
  { id: 1, name: 'document.pdf', size: '2.5MB', lastModified: '2025-06-01' },
  { id: 2, name: 'image.jpg', size: '1.2MB', lastModified: '2025-06-02' },
  { id: 3, name: 'spreadsheet.xlsx', size: '3.1MB', lastModified: '2025-06-03' }
];

// Get all files
exports.getAllFiles = () => {
  return Promise.resolve(files);
};

// Get file by ID
exports.getFileById = (id) => {
  const file = files.find(file => file.id === parseInt(id));
  return Promise.resolve(file || null);
};

// Create a new file
exports.createFile = (fileData) => {
  const newFile = {
    id: Math.floor(Math.random() * 1000),
    name: fileData.name,
    size: fileData.size || '1.0MB',
    lastModified: new Date().toISOString().split('T')[0]
  };
  
  files.push(newFile);
  return Promise.resolve(newFile);
};

// Update a file
exports.updateFile = (id, fileData) => {
  const index = files.findIndex(file => file.id === parseInt(id));
  
  if (index === -1) {
    return Promise.resolve(null);
  }
  
  const updatedFile = {
    ...files[index],
    ...fileData,
    id: parseInt(id)
  };
  
  files[index] = updatedFile;
  return Promise.resolve(updatedFile);
};

// Delete a file
exports.deleteFile = (id) => {
  const index = files.findIndex(file => file.id === parseInt(id));
  
  if (index === -1) {
    return Promise.resolve(false);
  }
  
  files.splice(index, 1);
  return Promise.resolve(true);
};
