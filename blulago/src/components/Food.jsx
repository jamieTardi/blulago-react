import React, {useState} from 'react'
import {MenuDetails} from '../lib/MenuDetails'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'


const Food = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const menu = MenuDetails()
    console.log(menu)

    return (
        <FoodContainer>
           {menu.map((menuItem) => 
               
               <MenuContainer key={uuidv4()}>
                <FoodImageDiv><img style={imageLoaded ? {} : {display: 'none'}} onLoad={() => setImageLoaded(true)} src={menuItem.img} alt={menuItem.meal}/></FoodImageDiv>
                <Description>
                    <h3>{menuItem.meal}</h3>
                    <p>Served on {menuItem.day}</p>
                    <p>{menuItem.description}</p>
                </Description>
                </MenuContainer>
                )} 

        </FoodContainer>
    )
}

const FoodContainer = styled.div`
width: 100vw;
height: fit-content;
`

const Description = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h3{
    color: #595959;
    margin-bottom: 1rem
}

p{
    padding: 0rem 1rem 1rem 0rem;
}

`

const MenuContainer = styled.div`
display: flex;
width: 95%;
margin: 1rem 4rem 1rem 1rem;
`

const FoodImageDiv = styled.div`
width: 50vw;
height: 35vh;
overflow: hidden;
img{
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}
`

export default Food
