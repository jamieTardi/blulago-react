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
           {menu.map((menuItem) => (
               <div key={uuidv4()}>
                <FoodImageDiv><img style={imageLoaded ? {} : {display: 'none'}} onLoad={() => setImageLoaded(true)} src={menuItem.img} alt={menuItem.meal}/></FoodImageDiv>
                <div>
                    <h3>{menuItem.meal}</h3>
                    <p>Served on {menuItem.day}</p>
                    <p>{menuItem.description}</p>
                </div>
                </div>
                ))} 

        </FoodContainer>
    )
}

const FoodContainer = styled.div`
width: 100vw;
height: 100vh;
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
