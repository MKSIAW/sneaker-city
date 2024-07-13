const express = require('express');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Built-in JSON parser

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
    // Normally handle payment with a payment processor here.
    res.status(200).json({ message: 'Payment successful', cart });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
