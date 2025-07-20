import React from "react";

const Checkout = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Full Name" className="border p-2" />
        <input type="text" placeholder="Address" className="border p-2" />
        <input type="tel" placeholder="Phone Number" className="border p-2" />
        <select className="border p-2">
          <option value="">Select Payment Method</option>
          <option value="bkash">Bkash</option>
          <option value="nagad">Nagad</option>
          <option value="rocket">Rocket</option>
          <option value="bank">Bank Transfer</option>
        </select>
        <input
          type="text"
          placeholder="Transaction ID / Reference"
          className="border p-2"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;