const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokeneasController');

router.get('/random', controller.randomJson);

module.exports = router;
