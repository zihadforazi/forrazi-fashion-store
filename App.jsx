import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "shop":
        return <Shop />;
      case "cart":
        return <Cart />;
      case "checkout":
        return <Checkout />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <Navbar toggleTheme={() => setDarkMode(!darkMode)} setPage={setPage} />
          {renderPage()}
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;