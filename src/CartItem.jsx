
import c1 from './c1.webp';
import { MdDelete } from "react-icons/md";
import './cofee.css';

const CartItem = ({imgsrc,name,price,decrement,increment,deletehandler,id,quantity}) =>{
    return(

        <div className="cart-item">

            <div className="cart-img">
                <img src={imgsrc}/>
                <h2>{name}</h2>      
                <h2>$ {price}</h2>          
            </div>

            <div className='handlers'>

                <button onClick={()=>{decrement(id)}}>-</button>
                <p>{quantity}</p>
                <button onClick={()=>{increment(id)}}>+</button>

            </div>

            <div className='delete'>

             <MdDelete onClick={()=>{deletehandler(id)}}/>

            </div>

        </div>
    )
}


export default CartItem;