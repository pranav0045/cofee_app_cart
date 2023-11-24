import Cofeecard from './Cofeecard';
import FoodItem from './FoodItem';
import './cofee.css';
import f1 from './f1.jpg';
import f2 from './f2.jpg';
import f3 from './f3.jpg';
import f4 from './f4.jpg';
import bur from './bur.jpg';
import fri from './fri.jpg';
import f5 from './f5.jpg';
import foodban from './foodban.jpg';
import c1 from './c1.webp';
import c2 from './c2.webp';
import c3 from './c3.webp';
import c4 from './c4.webp';
import c5 from './c5.webp';
import c6 from './c6.webp';
import c7 from './c7.webp';
import c8 from './c8.webp';
import { useRef } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Products = () => {

    const container = useRef();
    const dispatch = useDispatch();


    const slider_next = () =>{
        container.current.focus();
        container.current.scrollLeft+=700; 
     }
 
     const slider_prev= ()=>{         
         container.current.focus();
         container.current.scrollLeft-=700; 
     }



    const addtocart = (fooddata) => {
        console.log(fooddata);
        dispatch({type:"addtocart",payload:fooddata});
        toast.success("Added item to cart");
    }


    const cofeeArray = [
        {
            id: 1,
            imgsrc: c1,
            name: "veronicca's tofee nut crunch latee",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 414.5,

        },


        {
            id: 2,
            imgsrc: c2,
            name: "veronicca's iced tofee nut crunch latee",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 454.5,

        },


        {
            id: 3,
            imgsrc: c3,
            name: "veronicca's tofee nut crunch cold brew",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 484.5,

        },


        {
            id: 4,
            imgsrc: c4,
            name: "veronicca's tofee nut crunch frapuccino",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 514.5,

        },


        {
            id: 5,
            imgsrc: c5,
            name: "veronicca's tofee nut crunch creme frapuccino",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 664.5,

        },


        {
            id: 6,
            imgsrc: c6,
            name: "Betty's chestnut mont blanc latee",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 400.5,

        },


        {
            id: 7,
            imgsrc: c7,
            name: "Betty's chestnut mont blanc frapuccino",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 544.5,

        },


        {
            id: 8,
            imgsrc: c8,
            name: "crunchy red hat mocha",
            para: "delight your senses with our veronicca's tofee nut crunch latee a perfect combination of our steamed milk and.. ",
            price: 483.5,

        },
    ];




    const foodArray = [
        {

            id: 9,
            name: "burger",
            para: "ranges of burgers starting with just $199",
            imgsrc: bur,
            price: 199,

        },

        {

            id: 10,
            name: "pizzas",
            para: "ranges of pizza's starting with just $299",
            imgsrc: f2,
            price: 299,

        },

        {

            id: 11,
            name: "sandwitches",
            para: "ranges of sandwitches starting with just $99",
            imgsrc: f3,
            price: 99,

        },


        {

            id: 12,
            name: "fries",
            para: "ranges of fries starting with just $59",
            imgsrc: fri,
            price: 59,

        },

        {

            id: 13,
            name: "pasta",
            para: "ranges of pasta starting with just $299",
            imgsrc: f5,
            price: 299,

        },

    ];
    return (
        <div className="products">

            <div className="food-section">
                <h1>food $ fun</h1>
                <div className="food-items">
                    {
                        foodArray.map((item) => {
                            return <FoodItem

                                imgsrc={item.imgsrc}
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                para={item.para}
                                price={item.price}
                                handler={addtocart}
                            />
                        })
                    }
                </div>

            </div>


            <div className='ban ban2'>

                <img src={foodban} />
            </div>


            <div className='last-section'>

                <div className='slider'>
                    <h2>our speciality</h2>

                    <div className='slide-icons'>
                        <GrLinkPrevious onClick={slider_prev} />
                        <GrLinkNext onClick={slider_next} />

                    </div>

                </div>

                <div className='cofee-container' ref={container}>
                    {
                        cofeeArray.map((item) => {
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

export default Products;