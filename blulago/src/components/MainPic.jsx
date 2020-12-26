import React from 'react'
import Hero from '../assets/IMG_1199.JPG'
import styled from 'styled-components'

const MainPic = () => {
    return (
        <StyledMain>
            <StyledHeroText>
            <h2><span>Blu</span> Lago</h2>
            <h3>Experience France’s best fishing</h3>
            <h3>A huge fish stock and brand new facilities</h3>
            <StyledButton>Book Now!</StyledButton>
            </StyledHeroText>
           <StyledHero src={Hero} alt=""/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
position: relative;
`

const StyledButton = styled.button`
padding: 0.5rem 1rem;
margin-top: 1rem;
background: transparent;
color: #18DDEB;
font-size: 1.5rem;
border: 2px solid #18DDEB;
transition: all 0.75s ease;
&:hover{
background: #18DDEB;
cursor: pointer;
color: white;
}
`

const StyledHero = styled.img`
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    filter: brightness(40%);
    z-index: 0;
    `
const StyledHeroText = styled.div`
position: absolute;
top: 30%;
left: 5%;
z-index: 1;
span{
    color: #18DDEB
}
`

export default MainPic
