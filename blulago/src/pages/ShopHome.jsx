import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import Footer from '../components/Footer'


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
{
    name: 'Lake Exclusive',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 0,
    id: uuidv4()
},
{
    name: 'Lake Exclusive',
    arrival: '09/08/2020',
    departure: '16/08/2020',
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
{
    name: 'Lake Exclusive',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 1,
    id: uuidv4()
},
]

    return (
        <>
        <ShopContainer>
        <CardContainer>
            {shopItems.map((holiday) => (
                <Card key={holiday.id}>
                    <h4>{holiday.name}</h4>
                    <img src={holiday.picture} alt="fishing pic"/>
                    <p className="dropDwn arrivalDepart">Arrival Date <br/><span>{holiday.arrival}</span></p>
                    <p className="dropDwn arrivalDepart">Departure Date <br/><span>{holiday.departure}</span></p>
                    <h4 className="dropDwn">Deposit Price <br/><span>{holiday.price}</span></h4>
                    <p className="dropDwn" style={holiday.avalible > 0 ? {color: 'green'} : {color: 'red'}}>Avalible: <br/><span>{holiday.avalible ? 'Yes' : 'No'}</span></p>
                    <button style={holiday.avalible > 0 ? {opacity: 1} : {opacity: 0, pointerEvents: 'none'}}>Add to Cart</button>
                </Card>
    ))}
    </CardContainer>
    <Footer/>
        </ShopContainer>
        
        </>
        
    )
}



const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
position: relative;
padding: 0rem 4rem;
margin-bottom: 2rem;
.arrivalDepart{
    font-size: 0.7rem;
}
`

const ShopContainer = styled.div`
width: 100vw;
height: 100vh;
padding: 2rem 0rem
`

const Card = styled.div`
width: 25vw;
height: 55vh;
flex: 1 0 30%;
border: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
box-shadow: 5px 5px 15px 5px #000000;
background: #E3DFDB;
@media(max-width: 600px){
    flex: 1 2 50%;
};


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
