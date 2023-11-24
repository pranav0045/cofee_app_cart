import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Products from "./Products";
import Cart from "./Cart";
import { Toaster } from 'react-hot-toast';
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/cofee_app" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      <Footer />
      <Toaster containerStyle={{ fontFamily: "poppins", fontSize: "1.3rem" }} />
      

    </>
  );
}

export default App;
