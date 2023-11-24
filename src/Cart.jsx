import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cofee.css';
import toast from 'react-hot-toast';
import ecart from './ecart.png';
import c1 from './c1.webp';

const Cart = () => {
  const { cartItemArray } = useSelector(state => state.cart);

  const {subtotal,shipping,tax,total}=useSelector(state =>state.cart);

  const dispatch = useDispatch();


  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
  }

  const increment = (id) => {

    dispatch({ type: "increment", payload: id });

  }

  //will calculate price of cart items.

  dispatch({type:"calculatePrice"});


  const deletehandler = (id) => {
    dispatch({ type: "deletehandler", payload: id });
    toast.success("Removed item from cart");

  }


  return (

    <div className="cart">
      <main>

        {
          cartItemArray.length > 0 ? (
            cartItemArray.map((item) => {
              return <CartItem
                imgsrc={item.imgsrc}
                quantity={item.quantity}
                id={item.id}
                name={item.name}
                key={item.id}
                price={item.price}
                decrement={decrement}
                increment={increment}
                deletehandler={deletehandler}

              />
            })
          ) : (
            <>

              <h1 style={{ textAlign: "center" }}>No Items Added Yet !</h1>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                <img src={ecart} />
              </div>

            </>


          )
        }


      </main>

      <aside>

        <div className='aside-img'>
          <img src={c1} />
          
        </div>
        <h2>Subtotal: ${subtotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>tax: ${tax}</h2>
        <h2>Total: ${total}</h2>



        <div className='note'>

          <p>terms:note that there are shipping charges $200 on every product if the total cost is above $1000 then shipping will be free</p>

        </div>

      </aside>


    </div>
  )
}

export default Cart;