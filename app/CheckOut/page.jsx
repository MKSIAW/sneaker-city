'use client';
import React, { useState, useEffect } from 'react';

const CheckoutPage = ({ cartItems }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cartItems }), // Send the cart items to server
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Handle success message if needed
        setPaymentSuccess(true); // Update state to show payment success message
      } else {
        throw new Error('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error state or show error message
    }
  };

  if (paymentSuccess) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Payment Successful!</h1>
        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Your Cart is Empty</h1>
        <p>Please add items to your cart before proceeding to checkout.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Quantity</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiration Date</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CVV</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="123" />
          </div>
          <button
            type="button"
            onClick={handlePayment}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
