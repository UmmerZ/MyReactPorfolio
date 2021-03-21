import React, { useState } from "react"
import { makeStyles, Grid, Paper } from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"
import NoteBook from "../images/notebook.jpg"
import JavaScript from "../images/javascript.png"
import Code from "../images/code.jpg"
import {
  defaultForm,
  JavaScriptForm,
  ReactForm,
  CSharpForm,
  PHPForm,
  GraphQLForm,
  SQLForm,
  CSSForm,
  AWSForm,
  ApolloForm,
} from "./forms"

export default function Skills() {
  const [click, setclick] = useState(0)

  const useStyles = makeStyles(theme => ({
    content1: {
      maxWidth: "50%",
      margin: "0 auto",
      paddingTop: "10px",
      color: "#7B7F7C",

      backgroundColor: "#e9ecf2",
      height: "25em",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      border: "solid",
      borderRadius: "10px",

      // "&:hover": {
      //   transform: " skewY(11deg) rotate(180deg)",
      //   tranistion: "visibility 1s linear",
      // },
    },
    content2: {
      display: "block",
      width: "80%",
      color: "#323336",
      backgroundColor: "#e9ecf2",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "scroll",
      padding: "10px auto",
    },
    title: {
      maxWidth: "80%",
      margin: "20px 20px 20px 20px",
      padding: "10px",
    },
    headNote: {
      color: "#ffffff",
      marginTop: "150px",
      textAlign: "center",
      paddingBottom: "0",
    },

    navbar: {
      background: "#A006F2",
    },
    list: {
      width: "100%",
      justifyContent: "center",
      margin: "0 auto",
      alignItems: "center",
    },
    button1: {
      width: "8%",
      margin: "10px auto",
      transition: "background .2s ease, color .2s ease",
      background: "#161716",

      "&:hover": {
        height: "20%",
        background: "#A006F2",
      },
    },
    button2: {
      width: "10%",
      transition: "background .2s ease, color .2s ease",
      background: "#161716",

      "&:hover": {
        background: "#A006F2",
        height: "20%",
      },
    },
    drawer: {
      background: "#161716",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      display: "flex",
    },
    grid: {
      width: "100%",
      height: "10em",
      display: "flex",
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: "center",
      color: theme.palette.text.secondary,
      fontSize: "1.2em",
      fontWeight: "bold",
      border: "solid",
      borderRadius: "10px",
      boxShadow: "5px 5px black",
      "&:hover": {
        background: "transparent",
        color: "#ffffff",
        fontWeight: "normal",
      },
    },
    default: {
      backgroundImage: `url(${Code})`,
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      marginTop: "-10px",
      color: "#e9ecf2",
    },
  }))
  const classes = useStyles()

  function renderForm() {
    switch (click) {
      case 0:
        return defaultForm
      case 1:
        return JavaScriptForm
      case 2:
        return ReactForm
      case 3:
        return CSharpForm
      case 4:
        return PHPForm
      case 5:
        return GraphQLForm
      case 6:
        return SQLForm
      case 7:
        return CSSForm
      case 8:
        return AWSForm
      case 9:
        return ApolloForm

      default:
        break
    }
  }

  return (
    <div
      style={{
        background: "#444543",

        height: "60em",
        marginTop: "10em",
      }}
    >
      <h1 className={classes.headNote}>
        Skills <BuildIcon />
      </h1>
      <div>
        <Grid
          container
          spacing={4}
          style={{
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
          }}
        >
          <Grid item>
            <Paper
              style={{
                hover: {
                  backgroundImage: `url(${JavaScript})`,
                  backgroundSize: "center",
                },
              }}
              onClick={() => setclick(1)}
              className={classes.paper}
            >
              JavaScript
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(2)} className={classes.paper}>
              React JS
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(3)} className={classes.paper}>
              CSharp
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(5)} className={classes.paper}>
              GraphQl
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(9)} className={classes.paper}>
              Apollo
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(6)} className={classes.paper}>
              SQL
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(4)} className={classes.paper}>
              PHP
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(7)} className={classes.paper}>
              CSS
            </Paper>
          </Grid>
          <Grid item>
            <Paper onClick={() => setclick(8)} className={classes.paper}>
              AWS
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>{renderForm()}</div>
      </div>
    </div>
  )
}
