import React from 'react'
import styled from 'styled-components'
import Lake from '../assets/lake-pic-hero.jpeg'
import LakeTwo from '../assets/picture6.JPG'




const AboutUs = () => {
    return (
        <FlexContainer>
            <AboutUsDiv >
            <StyledAboutTitle>About Us</StyledAboutTitle>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Blanditiis eveniet consectetur sint exercitationem iusto enim 
                 ducimus dolores doloribus id, quas itaque libero repellat, 
                 assumenda at veritatis vero harum obcaecati numquam quos quia. 
                 Similique adipisci id maxime illum deleniti ipsam distinctio.
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Blanditiis eveniet consectetur sint exercitationem iusto enim 
                 ducimus dolores doloribus id, quas itaque libero repellat, 
                 assumenda at veritatis vero harum obcaecati numquam quos quia. 
                 Similique adipisci id maxime illum deleniti ipsam distinctio.
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

`

const AboutUsPic = styled.div`
border: none;
width: 25vw;
height: 29vh;
margin-top: 1rem;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const FlexContainer = styled.div`
display: flex;
`

export default AboutUs
