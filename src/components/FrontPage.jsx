import React from "react"
import { makeStyles } from "@material-ui/core"
import Lion from "./images/lion.jpg"
import Universe from "./images/universe.jpg"

export default function FrontPage() {
  const useStyle = makeStyles(theme => ({
    content1: {
      maxWidth: "80%",
      margin: "200px auto",
      color: "#7B7F7C",
      borderRadius: "20px",
      position: "relative",
      backgroundImage: `url(${Lion})`,
      backgroundSize: "cover",
      height: "100%",
    },

    title: {
      maxWidth: "20%",
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
    <div style={{ height: "20em", width: "100%", back: "#444543" }}>
      <div className={classes.content1}>
        <h1 className={classes.title}>
          Hello! My Name is Ummer. I am a Web Developer{" "}
        </h1>
      </div>
    </div>
  )
}
