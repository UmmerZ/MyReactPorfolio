import React, { useState, useEffect } from "react"

import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  List,
  Link,
} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"

export default function Navbar() {
  const useStyle = makeStyles(theme => ({
    buttons: {
      alignItems: "center",
      margin: "0 10px 0 5px",
      marginRight: "10px",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    navbar: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    scrolled: {
      position: "fixed",
      top: "10px",
      backgroundColor: "#1C1C1C",
      transition: "all .7s ease-in",
    },
    list: {
      width: "80%",
      marigin: "auto",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      "&:hover": {
        textDecoration: "none",
      },
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
          <List className={classes.list}>
            <Button className={classes.buttons} color="inherit">
              <Link className={classes.link} href="/MyReactPortfolio">
                <HomeIcon />
              </Link>
            </Button>

            <Button className={classes.buttons} color="inherit">
              Gallery
            </Button>
            <Button className={classes.buttons} color="inherit">
              <Link className={classes.link} href="/contact">
                Contact
              </Link>
            </Button>
            <Button className={classes.buttons} color="inherit">
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
