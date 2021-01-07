import React from 'react'
import Hero from '../assets/IMG_1199.JPG'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const MainPic = ({sidebar}) => {
    const variants = {
        visible: { opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 2,
                when: 'beforeChildren'
            }},
        hidden: { opacity: 0 },
        
      }
    return (
        <StyledMain>
            <StyledHero src={Hero} alt=""/>
            <StyledHeroText className={sidebar ? "hide" : ""}>
                <motion.div variants={variants}  initial="hidden" animate="visible" >
            <h2 ><span>Blu</span> Lago</h2>
            <h3 >Experience France’s best fishing</h3>
            <h3 >A huge fish stock and brand new facilities</h3>
            <Link to="shopHome"><button>Book Now!</button></Link>
            </motion.div>
            </StyledHeroText>
           
        </StyledMain>
    )
}

const StyledMain = styled.div`
position: relative;
.hide{
    display: none;
}
`

const StyledHero = styled.img`
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    filter: brightness(40%);
    z-index: -10;
    `
const StyledHeroText = styled.div`
position: absolute;
top: 30%;
left: 5%;
z-index: 1;
span{
    color: #18DDEB
}
`

export default MainPic
