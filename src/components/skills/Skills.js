import React, { useState } from "react"
import { makeStyles, Grid, Paper } from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"
import ReactJsImage from "../images/Reactjs.png"
import JavaScript from "../images/javascript.png"
import sqlImage from "../images/sql.png"
import JsImage from "../images/js.jpg"
import CsharpImage from "../images/cSharp.jpg"
import GraphQLImage from "../images/graphql.png"
import ApolloImage from "../images/apollo.png"
import PHPImage from "../images/php.png"
import CSSImagae from "../images/css.png"
import AWSImage from "../images/aws.jpg"
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
      background: "salmon",
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      background: "#444543",
      flexWrap: "wrap",
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
      borderRadius: "10px",
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
      borderRadius: "10px",
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
      borderRadius: "10px",
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
      borderRadius: "10px",
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
      borderRadius: "10px",
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
    containterPHP: {
      background: "grey",
      width: "200px",
      borderRadius: "10px",
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
      borderRadius: "10px",
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
      borderRadius: "10px",
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
  }))
  const classes = useStyles()

  function renderForm() {
    switch (click) {
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
      }}
    >
      <h1 className={classes.headNote}>
        Skills <BuildIcon />
      </h1>
      <div className={classes.containerMain1}>
        <div onClick={() => setclick(1)} className={classes.containter1}>
          {renderForm()}
        </div>
        <div
          onClick={() => setclick(2)}
          className={classes.containterReact}
        ></div>
        <div
          onClick={() => setclick(3)}
          className={classes.containterCsharp}
        ></div>
        <div
          onClick={() => setclick(5)}
          className={classes.containterGraphQl}
        ></div>
        <div
          onClick={() => setclick(9)}
          className={classes.containterApollo}
        ></div>
        <div
          onClick={() => setclick(6)}
          className={classes.containterSQL}
        ></div>
        <div
          onClick={() => setclick(4)}
          className={classes.containterPHP}
        ></div>
        <div
          onClick={() => setclick(7)}
          className={classes.containterCSS}
        ></div>
        <div
          onClick={() => setclick(8)}
          className={classes.containterAWS}
        ></div>
      </div>
    </div>
  )
}
