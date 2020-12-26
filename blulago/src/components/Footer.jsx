import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <NavContainer>
            <p>Webpage created by Tardi Digital Media</p>
            <p><a href="https://www.jamietardi.co.uk/" rel="noreferrer" target="_blank">www.jamietardi.co.uk</a></p>
            
        </NavContainer>
    )
}

const NavContainer = styled.div`
height: 10vh;
width: 100vw;
background-color: #e3dfdb;
`

export default Footer
