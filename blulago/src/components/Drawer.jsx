import React from 'react'
import { Home, CropOriginal, Loyalty, Bathtub, Gavel, ShoppingCart, ContactSupport} from '@material-ui/icons';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"



const Drawer = ({sidebar, setSidebar}) => {
    
    
    const navList = [
        {text: "Home", icon: <Home/>, path:"/"},
        {text: 'Your Cart', icon: <ShoppingCart/>, path: "/cart"},
        {text: "Gallery", icon: <CropOriginal/>, path:"/gallery"}, 
        {text: "Online Booking", icon: <Loyalty/>, path:"/shopHome"}, 
        {text: "Facilities", icon: <Bathtub/>, path:"/facilities"}, 
        {text: "Rules", icon: <Gavel/>, path:"/rules"}, 
        {text: "Contact Us", icon: <ContactSupport/>, path:"/contact"}]

        const variants = {
            hidden: { x: "-90%"},
            visible: { x: "10%",
                transition: {
                    duration: 1,
                    staggerChildren: 2,
                    when: 'beforeChildren'
                }},
          }
    return (
        <>
            <SidebarContainer>
                
            <Sidebar className={sidebar ? 'active' : 'hide'}>
                <NavMenuItems>
                {navList.map((listItem, index) => (
                    <Link key={index} to={listItem.path} onClick={() => setSidebar(false)}>
                    <FlexList key={index}>
                    <li >{listItem.text}</li><li>{listItem.icon}</li>
                    </FlexList>
                    </Link>))}
                </NavMenuItems>

            </Sidebar>
            </SidebarContainer>
        </>
        
    )
}


const SidebarContainer = styled.div`
.active{
    @media (max-width: 600px){
    display: block;
    z-index: 1000;
    left: 0;
}
}
.hide{
    width: 0vw;
    @media (max-width: 600px){
    left: -250px;
    }
}

`

const FlexList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1.3rem 0.3rem;
height: 3vh;
border-radius: 5px;

&:hover{
    cursor: pointer;
    background: HSL(0 0% 70%);
}
`


const Sidebar = styled.nav`
background-color: #EEEEEE;
position: fixed;
top: 0%;
height: 100vh;
transition: ease-in-out 0.55s;
width: 35vw;
overflow: hidden;
z-index: 10;
justify-content: start;
align-items: center;

.nav-menu{
    width: 0px;
    @media (max-width: 600px){
   width: 250px;
   height: 100vh;
    }
}

`

const NavMenuItems = styled.ul`
display: flex;
flex-direction: column;

a{
    &:hover{
    background: HSL(0 0% 70%);
    }
}

&:first-child{
    margin-top: 1rem;
}

`

export default Drawer
