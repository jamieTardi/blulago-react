import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import './gallery.css'

const Gallery = () => {


    const images = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/56cc4645c2ea518471e01802/1563888100210-7FDD5HGQRMV27BG1O6DY/ke17ZwdGBToddI8pDm48kA3nxo_ptvqwvrbKHiIubHBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMcaDL4EqArAxs1iYKqRoyb8iDszgpnm1QZC-jtC5lqwKMshLAGzx4R3EDFOm1kBS/Main.jpg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/56cc4645c2ea518471e01802/1563888100210-7FDD5HGQRMV27BG1O6DY/ke17ZwdGBToddI8pDm48kA3nxo_ptvqwvrbKHiIubHBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMcaDL4EqArAxs1iYKqRoyb8iDszgpnm1QZC-jtC5lqwKMshLAGzx4R3EDFOm1kBS/Main.jpg?format=1000w',
            description: "Fishing at Blu Lago",
          },
          {
            original: 'https://badangling.com/wp-content/uploads/2018/01/carp_underwater_feat.jpg',
            thumbnail: 'https://badangling.com/wp-content/uploads/2018/01/carp_underwater_feat.jpg',
            description: "Fishing at Blu Lago",
          },
          {
            original: 'https://images.squarespace-cdn.com/content/v1/56cc4645c2ea518471e01802/1582728190320-CZLDV4DG8C0ADKZ30UTS/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjVvFZn3_1TpSINbj1p15LLAjcj6UHNkQOuDz3gO52lBvccB2t33iJEaqs_Hdgp_g/underwater+carp.png?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/56cc4645c2ea518471e01802/1582728190320-CZLDV4DG8C0ADKZ30UTS/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjVvFZn3_1TpSINbj1p15LLAjcj6UHNkQOuDz3gO52lBvccB2t33iJEaqs_Hdgp_g/underwater+carp.png?format=1000w',
            description: "Fishing at Blu Lago",
          },
    ]
    return (
        <GalleryContainer>
            <GalleryBlurb>
            <h2>Gallery</h2>
            <p>Take a look at our gallery, and see what we have to 
                offer at our lake! Thinking about visiting here? 
                If you have a great catch let us know and we will feature you
                with your name and possibly the fish name in our online
                gallery!
            </p>
            </GalleryBlurb>
            <ImageGallery items={images}/>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
width: fit-content;
height: fit-content;
margin: 1rem 2rem;
button{
    background: transparent;
    &:hover{
        background: transparent;
    }
}
`

const GalleryBlurb = styled.div`
background: #E3DFDB;
text-align: center;
margin-bottom: 1rem;
box-shadow: 5px 5px 15px 5px grey;
padding: 0rem 2rem 1rem;
line-height: 1.4;
h2{
    color: #595959;
    font-family: 'Lobster Two', cursive;
}
`

export default Gallery
