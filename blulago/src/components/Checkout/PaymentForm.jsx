import React from 'react'
import { Typography, Button, Divider} from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const PaymentForm = ({token, backStep, onCaptureCheckout, nextStep, shippingData}) => {

    const stripePromise = loadStripe('pk_live_51I3ia8CB5J6Ndm3cB97rSo7H1wNqksNAe0U7HY9e0GfP7IkoFY3Ko26Dwak1atqJ0XalrrcfdGKvNHh6CJrj6iH200QTd6TE94')
    return (
        <div>
            <p>Payment Form</p>
        </div>
    )
}

export default PaymentForm
