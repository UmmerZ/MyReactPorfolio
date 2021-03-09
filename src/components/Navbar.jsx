import React, { useState, useEffect } from "react"
import MenuIcon from "@material-ui/core/Menu"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  List,
  Link,
} from "@material-ui/core"

export default function Navbar() {
  const useStyle = makeStyles(theme => ({
    buttons: {
      alignItems: "center",
      margin: '0 10px 0 5px',
      marginRight: '10px',
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    navbar: {
      backgroundColor: "MediumSeaGreen",
    },
    scrolled: {
      position: "fixed",
      top: "10px",
      backgroundColor: "#A006F2",
      transition: "all .7s ease-in",
    },
    list: {
      width: "80%",
      marigin: "auto",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
    },
  }))
  const classes = useStyle()
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <div style={{ marginTop: "20px" }}>
      <AppBar
        position="static"
        className={scrolled ? classes.scrolled : classes.navbar}
      >
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <List className={classes.list}>
            <Button className={classes.buttons} variant="h6" color="inherit">
              Gallery
            </Button>
            <Button className={classes.buttons} variant="h6" color="inherit">
              Contact
            </Button>
            <Button className={classes.buttons} variant="h6" color="inherit">
              <Link className={classes.link} to="/about-me">
                About Me
              </Link>
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  )
}
