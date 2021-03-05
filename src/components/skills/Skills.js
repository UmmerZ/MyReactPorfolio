import React, { useState } from "react"
import { makeStyles, AppBar, Toolbar, Button, List } from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"

export default function Skills() {
  const [click, setclick] = useState(0)

  const useStyles = makeStyles(theme => ({
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
      maxWidth: "50%",
      margin: "0 auto",
      color: "#7B7F7C",
      transform: "skewY(11deg)",
      backgroundColor: "#7B7F7C",
      height: "25em",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",

      // "&:hover": {
      //   transform: " skewY(11deg) rotate(180deg)",
      //   tranistion: "visibility 1s linear",
      // },
    },
    content2: {
      display: "flex",
      margin: "0 auto",
      width: "80%",
      color: "#161716",
      backgroundColor: "#7B7F7C",
      height: "80%",
      justifyContent: "center",
      alignItems: "center",
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
      background: "#161716",
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
        background: "#161716",
        height: "20%",
      },
    },
    button2: {
      width: "10%",
      transition: "background .2s ease, color .2s ease",
      background: "#161716",

      "&:hover": {
        background: "#7B7F7C",
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
  }))
  const classes = useStyles()

  function renderForm() {
    switch (click) {
      case 0:
        return JavaScriptForm
      case 1:
        return ReactForm
      case 2:
        return CSharpForm
      case 3:
        return PythonForm
      case 4:
        return GraphQLApolloForm
      case 5:
        return SQLForm
      case 6:
        return CSSForm
      case 7:
        return AWSForm

      default:
        break
    }
  }
  const JavaScriptForm = (
    <div className={classes.content2}>
      JavaScript skills therkek adioeg addg alkjg aoiwetp iwaehgfahegpihwep aia
      ehgoiha oiegh aioehgh oaoihgo iaopwiwheg paihweopg haowiehg oiawjeog
      haoweihg aoiwweh [oego[ ihaweepo ehgoiaerh gopihawwepo hgopwihq epofgiawh
      ogihew[oihg a[ohew go[iawhopighawo giwpoa hpgioah wpeihgop aghi wopeiawegh
      opiawawehi g
    </div>
  )
  const ReactForm = <div className={classes.content2}>React skills</div>
  const CSharpForm = <div className={classes.content2}>CSharp skills</div>
  const PHPForm = <div className={classes.content2}>PhP skills</div>
  const GraphQLApolloForm = (
    <div className={classes.content2}>Apollo skills</div>
  )
  const PythonForm = <div className={classes.content2}>Python skills</div>
  const SQLForm = <div className={classes.content2}>Apollo skills</div>
  const CSSForm = <div className={classes.content2}>CSS skills</div>
  const AWSForm = <div className={classes.content2}>AWS skills</div>
  return (
    <div>
      <h1 className={classes.headNote}>
        Skills <BuildIcon />
      </h1>
      <div style={{ marginTop: "20px" }}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar variant="dense">
            <List className={classes.list}>
              <Button
                onClick={() => setclick(1)}
                className={classes.button1}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>JavaScript</p>
              </Button>
              <Button
                onClick={() => setclick(2)}
                className={classes.button2}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>ReactJS</p>
              </Button>
              <Button
                onClick={() => setclick(3)}
                className={classes.button1}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>C#</p>
              </Button>
              <Button
                onClick={() => setclick(4)}
                className={classes.button2}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>Python</p>
              </Button>
              <Button
                onClick={() => setclick(5)}
                className={classes.button1}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>Graphql</p>
              </Button>
              <Button
                onClick={() => setclick(6)}
                className={classes.button2}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>Apollo</p>
              </Button>
              <Button
                onClick={() => setclick(7)}
                className={classes.button1}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>SQL</p>
              </Button>
              <Button
                onClick={() => setclick(8)}
                className={classes.button2}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>PHP</p>
              </Button>
              <Button
                onClick={() => setclick(9)}
                className={classes.button1}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>CSS</p>
              </Button>
              <Button
                onClick={() => setclick(10)}
                className={classes.button2}
                variant="h6"
                color="inherit"
              >
                <p className={classes.h3}>AWS</p>
              </Button>
            </List>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>{renderForm()}</div>
      </div>
    </div>
  )
}
