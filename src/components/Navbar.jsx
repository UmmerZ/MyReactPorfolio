import React from 'react'
import MenuIcon from "@material-ui/core/Menu"
import{AppBar, Toolbar, IconButton, Button, makeStyles, List } from '@material-ui/core'

export default function Navbar() {
    const useStyle = makeStyles((theme) => ( 
{
    buttons:{
        alignItems: 'center',
        borderRadius: '25px',
        "&:hover":{
            backgroundColor: "grey"
        },  

    },
    navbar:{
        backgroundColor: '#161716' },
    list:{
        width: '80%',
        marigin:'auto',
       
    }
    
}))
      const classes = useStyle()
  return (
        <div style={{marginTop: '20px'}}>
        <AppBar position="static" className={classes.navbar} > 
        <Toolbar variant="dense">
          <IconButton edge="start"  aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <List className={classes.list}>
          <Button className={classes.buttons} variant="h6" color="inherit">
            Gallery
          </Button >
          <Button className={classes.buttons} variant="h6" color="inherit">
            Contact
          </Button>
          <Button className={classes.buttons} variant="h6" color="inherit">
            About Me
          </Button >
          </List>
          
        </Toolbar>
      </AppBar>
        </div>
    )
}
