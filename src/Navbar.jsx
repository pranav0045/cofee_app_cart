import './cofee.css';
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Navbar = () => {

  const {cartItemArray} = useSelector(state => state.cart);

    return (
        <div className="Navbar">

            <div className="logo">
                <h1>My bucks</h1>
            </div>


            <div className="list">

                <NavLink to="/cofee_app_cart" className="nav">Home</NavLink>
                <NavLink to="/products" className="nav">Products</NavLink>
                <NavLink to="/cart" className="nav"> Show Cart</NavLink>
            </div>


            <div className="search">
                <input type="search" placeholder="search" />
            </div>



            <NavLink to="/cart">
                <div className="cart-icon">

                    <p>{cartItemArray.length}</p>
                    <BsCart />

                </div>
            </NavLink>


        </div>
    )
}


export default Navbar;