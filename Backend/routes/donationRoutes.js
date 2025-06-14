const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/submit', donationController.submitDonation);

module.exports = router;