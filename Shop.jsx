import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "T-Shirt", price: 29.99 },
  { id: 2, name: "Hoodie", price: 59.99 },
  { id: 3, name: "Jeans", price: 49.99 },
  { id: 4, name: "Cap", price: 19.99 },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow text-center">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
            <h2 className="font-semibold">{p.name}</h2>
            <p>${p.price}</p>
            <button
              className="mt-2 px-4 py-1 bg-black text-white rounded"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;