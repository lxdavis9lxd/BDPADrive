/**
 * File Utilities
 */
const path = require('path');
const fs = require('fs');

/**
 * Get file size in a human-readable format
 * @param {number} bytes - File size in bytes
 * @param {number} decimals - Number of decimal places
 * @returns {string} Human-readable file size (e.g., '2.5 MB')
 */
exports.formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Get file extension from filename
 * @param {string} filename - The filename
 * @returns {string} The file extension
 */
exports.getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};

/**
 * Check if file type is allowed
 * @param {string} filename - The filename
 * @param {Array} allowedTypes - Array of allowed file extensions
 * @returns {boolean} True if file type is allowed
 */
exports.isAllowedFileType = (filename, allowedTypes = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt']) => {
  const ext = exports.getFileExtension(filename);
  return allowedTypes.includes(ext);
};

/**
 * Generate a unique filename
 * @param {string} originalname - Original filename
 * @returns {string} Unique filename
 */
exports.generateUniqueFilename = (originalname) => {
  const timestamp = Date.now();
  const ext = path.extname(originalname);
  const basename = path.basename(originalname, ext);
  return `${basename}-${timestamp}${ext}`;
};

/**
 * Ensure a directory exists, create it if it doesn't
 * @param {string} dirPath - Directory path
 */
exports.ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
