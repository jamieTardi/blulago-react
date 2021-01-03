import React from 'react'
import Form from '../components/Form'
import styled from 'styled-components'
import contactImg from '../assets/contactImg.svg'


const Contact = () => {
    return (
        <ContactContainer>
            <Form/>
        <img src={contactImg} alt="Contact Image"/>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
img{
    width: 50%;
    height: 100%;
}
`
export default Contact
