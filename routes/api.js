const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// API status endpoint
router.get('/status', apiController.getStatus);

// File endpoints
router.get('/files', apiController.getFiles);
router.post('/files', apiController.uploadFile);

module.exports = router;
