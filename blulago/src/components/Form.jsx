import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

const Form = () => {
    return (
        <FormContainer>
        <h2>Contact Us</h2>
        <StyledForm>
           <TextField className="input" id="outlined-basic" label="Name" required variant="outlined" />
           <TextField  className="input" id="outlined-basic" label="Email" required variant="outlined" />
           <TextField className="input" id="outlined-basic" label="Phone No." required variant="outlined" />
           <TextField className="input" multiline="true" rows="20" id="outlined-basic" label="Message" required variant="outlined" /> 
        </StyledForm>
    </FormContainer>    
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
`
export default Form
