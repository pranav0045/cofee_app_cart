import { BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import {Toaster} from 'react-hot-toast';
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
         <Navbar/>
         <Routes>

          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/products" element={<Products/>}/>
          {/* <Route path="/contact" element={<Contact/>}/> */}
          <Route path="/cart" element={<Cart/>}/>

         </Routes>
         <Footer/>
         <Toaster containerStyle={{fontFamily:"poppins",fontSize:"1.6rem"}}/>
    </BrowserRouter>
  );
}

export default App;
