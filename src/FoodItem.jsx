import './cofee.css';

const FoodItem = ({id,imgsrc,name,price,para,handler})=>{
    return(

        <div className="f-item">
            <div className="f-img">
                <img src={imgsrc} />
                 <div className="f-text">
                 <h2>{name}</h2>
                  <p>{para}</p>
                 </div>
            </div>

            <div className="f-price">

                <p>${price}</p>
                <button onClick={()=>{handler({name,price,quantity:1,id,para,imgsrc})}}>Add item</button>

            </div>

        </div>
    )
}

export default FoodItem;