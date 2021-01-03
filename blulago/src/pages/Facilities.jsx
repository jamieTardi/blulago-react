import React from 'react'
import Food from '../components/Food'
import styled from 'styled-components'


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
                the bait prices are listed below.</p>
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
`
export default Facilities
