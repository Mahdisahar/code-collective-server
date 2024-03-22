const express = require('express');
const cores = require('cors');
const app = express();

// imports videos routes module 
const customerRoute = require('./routes/customer');
const checkoutRoute = require('./routes/checkout');

// loading variable from .env
require('dotenv').config({path: './.env'});

const PORT = process.env.PORT;

// Middleware setup
app.use(express.static('public'));
app.use(cores());
app.use(express.json());

// Route Handling
app.use('/customer', customerRoute);
app.use('/checkout', checkoutRoute)


// The app is listening on port 8085
app.listen(PORT, ()=> {
console.log(`server is running on port :${PORT}`);
});