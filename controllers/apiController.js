/**
 * API Controllers
 */

// Get server status
exports.getStatus = (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
};

// Get all files
exports.getFiles = (req, res) => {
  // This would typically fetch from a database
  const files = [
    { id: 1, name: 'document.pdf', size: '2.5MB', lastModified: '2025-06-01' },
    { id: 2, name: 'image.jpg', size: '1.2MB', lastModified: '2025-06-02' },
    { id: 3, name: 'spreadsheet.xlsx', size: '3.1MB', lastModified: '2025-06-03' }
  ];
  
  res.json({ files });
};

// Upload a file
exports.uploadFile = (req, res) => {
  // This would typically save to a database
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'File name is required' });
  }
  
  // Mock response for demonstration
  res.status(201).json({
    message: 'File uploaded successfully',
    file: {
      id: Math.floor(Math.random() * 1000),
      name,
      size: '1.0MB',
      lastModified: new Date().toISOString().split('T')[0]
    }
  });
};
