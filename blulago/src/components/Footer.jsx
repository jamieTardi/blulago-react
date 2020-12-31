import React from 'react'
import styled from 'styled-components'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/insta.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <NavContainer>
            <CopyrightContainer>
            <h6>Webpage created<br/> by Tardi Digital Media </h6>
            <h6><a href="https://www.jamietardi.co.uk/" rel="noreferrer" target="_blank">www.jamietardi.co.uk</a></h6>
            </CopyrightContainer>
            <AddressContainer>
            <h6>Blue lago</h6>
            <h6>Rue Des Carriéres</h6>
            <h6>Rosnay - l'Hopital</h6>
            <h6>10500</h6>
            <h6>France</h6>
            </AddressContainer>
            <Social>
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src={Facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/"rel="noreferrer" target="_blank"><img src={Instagram} alt="Instagram"/></a>
            <a href="https://twitter.com/"rel="noreferrer" target="_blank"><img src={Twitter} alt="Twitter" /></a>
            </Social>
        </NavContainer>
    )
}

const Social = styled.div`
display: flex;
gap: 1rem;
img{
    cursor: pointer;
    background:none;
    &:hover{
        opacity: 0.7
    }
}
@media (max-width: 600px){
    gap: 0.3rem;
}
`
const AddressContainer = styled.div`

`
const CopyrightContainer = styled.div`
text-align: center;
a{
    &:hover{
        text-decoration: underline
    }
}
`

const NavContainer = styled.div`
height: 10vh;
width: 100vw;

background-color: #e3dfdb;
display: flex;
justify-content: space-around;
align-items: center;
@media (max-width: 600px){
    font-size: 0.7rem;
}
@media (max-width: 850px){
    height: 18vh
}
`


export default Footer
