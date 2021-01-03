import React from 'react'
import Food from '../components/Food'
import styled from 'styled-components'
import cabin from '../assets/cabin.jpg'
import shower from '../assets/shower.jpg'


const Facilities = () => {

    return (
        <FacilitiesContainer>
            <h2>On Site Facilities</h2>
            <p>Here at Blu Lago we pride ourselves on having 
                industry leading facilities for everything you 
                want as angler. You can indulge in the home comforts 
                you wish you could have at other lakes right here. We have 
                electrical charging points placed around the lake to 
                charge your phones and bait boats. The main building has 
                showers, separate toilet block and due to popular demand 
                from our other lakes a small tackle shop providing 
                essentials such as hooks, landing nets, leaders etc. 
                Of course there is the option to purchase bait as well, 
                the bait prices are listed below. Images are currently
                placeholders as we are building some of the new buildings
                currently. Updates will be posted on facebook.</p>
                <ImageContainer>
            <img src={cabin} alt="cabin"/>
            <img src={shower} alt="cabin"/>
            </ImageContainer>
            <Food/>
        </FacilitiesContainer>
    )
}

const FacilitiesContainer = styled.div`
height: fit-content;
width: 100vw;
h2{
    color: #595959;
    text-align: center;
}
p{
    margin: 1rem 2rem 1rem 1rem
}
`

const ImageContainer = styled.div`
display: flex;
height: 45vh;
margin-bottom: 2rem;
img{
    width: 47%;
    margin-left: 1rem;
    object-fit: cover;
}
@media (max-width: 900px){
    flex-direction: column;
    width: 90vw;
    height: fit-content;
    img{
        width: 100%;
        height: 100%;
        margin-bottom: 1rem;
    }
}

`
export default Facilities
