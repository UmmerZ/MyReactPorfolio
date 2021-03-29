import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"
import ReactJsImage from "../images/Reactjs.png"

import sqlImage from "../images/sql.png"
import JsImage from "../images/js.jpg"
import CsharpImage from "../images/cSharp.jpg"
import GraphQLImage from "../images/graphql.png"
import ApolloImage from "../images/apollo.png"
import PHPImage from "../images/php.png"
import CSSImagae from "../images/css.png"
import AWSImage from "../images/aws.jpg"
import {
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

    containerMain1: {
      width: "90%",
      height: "30%",

      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      background: "0e160e",
      flexWrap: "wrap",
    },
    containter1: {
      background: "#0e160e",
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${JsImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterReact: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${ReactJsImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterCsharp: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${CsharpImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterGraphQl: {
      background: "grey",
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${GraphQLImage})`,
      backgroundSize: "cover",

      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterApollo: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${ApolloImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterSQL: {
      background: "grey",
      width: "200px",

      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${sqlImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containerPHP: {
      background: "grey",
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${PHPImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterCSS: {
      background: "grey",
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${CSSImagae})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    containterAWS: {
      background: "grey",
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${AWSImage})`,
      backgroundSize: "cover",
      "&:hover": {
        backgroundBlendMode: "multiply",
      },
    },
    clickView: {
      width: "400px",
      height: "400px",
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
        background: "0e160e",
      }}
    >
      <h1 className={classes.headNote}>
        Skills <BuildIcon />
      </h1>
      <div className={classes.containerMain1}>
        <div
          onClick={() => setclick(1)}
          className={click === 1 ? classes.clickView : classes.containter1}
        >
          {click === 1 ? JavaScriptForm : ""}
        </div>
        <div
          onClick={() => setclick(2)}
          className={click === 2 ? classes.clickView : classes.containterReact}
        >
          {click === 2 ? ReactForm : ""}
        </div>
        <div
          onClick={() => setclick(3)}
          className={click === 3 ? classes.clickView : classes.containterCsharp}
        >
          {click === 3 ? CSharpForm : ""}
        </div>
        <div
          onClick={() => setclick(5)}
          className={
            click === 5 ? classes.clickView : classes.containterGraphQl
          }
        >
          {click === 5 ? GraphQLForm : ""}
        </div>
        <div
          onClick={() => setclick(9)}
          className={click === 9 ? classes.clickView : classes.containterApollo}
        >
          {click === 9 ? ApolloForm : ""}
        </div>
        <div
          onClick={() => setclick(6)}
          className={click === 6 ? classes.clickView : classes.containterSQL}
        >
          {click === 6 ? SQLForm : ""}
        </div>
        <div
          onClick={() => setclick(4)}
          className={click === 4 ? classes.clickView : classes.containerPHP}
        >
          {click === 4 ? PHPForm : ""}
        </div>
        <div
          onClick={() => setclick(7)}
          className={click === 7 ? classes.clickView : classes.containterCSS}
        >
          {click === 7 ? CSSForm : ""}
        </div>
        <div
          onClick={() => setclick(8)}
          className={click === 8 ? classes.clickView : classes.containterAWS}
        >
          {click === 8 ? AWSForm : ""}
        </div>
      </div>
    </div>
  )
}
