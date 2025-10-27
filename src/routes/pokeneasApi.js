const express = require('express');
const router = express.Router();
const { getRandomPokenea } = require('../controllers/api/pokeneasControllerAPI');

router.get('/random', getRandomPokenea);

module.exports = router;
