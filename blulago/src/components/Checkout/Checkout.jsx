import React, {useState, useEffect} from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import {Paper, Stepper, Step, StepLabel, Typography,} from '@material-ui/core'
import useStyles from './styles'
import Confirmation from './Confirmation'
import { commerce } from '../../lib/commerce'
import styled from 'styled-components'


const steps = ['Shipping Address', 'Payment Details']
const Checkout = ({cart, order, error, onCaptureCheckout}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})

    const classes = useStyles()
    const nextStep = () => setActiveStep((prev) => ++prev )
    const backStep = () => setActiveStep((prev) => --prev)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }
    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm cart={cart} shippingData={shippingData} token={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout}/>
    useEffect(() => {
        const generateToken = async () => {
            try{
             const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
             
            
             setCheckoutToken(token)
             
            }
            catch(error){
 
            }
 
        }
        generateToken()
    }, [cart])
    return (
        <StyledCheckout>
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
            
        </StyledCheckout>
    )
}

const StyledCheckout = styled.div`
    min-height: 80vh;
    width: 100vw;

`

export default Checkout
