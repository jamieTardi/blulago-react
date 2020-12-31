import React from 'react'
import { Home, CropOriginal, Loyalty, Bathtub, Gavel, ContactSupport} from '@material-ui/icons';
import styled from 'styled-components'
import {Link} from 'react-router-dom'



const Drawer = ({showSidebar, sidebar, setSidebar}) => {
    
    
    const navList = [
        {text: "Home", icon: <Home/>, path:"/"},
        {text: "Gallery", icon: <CropOriginal/>, path:"/gallery"}, 
        {text: "Online Booking", icon: <Loyalty/>, path:"/shopHome"}, 
        {text: "Facilities", icon: <Bathtub/>, path:"/facilities"}, 
        {text: "Rules", icon: <Gavel/>, path:"/rules"}, 
        {text: "Contact Us", icon: <ContactSupport/>, path:"/contactUs"}]
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
    z-index: 1;
}
.hide{
    display: none;
}

`

const FlexList = styled.div`
display: flex;
justify-content: space-between;
margin: 1.3rem 0.3rem;
&:hover{
    cursor: pointer;
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
align-items: space-between;

&:first-child{
    margin-top: 1rem;
}

`

export default Drawer
