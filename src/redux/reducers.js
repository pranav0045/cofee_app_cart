import { createReducer } from "@reduxjs/toolkit";

export const cofeeReducer = createReducer(
    {
        subtotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
        cartItemArray: [],

    }

    ,

    {
        addtocart: (state, action) => {
            const item = action.payload;
            const ispresent = state.cartItemArray.find((it) => item.id === it.id); //will check if that cart item is already present in the cartItemArray or not.

            if (ispresent) {
                state.cartItemArray.forEach((it) => {

                    if (it.id === item.id) {
                        it.quantity += 1;
                    }
                })


            }
            else {
                state.cartItemArray.push(item);
            }
        },

        //to decrement the qty of cartitem product
        decrement: (state, action) => {

            const item = state.cartItemArray.find(it => it.id === action.payload);

            if (item.quantity > 1) {
                state.cartItemArray.forEach((it) => {
                    if (it.id === item.id) {
                        it.quantity -= 1;
                    }
                })
            }
        },


        //to increment the qty of product.

        increment: (state, action) => {

            const item = state.cartItemArray.find(it => it.id === action.payload);


            state.cartItemArray.forEach((it) => {
                if (it.id === item.id) {
                    it.quantity += 1;
                }
            })

        },

//delete cartItem from cart
        deletehandler:(state,action)=>{
            const item = state.cartItemArray.find(it => it.id === action.payload);

               state.cartItemArray = state.cartItemArray.filter((it)=>{
                return it.id !== item.id;
            })
        },


        //will calculate overall price of cart
        calculatePrice:(state)=>{

            let sum=0;

            state.cartItemArray.forEach((it)=>{
                sum+=it.price*it.quantity;
            })

           state.subtotal=sum;
           state.shipping = state.subtotal >1000 ?0:200;
           state.tax = +(state.subtotal*0.12).toFixed();
           state.total=state.subtotal+state.shipping+state.tax;
        }

    }

)