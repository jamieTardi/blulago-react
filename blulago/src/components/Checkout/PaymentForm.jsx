import React from 'react'
import { Typography, Button, Divider} from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const PaymentForm = ({token, backStep, onCaptureCheckout, nextStep, shippingData}) => {
console.log(shippingData)
    const stripePromise = loadStripe('pk_live_51I3ia8CB5J6Ndm3cB97rSo7H1wNqksNAe0U7HY9e0GfP7IkoFY3Ko26Dwak1atqJ0XalrrcfdGKvNHh6CJrj6iH200QTd6TE94')

    const handleSubmit = async(event, elements, stripe) =>{
        event.preventDefault();
        
        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: cardElement})

        if(error){
            console.log(error)
        }
        else{
            const orderData = {
                line_items: token.live.line_items,
                customer: {
                    firstname: shippingData.firstname,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
                    address: shippingData.address1,
                    town: shippingData.city,
                    phone: shippingData.phone,
                    postcode: shippingData.zip,
                },
                fulfillment: {
                    shipping_method: shippingData.email
                },
                payment: {
                    gateway: 'stripe',
                    stripe:{
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            onCaptureCheckout(token.id, orderData)

            nextStep()
        }
    }
    
    return (
        <>
             <Review token={token}/>
        <Divider />
        <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}>Payment Method</Typography>
        <Elements stripe={stripePromise}>
        <ElementsConsumer>
            {({ elements, stripe}) => (
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement />
                    <br/>
                    <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                    pay {token.live.subtotal.formatted_with_symbol}
                </Button>
                </div>
                </form>
                )}
        </ElementsConsumer>
        </Elements>
        </>
    )
}

export default PaymentForm
