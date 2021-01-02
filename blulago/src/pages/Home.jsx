import React from 'react'
import MainPic from '../components/MainPic'
import AboutUs from '../components/AboutUs'
import Location from '../components/Location'




const Home = ({sidebar ,setSidebar}) => {

const closeMenu = () => {
    setSidebar(false)
}
    return (
        <div onClick={closeMenu}>
            <MainPic sidebar={sidebar} />
            <AboutUs />
            <Location />
            
            
        </div>
    )
}

export default Home
