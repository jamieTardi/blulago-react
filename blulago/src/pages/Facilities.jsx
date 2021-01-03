import React from 'react'
import Food from '../components/Food'
import styled from 'styled-components'


const Facilities = () => {

    return (
        <FacilitiesContainer>
            <Food/>
        </FacilitiesContainer>
    )
}

const FacilitiesContainer = styled.div`
height: fit-content;

width: 100vw;
`
export default Facilities
