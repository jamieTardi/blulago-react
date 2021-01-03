import React from 'react'
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
            main: '#000000',
            
        },
        
        
        
    },
    button:{
        background: 'hsl(148 90% 41%)',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: 'hsl(148 90% 21%)',}

    },
   
    textField: {
        backgroundColor: 'inherit',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '0.5rem'
        
    },
    input: {
        color: '#ffffff'
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "white",
      },
    focus: {
        color: 'red',
    }
    
    

})

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#18DDEB',
            color: '#fffffff'
        },
        secondary: {
            
            main: '#ffffff',
          },
          overrides: {
            MuiButton: {
              raisedPrimary: {
                color: 'white',
              },
            },
          }
    },
   
})

const Form = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <FormContainer className={classes.root}>
        <h2>Contact Us</h2>
        <StyledForm>
           <TextField className="input" id="outlined-basic" label="Name" required variant="outlined" />
           <TextField  className="input" id="outlined-basic" label="Email" required variant="outlined" />
           <TextField className="input" id="outlined-basic" label="Phone No." required variant="outlined" />
           <TextField className="input" multiline="true" rows="15" id="outlined-basic" label="Message" placeholder="Write your message here" required variant="outlined" />
           <Button variant="contained"  color="primary">Submit</Button> 
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
