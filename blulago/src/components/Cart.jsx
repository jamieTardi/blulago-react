import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';


const Cart = ({cart}) => {
    console.log(cart)
    return (
        <CartContainer>
            <h2>Your Cart</h2>
            {cart.map((holiday) => (
                <div key={uuidv4()}>
                
                <p>{holiday.name}</p>
                </div>
                
                ))}
                
        </CartContainer>
    )
}

const CartContainer = styled.div`
width: 100vw;
height: 70vh;
border: 2px solid black;
h2{
    color: black;
    text-align: center;
}

`
export default Cart
