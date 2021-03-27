import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import Lion from "./images/lion.jpg"
import GrandCanyon from "./images/grandcanyon.jpg"
import Highway15Image from "./images/highway15.jpg"

export default function FrontPage() {
  const [swap, setswap] = useState(0)
  const useStyle = makeStyles(theme => ({
    containerMain: {
      display: "flex",
    },
    container1: {
      width: "900px",
      height: "500px",
      margin: "100px auto",
      color: "#7B7F7C",
      borderRadius: "10px",
      position: "relative",
      backgroundImage: `url(${Lion})`,
      backgroundSize: "cover",

      boxShadow: "5px 5px 3px  #201c1c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
      width: "900px",
      height: "500px",
      margin: "100px auto",
      color: "#7B7F7C",
      borderRadius: "10px",
      position: "relative",
      backgroundImage: `url(${GrandCanyon})`,
      backgroundSize: "cover",
      boxShadow: "5px 5px 3px  #201c1c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container3: {
      width: "900px",
      height: "500px",
      margin: "100px auto",
      color: "#7B7F7C",
      borderRadius: "10px",
      position: "relative",
      backgroundImage: `url(${Highway15Image})`,
      backgroundSize: "cover",

      boxShadow: "5px 5px 3px  #201c1c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      maxWidth: "50%",
      marginTop: "50px",
      padding: "10px",
      animation: "$textanimation 5s ",
      color: "#ffffff",
    },

    title1: {
      maxWidth: "50%",
      marginTop: "50px",
      padding: "10px",
      animation: "$textanimation 5s ",
      color: "#ffffff",
    },
    title2: {
      maxWidth: "50%",
      marginTop: "50px",
      padding: "10px",
      animation: "$textanimation 5s ",
      color: "#ffffff",
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
    arrowRight: {
      border: "solid black",
      borderWidth: "0 3px 3px 0",
      display: "inline-block",
      padding: "10px",
      transform: "rotate(-45deg)",
      WebkitTransform: "rotate(-45deg)",
    },
    arrowLeft: {
      border: "solid black",
      borderWidth: "0 3px 3px 0",
      display: "inline-block",
      padding: "10px",
      transform: "rotate(45deg)",
      WebkitTransform: "rotate(135deg)",
    },
    arrowdiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      padding: "0 auto",
    },
  }))
  const classes = useStyle()
  const bioDefaultForm = (
    <div className={classes.container1}>
      <h1 className={classes.title}>
        Hello! My Name is Ummer. I am a Web Developer{" "}
      </h1>
    </div>
  )

  const grandCanyonForm = (
    <div className={classes.container2}>
      <h1 className={classes.title1}>
        I love discovering nature. Traveling makes me happy!{" "}
      </h1>
    </div>
  )
  const highway15Form = (
    <div className={classes.container3}>
      <h1 className={classes.title2}>Everyday I Code! </h1>
    </div>
  )
  function handleSwap() {
    switch (swap) {
      case 0:
        return bioDefaultForm
      case 1:
        return grandCanyonForm
      case -1:
        return highway15Form
      default:
        break
    }
  }
  return (
    <div className={classes.containerMain}>
      <div className={classes.arrowdiv}>
        {swap >= 0 ? (
          <i
            className={classes.arrowLeft}
            onClick={() => setswap(swap - 1)}
          ></i>
        ) : (
          ""
        )}
      </div>
      {handleSwap()}
      <div className={classes.arrowdiv}>
        {swap <= 0 ? (
          <i
            className={classes.arrowRight}
            onClick={() => setswap(swap + 1)}
          ></i>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
