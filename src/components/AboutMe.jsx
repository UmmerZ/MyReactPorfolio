import React from "react"
import { makeStyles } from "@material-ui/core"
import Navbar from "./Navbar"
import Nature from "./images/mushroom.jpg"
import Footer from "./Footer"
import { aboutMeBio } from "./skills/forms"

export default function AboutMe() {
  const useStyles = makeStyles(theme => ({
   
    content1: {
    width:"30%",
    height:"80%",
    float:"right",
    background:"transparent",
    position:"absolute",
    right:"10px"
   
    },
    containerMain:{
      width:"100%",
      height:"60em",
      backgroundImage: `url(${Nature})`,
      backgroundSize:"cover",
      
      
    },
    containerSub:{
      height:"100%",
      weight:"100%",
      display:"flex",
     
    },
    text:{
      color:"#ffffff"
    }
   
  }))
  const classes = useStyles()
  return (
    <div className={classes.containerMain}> 
      <Navbar />
      <div className={classes.containerSub}>
      <div className={classes.content1}>
        <h2 >{aboutMeBio} </h2>
      </div>
    </div>
    <Footer />
    </div>
    
  )
}
