import React, { useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import { useForm, FormProvider} from 'react-hook-form'
import FormInput from './FormInput'
import {commerce} from '../../lib/commerce'
import {Link} from 'react-router-dom'

const AddressForm = ({next, checkoutToken}) => {

  const methods = useForm()
  return (
    <div>
      <Typography variant="h6" gutterBottom>Shipping Options</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data,}))}>
        <Grid container spacing={3}>
          <FormInput name="firstName" label='First Name'/>
          <FormInput name="lastName" label='Last Name'/>
          <FormInput name="email" label='Email'/>
          <FormInput name="address1" label='Address'/>
          <FormInput name="city" label='City/Town'/>
          <FormInput name="zip" label='Postcode'/>
         


        </Grid>
        <br/>
                   <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <Button component={Link} to="/cart" variant='outlined'>Back to Cart</Button>
                        <Button variant='contained' type="submit" color="primary">Next</Button>

                   </div>
        </form>

      </FormProvider>
    </div>
  )
}

export default AddressForm

