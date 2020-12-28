import React from 'react'
import logo from '../assets/blulagoLogo.svg'
import styled from 'styled-components'
import Toggle from './Toggle'
import {Link} from 'react-router-dom'
import {ShoppingCart} from '@material-ui/icons/';
import {IconButton, Badge} from '@material-ui/core'

const NavBar = () => {
    return (
        <div>
            <StyledNav>
                <StyledDiv>
                <StyledLogo src={logo} alt="logo"/>
                </StyledDiv>
                <StyledUl>
                    <Link to="/">
                <Toggle title="Home">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle>
                    </Link>
                    <Link to="/gallery">
                    <Toggle title="Gallery">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle>
                    </Link>
                    <Link to="shopHome">
                    <Toggle title="Online Booking">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle>
                    </Link>
                    <Toggle title="Facilities">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle> 
                    <Toggle title="Rules">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle>  
                    <Toggle title="Contact Us">
                    <ListAndLine >
                    <StyledLine  />
                    </ListAndLine>
                    </Toggle>   
                    <IconButton component={Link}  to="cart" aria-label="Show Cart Items" color="white" >
                    <Badge badgeContent="1" color="secondary"></Badge>
                    <ShoppingCart className="cart"/>
                    </IconButton>
                </StyledUl>
                
            </StyledNav>
            
        </div>
    )
}

const StyledNav =styled.nav`
    
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    
    `
const StyledDiv = styled.div`
display: flex;
width: 20vw

`

const StyledLogo = styled.img`
min-width: 100%;
min-height: 100%
`

const StyledUl = styled.ul`

display: flex;
justify-content: center;
align-items: center;
margin-right: 4rem;
gap: 1rem;
.cart{
    margin-left: 0rem;
}
.pointer{
    cursor: pointer;
}
`

const StyledLine = styled.div`
border: 2px solid #18DDEB;
    cursor: pointer;
    height: 0;
    border-radius: 5px;
   
    
    `
const ListAndLine = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
cursor: pointer;

`

export default NavBar
