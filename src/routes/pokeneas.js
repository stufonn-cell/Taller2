const express = require('express');
const router = express.Router();
const pokeneasController = require('../controllers/pokeneasController');

router.get('/random', pokeneasController.randomJson);

module.exports = router;
