import { makeStyles, Paper } from "@material-ui/core"
import React, { useState } from "react"
import Bid from "../images/bidacar.jpg"
import Bid2 from "../images/Bid2.jpg"
import goodReels from "../images/goodreels.jpg"
import cSharp from "../images/cSharp.jpg"
import reactImage from "../images/reactrs.jpg"
import aspDotNetImage from "../images/asp.jpg"
import phpImage from "../images/php.png"
import SpringChatImage from "../images/SpringChat.jpg"
import SpringLoginImage from "../images/SpringLogin.jpg"
import { bidACarForm, goodReelsForm, springChatForm } from "./popupForms"
import Fox from "../images/fox.jpg"
import { projectTextForm } from "../skills/forms"
import { useAuth } from "../../Context"

export default function Projects() {
  const [click, setclick] = useState(0)
  const { isMobile, breakPoint } = useAuth()
  const useStyles = makeStyles(theme => ({
    headNote: {
      color: "#ffffff",
      marginTop: "150px",
      textAlign: "center",
      paddingBottom: "0",
    },
    containerMain1: {
      width: "90%",
      height: "30%",
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      background: "transparent",
      flexWrap: "wrap",
    },
    containerMain2: {
      width: "90%",
      height: "30%",
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      background: "#0e160e",
    },
    containter1: {
      background: "grey",

      width: "200px",
      height: "200px",
      margin: "40px auto",
      backgroundImage: `url(${SpringLoginImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundImage: `url(${SpringChatImage})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      },
    },
    containter2: {
      background: "grey",
      width: "200px",
      height: "200px",
      margin: "40px auto",
      backgroundImage: `url(${reactImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundImage: `url(${goodReels})`,
        backgroundSize: "cover",
      },
    },
    containter3: {
      background: "grey",
      width: "200px",
      height: "200px",
      margin: "40px auto",
      backgroundImage: `url(${Bid})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundImage: `url(${Bid2})`,
        backgroundSize: "cover",
      },
    },
    containter4: {
      background: "grey",
      width: "200px",
      height: "200px",
      margin: "40px auto",
      backgroundImage: `url(${phpImage})`,
      backgroundSize: "cover",
    },
    popover: {
      pointerEvents: "none",
    },
    paper: {
      marginTop: "160px",
      position: "relative",
      color: "#ffffff",
      opacity: ".5",
      background: "#0e160e",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    clickView: {
      width: "500px",
      height: "300px",
      borderRadius: "10px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    containerText: {
      height: "100%",
      width: "50%",
      color: "white",
      right: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px 10px 10px 10px",
    },
  }))
  const classes = useStyles()

  return (
    <div
      style={{
        backgroundImage: `url(${Fox})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className={classes.headNote}>Projects</h1>
      <div
        style={{
          background: "transparent",
          display: "flex",
        }}
      >
        <div className={classes.containerMain1}>
          {isMobile < breakPoint ? <div>{projectTextForm}</div> : ""}
          <div
            className={click === 1 ? classes.clickView : classes.containter1}
            onClick={() => setclick(1)}
          >
            {click === 1 ? springChatForm : ""}
            <div>
              {click === 1 ? (
                ""
              ) : (
                <Paper className={classes.paper}>SpringChat(MERN)</Paper>
              )}
            </div>
          </div>

          <div
            className={click === 2 ? classes.clickView : classes.containter2}
            onClick={() => setclick(2)}
          >
            {click === 2 ? goodReelsForm : ""}
            <div>
              {click === 2 ? (
                ""
              ) : (
                <Paper className={classes.paper}>GoodReels</Paper>
              )}
            </div>
          </div>

          <div
            className={click === 3 ? classes.clickView : classes.containter3}
            onClick={() => setclick(3)}
          >
            {click === 3 ? bidACarForm : ""}
            <div>
              {click === 3 ? (
                ""
              ) : (
                <Paper className={classes.paper}>Bid-A-Car</Paper>
              )}
            </div>
          </div>
        </div>
        {isMobile > breakPoint ? (
          <div className={classes.containerText}>{projectTextForm}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
