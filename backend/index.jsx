const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors()); // Allow cross-origin requests

// Middleware
app.use(express.json()); // Built-in JSON parser

// Load sneakers data
let sneakersData = [];
fs.readFile(path.join(__dirname, 'sneakers.json'), 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading sneakers data:', err);
    } else {
        sneakersData = JSON.parse(data);
    }
});

// Sample in-memory cart storage
let cart = [];

// Add to cart
app.post('/api/cart/add', (req, res) => {
    const item = req.body; // { id, brand, model, price, size }
    cart.push(item);
    res.status(200).json(cart);
});

// Get cart
app.get('/api/cart', (req, res) => {
    res.status(200).json(cart);
});

// Clear cart
app.delete('/api/cart', (req, res) => {
    cart = [];
    res.status(200).json(cart);
});

// Simulate payment processing
app.post('/api/payment', (req, res) => {
    const { cart } = req.body;
    res.status(200).json({ message: 'Payment successful', cart });
});

// Get sneakers data
app.get('/api/sneakers', (req, res) => {
    res.status(200).json(sneakersData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
