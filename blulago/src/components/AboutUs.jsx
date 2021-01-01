import React from 'react'
import styled from 'styled-components'
import Lake from '../assets/lake-pic-hero.jpeg'
import LakeTwo from '../assets/picture6.JPG'




const AboutUs = () => {
    return (
        <FlexContainer>
            <AboutUsDiv >
            <StyledAboutTitle>About Us</StyledAboutTitle>
            <p>We are a family run fishing lake nestled in the
                 heart of the Champagne region in France. 
                 Blu Lago is our newest lake in our lake complex. 
                 We have a proven background in excellent fishery 
                 management and only stock our lakes with the best 
                 fish stock in France. We instil family values on 
                 all of our bailiffs so that you get that home away
                  from home feeling while fishing one of the best up 
                  and coming lakes in the whole region. Our bailiffs
                   have extensive knowledge of the lake and the 
                   surrounding area, so whether it’s the perfect
                    spot to catch in the evening or a good local bar
                     we can help. 
                </p>
                <button>Contanct Us</button>
            </AboutUsDiv >
            <div>
            <AboutUsPic>
                <img src={Lake} alt="Lake pic"/>
            </AboutUsPic>
            <AboutUsPic>
                <img src={LakeTwo} alt="second pic"/>
            </AboutUsPic>
            </div>
        </FlexContainer>
    )
}

const StyledAboutTitle = styled.h2`
color: #595959;
font-family: 'Lobster Two', cursive;
`

const AboutUsDiv = styled.div`
border: none;
background-color: #e3dfdb;
width: 70vw;
height: 60vh;
margin: 1rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
padding: 0rem 4rem;
@media (max-width: 900px){
    min-width: 93vw;
    height: fit-content;
    text-align: normal;
    padding: 0rem;
    margin: 1rem 1rem;
}
@media (max-width: 600px){
    min-width: 89vw;
    min-height: 650px;
    margin-right: 3rem;
    padding: 0rem 1rem;
}

`

const AboutUsPic = styled.div`
border: none;
width: 35vw;
height: 29vh;
margin-top: 1rem;
margin-right: 2rem;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px){
        
    }
}
@media (max-width: 900px){
    
    width: 93vw;
    margin: 0rem 1rem;
    &:first-child {
        margin-bottom: 1rem;
    }
}

@media (max-width: 600px){
    width: 89vw;
}
`

const FlexContainer = styled.div`
display: flex;
z-index: 0;
@media (max-width: 900px){
    flex-direction: column;
}
`

export default AboutUs
