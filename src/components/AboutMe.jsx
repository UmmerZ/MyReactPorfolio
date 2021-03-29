import React from "react"
import { makeStyles } from "@material-ui/core"
import Navbar from "./Navbar"
import Nature from "./images/mushroom.jpg"
import Footer from "./Footer"
import { aboutMeBio } from "./skills/forms"
import { useAuth } from "../Context"

export default function AboutMe() {
  const { isMobile, breakPoint } = useAuth()
  const useStyles = makeStyles(theme => ({
    content1: {
      width: "30%",
      height: "80%",
      float: "right",
      background: "transparent",
      position: "absolute",
      right: "10px",
    },
    contentMobile: {
      width: "90%",
      height: "80%",
      float: "right",
      background: "transparent",
      position: "absolute",
      right: "10px",
    },
    containerMain: {
      backgroundImage: `url(${Nature})`,
      backgroundSize: "cover",
    },
    containerSub: {
      height: "1000px",
      weight: "100%",
      display: "flex",
    },
    text: {
      color: "#ffffff",
    },
  }))
  const classes = useStyles()
  return (
    <div className={classes.containerMain}>
      <Navbar />
      <div className={classes.containerSub}>
        <div
          className={
            isMobile < breakPoint ? classes.contentMobile : classes.content1
          }
        >
          <h2>{aboutMeBio} </h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
