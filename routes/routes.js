const express = require('express');
const router = express.Router();
const { index, upfile } = require('../controllers/controller.js');
const multer = require('multer');
const upload = multer();

router.get('/index', index);

router.post('/api/fileanalyse', upload.single('upfile'), upfile);

module.exports = router;