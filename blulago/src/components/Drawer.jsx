import React from 'react'
import {Drawer as MUIDrawer, ListItem, List, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { Home, CropOriginal, Loyalty, Bathtub, Gavel, ContactSupport} from '@material-ui/icons';


const useStyles = makeStyles({
  drawer: {
    width: '160px',
  }

})

const Drawer = () => {
    const classes = useStyles()
    const navList = [
        {text: "Home", icon: <Home/>},
        {text: "Gallery", icon: <CropOriginal/>}, 
        {text: "Online Booking", icon: <Loyalty/>}, 
        {text: "Facilities", icon: <Bathtub/>}, 
        {text: "Rules", icon: <Gavel/>}, 
        {text: "Contact Us", icon: <ContactSupport/>}]
    return (
        <MUIDrawer open="true" variant="permanent" className={classes.drawer}>
            <List>
                {navList.map((navItem, index) => (
                    <ListItem button key={navItem.text}>
                        <ListItemText primary={navItem.text} secondary={navItem.icon}/>
                        </ListItem>
                        ))}
            </List>
        </MUIDrawer>
    )
}

export default Drawer
