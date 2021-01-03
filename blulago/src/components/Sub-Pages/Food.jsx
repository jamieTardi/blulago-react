import React, {useState} from 'react'
import {MenuDetails} from '../../lib/MenuDetails'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'


const Food = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const menu = MenuDetails()
    return (
        <FoodContainer>
            
            <h2>Our Food Menu</h2>
            <p>Our Food package is avalible to purchase for £150 (GBP only), payable upon arrival. </p>
            
           {menu.map((menuItem) => 
               <MenuContainer key={uuidv4()}>
                <FoodImageDiv ><img style={imageLoaded ? {} : {display: 'none'}} onLoad={() => setImageLoaded(true)} src={menuItem.img} alt={menuItem.meal}/></FoodImageDiv>
                <Description>
                    <h3>{menuItem.meal}</h3>
                    <p>Served on {menuItem.day}</p>
                    <p>{menuItem.description}</p>
                    <p>Pudding included (varies from day to day)</p> 
                </Description>
                
                </MenuContainer>
            )} 

        </FoodContainer>
    )
}

const FoodContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

h2{
    text-align: center;
    color: #595959
}
p{
    text-align: center;
}
@media (max-width: 900px){
width: 94vw;
p{
    margin-left: 1rem;
}

}
`

const Description = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #E3DFDB;
text-align: center;

h3{
    color: #595959;
    margin-bottom: 1rem
}

p{
    padding: 0rem 1rem 1rem 0rem;
    
}
@media (max-width: 900px){
width: 100%;
height:fit-content;
display: block;
p{
    text-align: center;
    padding: 0rem;
    margin: 0.5rem;
}
h3{
    text-align: center;
}

}

`

const MenuContainer = styled.div`
display: flex;
width: 95%;
justify-content: center;
margin: 1rem 1rem 1rem 0rem;
box-shadow: 5px 5px 15px 5px grey;
@media (max-width: 900px){
    flex-direction: column;
    height: fit-content;
    width: 100%;
    align-items: center;
    margin-left: 2rem;
}
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
@media (max-width: 900px){
width: 100%;
height: 200px;

}
`


export default Food
