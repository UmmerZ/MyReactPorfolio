import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import mushroom from "./images/mushroom.jpg"
import { useAuth } from "../Context"
export default function FrontPage() {
  const [swap, setswap] = useState(0)
  const { isMobile } = useAuth()
  const breakPoint = 750
  const useStyle = makeStyles(theme => ({
    containerMain: {
      backgroundImage: `url(${mushroom})`,
      backgroundSize: "cover",
    },

    container1: {
      width: "40%",
      height: "100%",
      float: "right",
      background: "transparent",
      position: "absolute",
      right: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    containerMobile: {
      width: "80%",
      height: "100%",
      float: "right",
      background: "transparent",
      position: "absolute",
      right: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      maxWidth: "100%",
      animation: "$textanimation 5s ",
      color: "#ffffff",
    },

    bold: {
      textDecoration: "none",
      color: "#C2A22B",
      background: "transparent",
      fontSize: "50px",
    },
    bold2: {
      textDecoration: "none",
      color: "#C2A22B",
      background: "transparent",
      fontSize: "30px",
      marginLeft: "10px",
    },
    "@keyframes textanimation": {
      from: {
        opacity: "0",
      },
      to: {
        opacity: "1px",
      },
    },
    containerSub: {
      height: "45em",
      weight: "80%",
      display: "flex",
    },
    h2: {
      color: "#ffffff",
      fontWeight: "normal",
      fontSize: "20px",
    },

    image: { width: "100%", height: "80%" },
    arrow: {
      border: "solid #ffffff",
      borderWidth: "0 0 3px 0",
      display: "inline-block",
      padding: "10px",
      marginRight: "10px",
      bottom: "0",
    },
    arrowSelected: {
      border: "solid 5px #35be44",
      borderWidth: "0 0 3px 0",
      display: "inline-block",
      padding: "10px",
      marginRight: "10px",
      bottom: "0",
    },

    arrowdiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0",
      padding: "0",
      bottom: "200px",
      position: "absolute",
    },
  }))
  const classes = useStyle()
  const bioDefaultForm = (
    <div
      style={{
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className={classes.title}>Hello! </h1>
      <p className={classes.h2}>
        My Name is <br />
        <span className={classes.bold}>
          UMMER. <br />
        </span>
        I am a Web Developer by profession
        <br />
        I code on WEEKDAYS
        <br />
        & <br />I debug on WEEKENDS
      </p>
    </div>
  )

  const grandCanyonForm = (
    <div>
      <p className={classes.h2}>
        <span className={classes.bold}>
          IF <br />
        </span>
        You want State of the Art UI
        <span className={classes.bold2}>Hire Me!</span>
        <br />
        <span className={classes.bold}>
          IF <br />
        </span>
        You want server running at Lightning Speeds
        <span className={classes.bold2}>Hire Me!</span> <br />
        <span className={classes.bold}>
          IF <br />
        </span>
        You want to you Releational or Graph Databases
        <span className={classes.bold2}>Hire Me!</span>
      </p>
    </div>
  )
  const highway15Form = (
    <div>
      <p className={classes.h2}>
        <span className={classes.bold}>Favorite Quote</span> <br />
        The best programs are written so that computing machines can perform
        them quickly and so that human beings can understand them clearly. A
        programmer is ideally an essayist who works with traditional aesthetic
        and literary forms as well as mathematical concepts, to communicate the
        way that an algorithm works and to convince a reader that the results
        will be correct.
        <span className={classes.bold2}>― Donald E. Knuth, </span>
      </p>
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
      <div className={classes.containerSub}>
        <div
          className={
            isMobile > breakPoint ? classes.container1 : classes.containerMobile
          }
        >
          {handleSwap()}
          <div className={classes.arrowdiv}>
            <i
              className={swap === -1 ? classes.arrowSelected : classes.arrow}
              onClick={() => setswap(-1)}
            ></i>

            <i
              className={swap === 0 ? classes.arrowSelected : classes.arrow}
              onClick={() => setswap(0)}
            ></i>

            <i
              className={swap === 1 ? classes.arrowSelected : classes.arrow}
              onClick={() => setswap(1)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}
