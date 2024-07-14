// Load required modules
const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');

// Create an instance of the express application
const app = express();
const PORT = 5000;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Load sneakers data from the JSON file
let sneakersData = [];
fs.readFile(path.join(__dirname, 'sneakers.json'), 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading sneakers data:', err);
    } else {
        sneakersData = JSON.parse(data);
    }
});

// In-memory storage for the shopping cart
let cart = [];

// API endpoint to add an item to the cart
app.post('/api/cart/add', (req, res) => {
    const item = req.body; // { id, brand, model, price, size }
    cart.push(item);
    res.status(200).json(cart);
});

// API endpoint to get the current cart contents
app.get('/api/cart', (req, res) => {
    res.status(200).json(cart);
});

// API endpoint to clear the cart
app.delete('/api/cart', (req, res) => {
    cart = [];
    res.status(200).json(cart);
});

// API endpoint to simulate payment processing
app.post('/api/payment', (req, res) => {
    const { cart } = req.body;
    res.status(200).json({ message: 'Payment successful', cart });
});

// Get sneakers data
app.get('/api/sneakers', (req, res) => {
    res.status(200).json(sneakersData);
});

// API endpoint to get sneakers data by category
app.get('/api/sneakers/:category', (req, res) => {
    const { category } = req.params;

    const filteredSneakers = sneakersData.filter(sneaker => 
        sneaker.category && sneaker.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredSneakers.length === 0) {
        return res.status(404).json({ error: 'No sneakers found for this category' });
    }

    res.status(200).json(filteredSneakers);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
