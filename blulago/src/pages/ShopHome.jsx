import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import Footer from '../components/Footer'


const ShopHome = () => {
const shopItems = [{
    name: 'Lake Exclusive Booking',
    arrival: '02/08/2020',
    departure: '09/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 1,
    id: uuidv4()
},
{
    name: 'Lake Exclusive Booking',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 0,
    id: uuidv4()
},
{
    name: 'Lake Exclusive Booking',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 0,
    id: uuidv4()
},
{
    name: 'Lake Exclusive Booking',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 1,
    id: uuidv4()
},
{
    name: 'Lake Exclusive Booking',
    arrival: '09/08/2020',
    departure: '16/08/2020',
    picture:  'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    price: '£800',
    avalible: 0,
    id: uuidv4()
},
{
    name: 'Lake Exclusive Booking',
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
        <BookingBlurb>
        <h2>Booking</h2>
        <p>Below is our online booking system. To book a slot check the date you wish to travel and click add to cart. 
            This booking is for a deposit only, the remainder of the payment 
            is due roughly 6 weeks before you arrive. For booking a week a deposit 
            must be taken from the online system to register for your place. 
            When asked to provide an email please provide the email of the person 
            for us to contact for the final payment this is essential. 
            The deposit is only for the actual booking and does not include your 
            own travel, food and bait. For food and bait enquiries please send a 
            message either via the online contact form or the email in the contact 
            us section. Food packages and bait orders can be taken 6 weeks before 
            arrival up until two weeks before travel, please ensure you contact us 
            in advance for this.</p>
            </BookingBlurb>
        <ShopContainer>
        <CardContainer>
            {shopItems.map((holiday) => (
                <Card key={holiday.id}>
                    <h4>{holiday.name}</h4>
                    <img src={holiday.picture} alt="fishing pic"/>
                    <div>
                    <p className="dropDwn arrivalDepart">Arrival Date <br/><span>{holiday.arrival}</span></p>
                    <p className="dropDwn arrivalDepart">Departure Date <br/><span>{holiday.departure}</span></p>
                    </div>
                    <h4 className="dropDwn deposit">Deposit Price <br/><span>{holiday.price}</span></h4>
                    <p className="dropDwn deposit" style={holiday.avalible > 0 ? {color: 'green'} : {color: 'red'}}>Available <br/><span>{holiday.avalible ? 'Yes' : 'No'}</span></p>
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
    font-size: 1.1rem;
}
`

const BookingBlurb = styled.div`
margin: 1rem 4rem;
text-align: center;
background-color: #E3DFDB;
box-shadow: 5px 5px 15px 5px grey;
line-height: 1.4;
h2{
    color: #595959
}
p{
    padding: 1rem 2rem
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
box-shadow: 5px 5px 15px 5px grey;
background: #E3DFDB;
button{
    background: #18DDEB;
    color: white;
    &:hover{
        filter: brightness(0.70);
    }
}

h4{
    padding-bottom: 0.5rem;
    color: #595959;
    font-family: 'Lobster Two', cursive;
    font-size: 1.5rem;
}
div{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.deposit{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 1rem;
    color: #595959;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
}
@media(max-width: 800px){
    flex: 1 2 50%;
};
@media(max-width: 600px){
    flex: 1 2 50%;
};
@media(min-width: 1600px){
    flex: 1 4 20%;
}


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
