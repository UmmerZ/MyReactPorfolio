import { makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import Bid from "./images/bidacar.jpg"
import goodReels from "./images/goodreels.jpg"

export default function Projects() {
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
      background: "salmon",
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      background: "#444543",
    },
    containerMain2: {
      width: "90%",
      height: "30%",
      background: "salmon",
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
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #BFBFBF",
      boxShadow: "5px 5px 3px #9d9594",
      "&:hover": {
        backgroundImage: `url(${Bid})`,
        backgroundSize: "cover",
        width: "250px",
        height: "250px",
      },
    },
    containter2: {
      background: "grey",
      width: "200px",
      borderRadius: "10px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #BFBFBF",
      boxShadow: "5px 5px 3px #9d9594",
      "&:hover": {
        backgroundImage: `url(${goodReels})`,
        backgroundSize: "cover",
        width: "250px",
        height: "250px",
      },
    },
    containter3: {
      background: "grey",
      width: "200px",
      borderRadius: "10px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #BFBFBF",
      boxShadow: "5px 5px 3px #9d9594",
    },
    containter4: {
      background: "grey",
      width: "200px",
      borderRadius: "10px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #BFBFBF",
      boxShadow: "5px 5px 3px #9d9594",
    },
  }))
  const classes = useStyles()
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "-15em auto",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={classes.headNote}>Projects</h1>
      <div className={classes.containerMain1}>
        <div className={classes.containter1}>
          <h2>bid a car</h2>
        </div>

        <div className={classes.containter2}>
          <h2>GoodReels</h2>
        </div>

        <div className={classes.containter3}>
          <h2>Library Management</h2>
        </div>
        <div className={classes.containter4}>
          <h2>Random Date facts & Cordinate information</h2>
        </div>
      </div>
    </div>
  )
}
