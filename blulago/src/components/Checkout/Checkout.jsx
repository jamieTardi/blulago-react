import React, {useState, useEffect} from 'react'
import CheckoutForm from './CheckoutForm'
import PaymentForm from './PaymentForm'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import useStyles from './styles'
import Confirmation from './Confirmation'
import { commerce } from '../../lib/commerce'


const steps = ['Shipping Address', 'Payment Details']
const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)

    const classes = useStyles()
    const Form = () => activeStep === 0 ? <CheckoutForm /> : <PaymentForm/>
    console.log(cart)
    useEffect(() => {
        const generateToken = async () => {
            try{
             const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
             
             console.log(token)
             setCheckoutToken(token)
             
            }
            catch(error){
 
            }
 
        }
        generateToken()
    }, [cart])
    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                        ))}
                </Stepper>
                {activeStep ===  steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
        </main>
            
        </>
    )
}

export default Checkout
