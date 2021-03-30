import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, makeStyles, List } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import MenuIcon from "@material-ui/icons/Menu"
import { useAuth } from "../Context"

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
    mobilebutton: {
      display: "block",
      color: "#ffffff",
    },
  }))
  const classes = useStyle()
  const [scrolled, setScrolled] = useState(false)
  const [ismobileMenu, setIsMobileMenu] = useState(false)

  const { isMobile, breakPoint } = useAuth()

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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const mobileMenu = (
    <div style={{ margin: "0", padding: "0" }}>
      <List>
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/MyReactPortfolio">
            Home
          </Link>
        </Button>
        <hr />

        {/* <Button className={classes.mobilebutton} color="inherit">
          Gallery
        </Button>
        <hr /> */}
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/contact">
            Contact
          </Link>
        </Button>
        <hr />
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/resume">
            Resume
          </Link>
        </Button>
        <hr />
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/about-me">
            About Me
          </Link>
        </Button>
      </List>
    </div>
  )

  const fullWidthMenu = (
    <List>
      <Button className={classes.buttons} color="inherit">
        <Link className={classes.link} to="/MyReactPortfolio">
          <HomeIcon />
        </Link>
      </Button>

      <Button className={classes.buttons} color="inherit">
        Gallery
      </Button>
      <Button className={classes.buttons} color="inherit">
        <Link className={classes.link} to="/contact">
          Contact
        </Link>
      </Button>
      <Button className={classes.buttons} color="inherit">
        <Link className={classes.link} to="resume">
          Resume
        </Link>
      </Button>
      <Button className={classes.buttons} color="inherit">
        <Link className={classes.link} to="/about-me">
          About Me
        </Link>
      </Button>
    </List>
  )
  const mobileNavbar = (
    <List className={classes.list}>
      <Button className={classes.buttons} color="inherit">
        <MenuIcon onClick={() => setIsMobileMenu(value => !value)} />
      </Button>
    </List>
  )
  return (
    <div style={{ marginTop: "20px" }}>
      <AppBar
        position="static"
        className={scrolled ? classes.scrolled : classes.navbar}
      >
        <Toolbar variant="dense">
          {isMobile < breakPoint ? mobileNavbar : fullWidthMenu}
        </Toolbar>
      </AppBar>
      {ismobileMenu && isMobile < breakPoint ? mobileMenu : ""}
    </div>
  )
}
