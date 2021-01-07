import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'


const Bait = () => {
    const baitObj = [
        {
            name: 'Maize',
            weight: '5kg approx',
            description: 'Prepared on site by our trained baliffs, maize can only be used if purchased from us direct',
            price: '8 Euros per bag',
            img: 'https://www.daysoftheyear.com/wp-content/uploads/maize-day-scaled.jpg'
        },
        {
            name: 'Boilie',
            weight: '10kg approx',
            description: 'Mainline Cell 15mm/18mm stock dependant',
            price: '90 Euros per bag, or 50 euros per half. This product comes frozen.',
            img: 'https://www.carpology.net/uploads/cms/blog/1766/3524-banner.jpg'
        },
        {
            name: 'Coppens Pellet',
            weight: '20/25kg approx',
            description: 'Industry leading carp pellet, supplied by us to help you catch. Limited stock',
            price: '60 Euros per bag, 35 per half bag.',
            img: 'https://www.fishingbaitworld.co.uk/img/product/coppens-premium-coarse-carp-feed-pellets-2mm-25kg-12011824-1600.jpg'
        },
    ]
    return (
        <BaitContainer>
            <h2>Bait</h2>
            <p>We currently offer 3 diffrent forms of bait that is purchasable 
                on site. These are Mainline Cell Boilies which come in 10 kg (the
                bag can be halved), Coppens pellet which comes in either 20/25kg bag dependant on the size
                of the pellet. Finally on this lake we allow maize to be used which must be provided by us.
            </p>
            <BaitDetails >
            {baitObj.map((baitDetails) => (                
                    <BaitCard key={baitDetails.name}>
                    <ImgDiv>
                    <img src={baitDetails.img} alt={baitDetails.name}/>
                    </ImgDiv>
                    <h3>{baitDetails.name}</h3>
                    <p>Weight: {baitDetails.weight}</p>
                    <p>Price: {baitDetails.price}</p>
                    <p>{baitDetails.description}</p>
                    <Link to="/contact">
                    <Button variant="contained"  color="primary">Place an Order</Button>
                    </Link>
                    </BaitCard>
                ))}
                </BaitDetails>

        </BaitContainer>
    )
}

const BaitContainer = styled.div`
height: fit-content;
margin-bottom: 2rem;

;

`

const BaitDetails = styled.div`
width: 100vw;
display: flex;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;

@media (max-width: 900px){
    flex-direction: column;
}


`
const BaitCard = styled.div`
max-width: 30.5vw;
display: flex;
flex-direction: column;
height: 90vh;
background: #e3dfdb;
box-shadow: 5px 5px 15px 5px grey;
position: relative;
a{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

button{
  position: absolute;
  top: 90%;
  z-index: 2;
}

h3{
    text-align: center;
    color: #595959;
}
@media (max-width: 900px){
    min-width: 90vw;
    height: fit-content;
    margin-top: 1.5rem;
}
@media (max-width: 600px){
    height: 600px;
    h3{
        margin-top: 2rem;
    }
}

`

const ImgDiv = styled.div`
height: 30vh;

img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
@media (max-width: 600px){
    img{
        height: 200px
    }
}
`
export default Bait
