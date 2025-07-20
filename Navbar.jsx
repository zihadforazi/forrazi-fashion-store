import React from "react";

const Navbar = ({ toggleTheme, setPage }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-black sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => setPage('home')}>FoRaZi</div>
      <ul className="flex gap-6 font-medium">
        <li onClick={() => setPage('home')} className="cursor-pointer">Home</li>
        <li onClick={() => setPage('shop')} className="cursor-pointer">Shop</li>
        <li onClick={() => setPage('cart')} className="cursor-pointer">Cart</li>
        <li onClick={() => setPage('checkout')} className="cursor-pointer">Checkout</li>
        <li>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Toggle Theme
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;