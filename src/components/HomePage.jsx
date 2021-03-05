import React from "react"
import { makeStyles } from "@material-ui/core"
import Lion from "./images/lion.jpg"

export default function HomePage() {
  const useStyle = makeStyles(theme => ({
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
  const classes = useStyle()
  return (
    <div>
      <h1 style={{ color: "#ffffff" }}></h1>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>
          <div className={classes.content2}>
            {" "}
            <h1 className={classes.title}>
              Hello! My Name is Ummer. I am married to React JS{" "}
            </h1>
          </div>
          <div className={classes.content3}>
            <img className={classes.image} src={Lion} />
          </div>
        </div>
      </div>
    </div>
  )
}
