import React from 'react'
import logo from '../assets/blulagoLogo.svg'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <div>
            <StyledNav>
                <StyledDiv>
                <img src={logo} alt="logo"/>
                </StyledDiv>
                <StyledUl>

                    <ListAndLine>
                    <li>Home</li>
                    <StyledLine />
                    </ListAndLine>
                    <ListAndLine>
                    <li>Gallery</li>
                    <StyledLine />
                    </ListAndLine>
                    <ListAndLine>   
                    <li>Online Booking</li>
                    <StyledLine/>
                    </ListAndLine>
                    <ListAndLine> 
                    <li>Facilities</li>
                    <StyledLine/>
                    </ListAndLine> 
                    <ListAndLine> 
                    <li>Rules</li>
                    <StyledLine/>
                    </ListAndLine> 
                    <ListAndLine> 
                    <li>Contact Us</li>
                    <StyledLine/>
                    </ListAndLine> 
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

const StyledUl = styled.ul`

display: flex;
justify-content: center;
align-items: center;
margin-right: 4rem;
gap: 1rem;
`

const StyledLine = styled.div`

    border: 2px solid #18DDEB;
    height: 0;
    border-radius: 5px
    
    `
const ListAndLine = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;

`

export default NavBar
