import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {Button} from '@material-ui/core'
import EmptyCart from '../assets/empty-cart.svg'
import {Link} from 'react-router-dom'
import cartPic from '../assets/full-cart.svg'


const Cart = ({cart, handleEmptyCart, closeMenu}) => {
    return (
        <div onClick={closeMenu}>
        {cart.line_items.length !== 0 ?
        <CartContainer >
            <h2>Your Cart</h2>
            <img src={cartPic} alt="cart pic"/>
            <h4>This Booking is for:</h4>
            {cart.line_items.map((holiday) => (
                <MapContainer key={uuidv4()}>
                <p>{holiday.name}</p>
                <p>Deposit Price: {holiday.price.formatted_with_symbol}</p>
                </MapContainer>
                ))}
                <Buttons>
                <Button variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
            <Button component={Link} to="/checkout"  variant="contained" color="primary">Checkout</Button>
            </Buttons>      
        </CartContainer>
            : 
            <CartContainer>
                <EmptyCartContainer>
                <h2>Your Cart</h2>
                <EmptyCartP>Your Cart is empty!</EmptyCartP>
                <Button component={Link} to="shopHome" variant="contained" color="primary">Back to Online Booking</Button>
                <EmptyCartImg src={EmptyCart} alt="Cart is empty"/>
                </EmptyCartContainer>
                
            </CartContainer>
            }
        </div>
    )
}

const EmptyCartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
`

const CartContainer = styled.div`
width: 100vw;
min-height: 80vh;
border: none;
display: flex;
flex-direction: column;

align-items: center;
img{
    height: 40vh;
    width: 40vw;
}
h2{
    color: black;
    text-align: center;
}

`
const EmptyCartP = styled.p`
text-align: center;
`



const MapContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
p{
    margin-bottom: 0.4rem
}
@media (max-width: 900px){
    margin: 0rem 1rem;
    margin-bottom: 1rem;
}
`

const Buttons = styled.div`
display: flex;
gap: 1rem;
`

const EmptyCartImg = styled.img`
width: 45%;
height: 40%;
margin-bottom: 3rem;
`
export default Cart
