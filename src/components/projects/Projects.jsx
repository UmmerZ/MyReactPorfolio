import { makeStyles, Paper, Typography } from "@material-ui/core"
import React, { useState } from "react"
import Bid from "../images/bidacar.jpg"
import goodReels from "../images/goodreels.jpg"
import cSharp from "../images/cSharp.jpg"
import reactImage from "../images/reactrs.jpg"
import aspDotNetImage from "../images/asp.jpg"
import phpImage from "../images/php.png"
import { bidACarForm, goodReelsForm, libraryForm, phpForm } from "./popupForms"

export default function Projects() {
  const [click, setclick] = useState(0)
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
      background: "#3C4049",
      flexWrap: "wrap",
    },
    containerMain2: {
      width: "90%",
      height: "30%",

      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      background: "#444543",
    },
    containter1: {
      background: "grey",
      width: "200px",
      borderRadius: "10px",
      height: "200px",
      margin: "40px auto",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${cSharp})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundImage: `url(${Bid})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      },
    },
    containter2: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",

      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
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
      borderRadius: "10px",
      margin: "40px auto",

      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${aspDotNetImage})`,
      backgroundSize: "cover",
    },
    containter4: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",

      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
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
      background: "#3c4049",
      padding: "10px",
      borderRadius: "0 0 5px 5px",
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
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
    },
  }))
  const classes = useStyles()

  return (
    <div
      style={{
        height: "100%",
        width: "100%",

        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={classes.headNote}>Projects</h1>
      <div className={classes.containerMain1}>
        <div
          className={click === 1 ? classes.clickView : classes.containter1}
          onClick={() => setclick(1)}
        >
          {click === 1 ? bidACarForm : ""}
          <div>
            {click === 1 ? (
              ""
            ) : (
              <Paper className={classes.paper}>Bid-A-Car</Paper>
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
          {click === 3 ? libraryForm : ""}
          <div>
            {click === 3 ? (
              ""
            ) : (
              <Paper className={classes.paper}>Library Management</Paper>
            )}
          </div>
        </div>
        <div
          className={click === 4 ? classes.clickView : classes.containter4}
          onClick={() => setclick(4)}
        >
          {click === 4 ? phpForm : ""}
          <div>
            {click === 4 ? (
              ""
            ) : (
              <Paper className={classes.paper}>Corinates Information</Paper>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
