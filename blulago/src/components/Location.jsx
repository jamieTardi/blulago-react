import React from 'react'
import styled from 'styled-components'


const Location = () => {
    return (
        <FlexContainer>
            <LocationPic>

            </LocationPic>
            <LocationPic>

            </LocationPic>
            
            <LocationContainer>


            </LocationContainer>
            
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
display: flex

`

const LocationContainer = styled.div`
border: none;
background-color: #e3dfdb;
width: 70vw;
height: 60vh;
margin: 1rem 1rem;
`

const LocationPic = styled.div`
border: 2px solid black;
width: 25vw;
height: 29vh;
margin-top: 1rem;
display: flex;
flex-direction: column;
`

export default Location
