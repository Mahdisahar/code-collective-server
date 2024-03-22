const express = require('express');
const router = express.Router();
const fs = require('fs');

function readCustomerData() {
	const customerData = fs.readFileSync('./data/customer.json');
	const customerDataJson = JSON.parse(customerData);
	return customerDataJson;
}


router.get('/', (req, res) => {
	const customerData = readCustomerData();
	res.status(200).send(customerData);

  });





  module.exports = router;