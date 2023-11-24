import { NavLink } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import './cofee.css';
//images
import it1 from './Bestseller.jpg';
import it2 from './Drinks.jpg';
import it3 from './Food.jpg';
import it4 from './Merchandise.jpg';
import it5 from './CoffeeAtHome.jpg';
import ban1 from './ban1.jpg';
import ban3 from './ban3.webp';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

//cofee images.

import c1 from './c1.webp';
import c2 from './c2.webp';
import c3 from './c3.webp';
import c4 from './c4.webp';
import c5 from './c5.webp';
import c6 from './c6.webp';
import c7 from './c7.webp';
import c8 from './c8.webp';
import Cofeecard from './Cofeecard';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';


const Home = () =>{

    const container = useRef();

    const dispatch =useDispatch();

    //data of the cofeeitems

    const  addtocart = (cofeedata)=>{

        console.log(cofeedata);
        toast.success("Added item to cart");
        dispatch({type:"addtocart",payload:cofeedata})


    }

    const slider_next = () =>{
       container.current.focus();
       container.current.scrollLeft+=700; 
    }

    const slider_prev= ()=>{
        
        container.current.focus();
        container.current.scrollLeft-=700; 
    }


   const cofeeArray =[
    { 
        id:1,
        imgsrc:c1,
        name:"veronicca's tofee nut crunch latee",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:414.5,
    
    },


    { 
        id:2,
        imgsrc:c2,
        name:"veronicca's nut crunch latee",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:454.5,
    
    },


    { 
        id:3,
        imgsrc:c3,
        name:"veronicca's tofee cold brew",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:484.5,
    
    },


    { 
        id:4,
        imgsrc:c4,
        name:"veronicca's tofee nut frapuccino",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:514.5,
    
    },


    { 
        id:5,
        imgsrc:c5,
        name:"veronicca's tofee creme frapuccino",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:664.5,
    
    },


    { 
        id:6,
        imgsrc:c6,
        name:"Betty's chestnut mont blanc",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:400.5,
    
    },


    { 
        id:7,
        imgsrc:c7,
        name:"Betty's chestnut montoe blanc",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:544.5,
    
    },


    { 
        id:8,
        imgsrc:c8,
        name:"crunchy red hat mocha",
        para:"delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
        price:483.5,
    
    },
];

;


    return(
        <div className="home">

          <div className="banner">
            <h2>Rewards are pouring keep visiting</h2>

           <NavLink to="/">
            <button>Know more</button>
           </NavLink>
 
          </div>
           
           <div className='top-section'>
            
            <h2>Handcrafted curations</h2>
               
               <div className='items'>

                <NavLink className="nav2" to='/products'>
                    <div className='it'>
                       <img src={it1}/>
                    </div>

                    <p>Best sellers</p>
                </NavLink>

                <NavLink className="nav2" to='/products'>
                    <div className='it'>
                       <img src={it2}/>
                    </div>

                    <p>Drinks</p>
                </NavLink>

                <NavLink className="nav2" to='/products'>
                    <div className='it'>
                       <img src={it3}/>
                    </div>

                    <p>foods & fun</p>
                </NavLink>


                <NavLink className="nav2" to='/products'>
                    <div className='it'>
                       <img src={it4}/>
                    </div>

                    <p>Merchandise</p>
                </NavLink>


                <NavLink className="nav2" to='/products'>
                    <div className='it'>
                       <img src={it5}/>
                    </div>

                    <p>Cofee at home</p>
                </NavLink>


               </div>


           </div>

           <div className='ban'>
            <img src={ban3}/>

           </div>

           <div className='last-section'>

            <div className='slider'>
            <h2>Last offerings</h2>

            <div className='slide-icons'>
              <GrLinkPrevious onClick={slider_prev}/>
              <GrLinkNext onClick={slider_next}/>

            </div>
            
            </div>

            <div className='cofee-container' ref={container}>
             {
                cofeeArray.map((item)=>{
                return <Cofeecard id={item.id}
                  key={item.id}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  para={item.para}
                  price={item.price}
                  handler={addtocart}
                  />
                })
             }

                 
            </div>
            

           </div>

        </div>
    )
}

export default Home;