const express = require('express');
const router = express.Router();
const fs = require('fs');

function readCheckoutData() {
	const checkoutInfoData = fs.readFileSync('./data/checkout.json');
	const customercheckoutJson = JSON.parse(checkoutInfoData);
	return customercheckoutJson;
}


router.get('/', (req, res) => {
	const checkoutData = readCheckoutData();
	res.status(200).send(checkoutData);

  });

  module.exports = router;

