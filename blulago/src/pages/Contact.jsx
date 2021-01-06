import React from 'react'
import Form from '../components/Form'
import styled from 'styled-components'
import contactImg from '../assets/contactImg.svg'


const Contact = ({closeMenu}) => {
    return (
        <ContactContainer onClick={closeMenu}>
            <Form/>
        <img src={contactImg} alt="Contact Image"/>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
width: 95vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
margin-left: 1rem;
img{
    width: 50%;
    height: 100%;
    @media (max-width: 900px){
        display: none;
    }
}
`
export default Contact
