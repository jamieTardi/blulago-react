import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core';
import styled from 'styled-components'
import axios from 'axios'
import green from '@material-ui/core/colors/green';
import { spacing } from '@material-ui/system';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        
        primary:{
            main: '#595959',
            
        },
        
        
        
    },
    button:{
        background: '#18DDEB',
        color: '#595959',
        '&:hover': {
            backgroundColor: 'hsl(184 84% 30%)',}

    },
   
    textField: {
        backgroundColor: 'inherit',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '0.5rem',
        color:'black'
        
    },
    input: {
        color: '#595959'
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#595959",
      },
    focus: {
        color: 'red',
    }
    
    

})

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#18DDEB',
            color: '#595959'
        },
        secondary: {
            main: '#18DDEB',
            main: '#595959',
          },
          overrides: {
            MuiButton: {
              raisedPrimary: {
                color: '#595959',
              },
            },
          }
    },
   
})

const Form = () => {
    const classes = useStyles()
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
      const [inputs, setInputs] = useState({
        email: '',
        message: '',
        phone: ''
      })
      const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
          })
          setInputs({
            email: '',
            message: '',
            phone: ''
          })
        } else {
          setStatus({
            info: { error: true, msg: msg }
          })
        }
      }
      const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
      const handleOnSubmit = e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xgeppgqy',
          data: inputs
        })
          .then(response => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.'
            )
          })
          .catch(error => {
            handleServerResponse(false, error.response.data.error)
          })
        }
    return (
        <ThemeProvider theme={theme}>
        <FormContainer className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
        <h2>Contact Us</h2>
        <StyledForm>
           <TextField  label="Name"
          id="name"
          name="name"
          onChange={handleOnChange}
          required
          htmlFor="name"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          value={inputs.name}
          className={classes.textField}
          color="primary"
          autoFocus="true"
          size="large"
          InputLabelProps={{
            style: { color: '#595959' },
          }}
          InputProps={{
            classes: {
               root: classes.root,
               disabled: classes.disabled,
               notchedOutline: classes.notchedOutline,
               input: classes.input,
               focused: classes.focus
            }
         }}
         />
           <TextField  id="email"
          htmlFor="email"
          label="Email"
          name="email"
          required
          onChange={handleOnChange}
          type="email"
          value={inputs.email}
          InputLabelProps={{
            style: { color: '#595959' },
          }}
          type="text"
          autoComplete="current-email"
          variant="outlined"
          className={classes.textField}
          color="primary"
          size="large"
          InputProps={{
            classes: {
                root: classes.root,
                disabled: classes.disabled,
                notchedOutline: classes.notchedOutline,
                input: classes.input
             }
        }} />
           <TextField label="Phone No"
          id="phone"
          name="name"
          onChange={handleOnChange}
          required
          htmlFor="phone"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          value={inputs.phone}
          className={classes.textField}
          color="primary"
          autoFocus="true"
          size="large"
          InputLabelProps={{
            style: { color: '#595959' },
          }}
          InputProps={{
            classes: {
               root: classes.root,
               disabled: classes.disabled,
               notchedOutline: classes.notchedOutline,
               input: classes.input,
               focused: classes.focus
            }
         }}/>
           <TextField id="message"
          label="Message"
          htmlFor="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          InputLabelProps={{
            style: { color: '#595959' },
          }}
          type="text"
          multiline="true"
          rows="15"
          variant="outlined"
          className={classes.textField}
          color="primary"
          size="large"
          InputProps={{
            classes: {
                root: classes.root,
                disabled: classes.disabled,
                notchedOutline: classes.notchedOutline,
                input: classes.input
             }
        }}/>
           <Button className={classes.button} type="submit" disabled={status.submitting} variant="outlined">
           {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
               </Button> 
        </StyledForm>
    </FormContainer>  
    </ThemeProvider>  
    )
}

const StyledForm = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
.input{
    margin-bottom: 1rem;
}
`
const FormContainer = styled.div`
width: 50%;
h2{
    color: #595959;
    text-align: center;
}
@media (max-width: 900px){
        width: 90%;
    }
`
export default Form
