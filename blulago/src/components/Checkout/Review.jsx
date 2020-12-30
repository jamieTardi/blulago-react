import React from 'react'
import styled from 'styled-components'
import Emoji from 'a11y-react-emoji'


const Review = () => {
    return (
        <ReviewContainer>
            <h1><Emoji symbol="🎉" label="celebrate" />
            Thank you for your order
            <Emoji symbol="🎉" label="celebrate" /></h1>
            <h4>What to do now?</h4>
            <p>You should see a email arrive in your inbox, 
              sometimes this can be sent to spam or “promotions”, 
              this email is not spam and contains your receipt 
              and your order number, please keep this safe the 
              order number needs to be quoted when paying your 
              final balance. Please contact via
                email: <EmailSpan>blulagofishing@gmail.com</EmailSpan></p>
              <h4>Send us a quick email</h4>
              <p>Please send us a quick email just to touch base, 
                in this email it is very important that you send us your
                 telephone number, this is in case we need to contact you
                  if the email address you provided does not work.</p>
              <h4>Need a food package or bait?</h4>
              <p>If you would like a food package or bait that’s not a problem at all,
               we need to know preferably 6 weeks before arrival. 
               If you send us an email please say how many people are 
               for the food package (min of 3) and how much bait you would 
               like (there is no minimum order). The food package is 
               essential to know in advance as it takes time to get the 
               correct ingredients in. Please contact via
                email: <EmailSpan>blulagofishing@gmail.com</EmailSpan></p>
        </ReviewContainer>
    )
}

const ReviewContainer = styled.div`
width: 100vw;
height: 100vh;
`

const EmailSpan = styled.div`
color: #18DDEB;
`

export default Review
