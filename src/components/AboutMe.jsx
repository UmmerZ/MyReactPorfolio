import React from "react"
import { makeStyles } from "@material-ui/core"
import Navbar from "./Navbar"

export default function AboutMe() {
  const useStyles = makeStyles(theme => ({
    diagonalbox: {
      position: "relative",
      backgroundImage: "linear-gradient(45deg, #171717, #292A29)",
      transform: "skewY(-11deg)",
      height: "20em",
      marginTop: "5em",
      margin: "0",
      width: "100%",
    },
    content1: {
      maxWidth: "40em",
      margin: "200px auto",
      color: "#7B7F7C",
      transform: "skewY(11deg)",
      position: "relative",

      height: "20em",
    },
    content2: {
      width: "50%",
      color: "#161716",
      background: "#7B7F7C",
      height: "20em",
      float: "left",
    },
    content3: {
      width: "50%",
      color: "#7B7F7C",
      background: "black",
      height: "20em",
      float: "right",
    },
    title: {
      maxWidth: "80%",
      margin: "20px 20px 20px 20px",
      padding: "10px",
    },
    image: { width: "100%", height: "80%" },
  }))
  const classes = useStyles()
  return (
    <div><Navbar />
      <h1 style={{ color: "#ffffff" }}>About me</h1>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>
          <div className={classes.content2}>
            <p>My name is Ummer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
