import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'


const ShopHome = () => {
const shopItems = [{
    name: 'Lake Exclusive',
    arrival: '02/08/2020',
    departure: '09/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 1,
    id: uuidv4()
},
{
    name: 'Lake Exclusive',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 0,
    id: uuidv4()
},
]

    return (
        <ShopContainer>
        <CardContainer>
            {shopItems.map((holiday) => (
                <Card key={holiday.id}>
                    <img src={holiday.picture} alt="fishing pic"/>
                    <h4>{holiday.name}</h4>
                    <p classname="dropDwn">Arrival Date <br/><span>{holiday.arrival}</span></p>
                    <p classname="dropDwn">Departure Date <br/><span>{holiday.departure}</span></p>
                    <h4 classname="dropDwn">Deposit Price <br/><span>{holiday.price}</span></h4>
                    <p classname="dropDwn" style={holiday.avalible > 0 ? {color: 'green'} : {color: 'red'}}>Avalible: <br/><span>{holiday.avalible ? 'Yes' : 'No'}</span></p>
                    <button >Add to Cart</button>
                </Card>
    ))}
    </CardContainer>
        </ShopContainer>
    )
}



const CardContainer = styled.div`
display: flex;
gap: 1rem;
position: relative
`

const ShopContainer = styled.div`
width: 100vw;
height: 100vh;
padding: 2rem 5rem
`

const Card = styled.div`
width: 25vw;
height: 55vh;
border: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
box-shadow: 5px 5px 15px 5px #000000;

.dropDwn{
    text-align: center;
}

img{
    width: 100%;
    height: 40%;
    object-fit: cover;
    
}
`

export default ShopHome
