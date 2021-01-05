import React from 'react'
import { Home, CropOriginal, Loyalty, Bathtub, Gavel, ShoppingCart, ContactSupport} from '@material-ui/icons';
import styled from 'styled-components'
import {Link} from 'react-router-dom'



const Drawer = ({sidebar}) => {
    
    
    const navList = [
        {text: "Home", icon: <Home/>, path:"/"},
        {text: 'Your Cart', icon: <ShoppingCart/>, path: "/cart"},
        {text: "Gallery", icon: <CropOriginal/>, path:"/gallery"}, 
        {text: "Online Booking", icon: <Loyalty/>, path:"/shopHome"}, 
        {text: "Facilities", icon: <Bathtub/>, path:"/facilities"}, 
        {text: "Rules", icon: <Gavel/>, path:"/rules"}, 
        {text: "Contact Us", icon: <ContactSupport/>, path:"/contact"}]
    return (
        <>
            <SidebarContainer>
            <Sidebar className={sidebar ? 'active' : 'hide'}>
                <NavMenuItems>
                {navList.map((listItem, index) => (
                    <Link key={index} to={listItem.path}>
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
    display: block;
    z-index: 1000;
}
.hide{
    display: none;
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
    height: 60px;
    background: HSL(0 0% 70%);
}



`


const Sidebar = styled.nav`
background-color: #EEEEEE;
position: fixed;
top: 0%;
height: 100vh;
width: 35vw;
overflow: hidden;
z-index: 10;
justify-content: start;
align-items: center;
.nav-menu{
   width: 250px;
   height: 100vh
}

`

const NavMenuItems = styled.ul`
display: flex;
flex-direction: column;



&:first-child{
    margin-top: 1rem;
}

`

export default Drawer
