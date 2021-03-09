import React from "react"
import { makeStyles } from "@material-ui/core"
import Lion from "./images/lion.jpg"
import Universe from "./images/universe.jpg"

export default function FrontPage() {
  const useStyle = makeStyles(theme => ({
    diagonalbox: {
      position: "relative",
      backgroundImage: `url(${Universe})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
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
      color: "#ffffff",
      background: "MediumSeaGreen",
      height: "100%",
      float: "left",
    },
    content3: {
      width: "50%",
      color: "#7B7F7C",
      background: "black",
      height: "100%",
      float: "right",
    },

    title: {
      maxWidth: "80%",
      margin: "20px 20px 20px 20px",
      overflow: "hidden",
      padding: "10px",
      animation: "$textanimation 5s infinite",
    },
    "@keyframes textanimation": {
      from: {
        opacity: "0",
      },
      to: {
        opacity: "1px",
      },
    },

    image: { width: "100%", height: "80%" },
  }))
  const classes = useStyle()
  return (
    <div>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>
          <div className={classes.content2}>
            {" "}
            <h1 className={classes.title}>
              Hello! My Name is Ummer. I am a Web Developer{" "}
            </h1>
          </div>
          <div className={classes.content3}>
            <img className={classes.image} src={Lion} alt="lion" />
          </div>
        </div>
      </div>
    </div>
  )
}
