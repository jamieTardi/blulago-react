import React from 'react'
import styled from 'styled-components'
import Driving from '../assets/driving.jpg'
import Map from './Maps'




const Location = () => {
console.log(process.env)
    return (
        <FlexContainer>
            <FlexPic>
            <LocationPic>
                <h4>Getting Here</h4>
                <p>The Best way to get to the lake is to drive from Calais (ferry or eurotunnel). Once you get off the ferry head to A26, when you get on the A26 continue all the way to Reims, this is a good 2 hours 30 min and the bulk of the drive. When you get to reims you will see signs for the A4 signposted Troyes. Take exit 21 for Vallée de l'Aube, then follow the D441 until the D75 then the D180. This will eventually lead you to Rue des Carriéres. 
Total Drive time from Calais is about 4 hours 30 mins at a leisurely pace in a van.</p>
            </LocationPic>
            <LocationPic>
            <img src={Driving} alt="Driving pic" />
            </LocationPic>
            </FlexPic>
            <LocationContainer>
           <Map/>
            </LocationContainer>
            
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
display: flex;
@media (max-width: 900px){
flex-direction: column;
}

`

const LocationContainer = styled.div`
border: none;
background-color: #e3dfdb;
width: 70vw;
height: 60vh;
margin: 1rem 1rem;
margin-right: 2rem;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 600px){
    width: 89vw;
}

    
}

`

const LocationPic = styled.div`
border: none;
width: 35vw;
height: 29vh;
margin-top: 1rem;
display: flex;
background-color: #e3dfdb;
display: flex;
flex-direction: column;
text-align: center;
p{
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
}
h4{
    color: #595959;
font-family: 'Lobster Two', cursive;
margin: 1rem 0rem;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px){
        min-height: 30vh;
        min-width: 100%;
    }

}
@media (max-width: 900px){
 width: 93vw;
 height: fit-content;

}
@media (max-width: 600px){
    height: fit-content;
    margin: 1rem 0rem;
    width: 89vw;
}


`
const FlexPic = styled.div`

margin-left: 1rem
`
export default Location
