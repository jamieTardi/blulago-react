import React from 'react'
import styled from 'styled-components'


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
            price: '90 Euros per bag, or 50 euros per half',
            img: 'https://www.carpology.net/uploads/cms/blog/1766/3524-banner.jpg'
        },
        {
            name: 'Coppens Pellet',
            weight: '20/25kg approx',
            description: 'Industry leading carp pellet, supplied by us to help you catch.',
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
                    <p>{baitDetails.weight}</p>
                    <p>{baitDetails.price}</p>
                    <p>{baitDetails.description}</p>
                    </BaitCard>
                ))}
                </BaitDetails>

        </BaitContainer>
    )
}

const BaitContainer = styled.div`
height: fit-content;


`

const BaitDetails = styled.div`
width: 98vw;
height: 45vh;
display: flex;

`
const BaitCard = styled.div`
max-width: 33vw;
display: flex;
flex-direction: column;
height: fit-content;

`

const ImgDiv = styled.div`
img{
    max-width: 33vw;
}
`
export default Bait
