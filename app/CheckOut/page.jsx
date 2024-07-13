'use client'
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate payment process
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Payment Successful!</h1>
        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
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
            {/* Example items, replace with actual state management logic */}
            {[
              { id: 1, name: 'Nike Air Force 1', price: 90, quantity: 2 },
              { id: 2, name: 'Adidas Ultra Boost', price: 180, quantity: 1 },
            ].map((item) => (
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
        <form>
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
