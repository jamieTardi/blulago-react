import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {Button} from '@material-ui/core'
import EmptyCart from '../assets/empty-cart.svg'
import {Link} from 'react-router-dom'


const Cart = ({cart, handleEmptyCart}) => {
    console.log(cart)
    return (
        <>
        {cart.line_items.length !== 0 ?
        <CartContainer>
            <h2>Your Cart</h2>
            {cart.line_items.map((holiday) => (
                <div key={uuidv4()}>
                    <h4>This Booking is for:</h4>
                <p>{holiday.name}</p>
                </div>
                ))}
                <Button variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
            <Button variant="contained" color="primary">Checkout</Button>      
        </CartContainer>
            : 
            <CartContainer>
                <EmptyCartContainer>
                <h2>Your Cart</h2>
                <EmptyCartP>Your Cart is empty!</EmptyCartP>
                <Button component={Link} to="shopHome" variant="contained" color="primary">Back to Shop</Button>
                </EmptyCartContainer>
                <EmptyCartImg src={EmptyCart} alt="Cart is empty"/>
            </CartContainer>
            }
        </>
    )
}

const EmptyCartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

const CartContainer = styled.div`
width: 100vw;
height: 70vh;
border: none;
h2{
    color: black;
    text-align: center;
}

`
const EmptyCartP = styled.p`
text-align: center;
`

const EmptyCartImg = styled.img`
width: 100%;
height: 100%;
`
export default Cart
