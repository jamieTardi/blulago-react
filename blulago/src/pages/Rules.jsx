import React from 'react'
import {Ruleset} from '../lib/Ruleset'
import styled from 'styled-components'


const Rules = ({closeMenu}) => {
    const theRules = Ruleset()
    return (
        <RulesContainer onClick={closeMenu}>
            <TextContainer>
            <h2>Rules</h2>
            <p>These are the fishery rules, 
                the rules must be followed at all times anyone caught 
                not following the rules will be asked to leave the site 
                and no refunds will be issued. The rules are there for your 
                safety and fish health. If you have issues you wish to raise in 
                regards to the rules please feel free to message us and if you are on 
                site feel free to talk to the bailiff. </p>
                </TextContainer>
            {theRules.map((rules, index) => (
                <ListDiv key ={rules.rule}>
                <Ordered>
                <li ><span>{++index}.</span>{rules.rule}</li>
                </Ordered>
                </ListDiv>
                ))}
        </RulesContainer>
    )
}

const RulesContainer = styled.div`
width: 95vw;
height: fit-content;
margin: 1rem 1rem;

h2{
    text-align: center;
    color: #595959;
}
p{
    margin-bottom: 1rem;
}
`
const TextContainer = styled.div`
    background-color: #E3DFDB;
    box-shadow: 5px 5px 15px 5px grey;
    padding: 0rem 2rem 1rem 2rem;
    @media (max-width: 600px){
        width: 94%;
    }
    `

const ListDiv = styled.div`

`

const Ordered = styled.ol`

li{
    margin: 1.5rem 0rem;
}
span{
    margin-right: 1rem;
}
`

export default Rules
