import { useRef } from 'react';
import './cofee.css';


const Cofeecard = ({ id, imgsrc, name, para, price, handler }) => {


    
    return (

        <div className="cofee-card">

            <div className="card-img">
                <img src={imgsrc} />
            </div>

            <h2>{name}</h2>

            <p>{para}</p>

            <div className="price">
                <p>${price}</p>

                <button onClick={() => { handler({ id, imgsrc, name, para, price, quantity: 1 }) }} className="addcart">Add item</button>

            </div>



        </div>
    )
}

export default Cofeecard;