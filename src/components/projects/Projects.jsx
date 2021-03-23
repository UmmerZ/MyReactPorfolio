import { makeStyles, Popover, Typography } from "@material-ui/core"
import React, { useState } from "react"
import Bid from "../images/bidacar.jpg"
import goodReels from "../images/goodreels.jpg"
import cSharp from "../images/cSharp.jpg"
import reactImage from "../images/reactrs.jpg"
import aspDotNetImage from "../images/asp.jpg"
import phpImage from "../images/php.png"

export default function Projects() {
  const [anchorEl, setAnchorEl] = useState(0)

  const handlePopoverOpen = event => {
    setAnchorEl(1)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const handlePopoverOpen1 = event => {
    setAnchorEl(2)
  }

  const handlePopoverClose1 = () => {
    setAnchorEl(null)
  }
  const handlePopoverOpen2 = event => {
    setAnchorEl(3)
  }

  const handlePopoverClose2 = () => {
    setAnchorEl(null)
  }
  const handlePopoverOpen3 = event => {
    setAnchorEl(4)
  }

  const handlePopoverClose3 = () => {
    setAnchorEl(null)
  }

  const open = Number(anchorEl)

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
      flexWrap: "wrap",
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
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${cSharp})`,
      backgroundSize: "cover",
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
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${reactImage})`,
      backgroundSize: "cover",
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
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${aspDotNetImage})`,
      backgroundSize: "cover",
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
      border: "5px solid #201c1c",
      boxShadow: "5px 5px 3px  #201c1c",
      backgroundImage: `url(${phpImage})`,
      backgroundSize: "cover",
    },
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  }))
  const classes = useStyles()
  const popOverFormCSharp = (
    <div>
      <Typography
        aria-owns={open ? "popOverFormCSharp" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Bid-A-Car
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open === 1 ? open : null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          I have created this app from scratch using C# , MySQL and React JS. My
          goal was to create a bidding website for cars where a user can post
          his car and other users can bid if interested in buying it. It also
          involves authentication where a user has to Register and login with
          valid credentials
        </Typography>
      </Popover>
    </div>
  )
  const popOverFormReactJs = (
    <div>
      <Typography
        aria-owns={open ? "popOverFormReactJs" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen1}
        onMouseLeave={handlePopoverClose1}
      >
        GoodReels
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open === 2 ? open : null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose1}
        disableRestoreFocus
      >
        <Typography>
          This app I created used React and Redux. With this app you can
          register/login and then you can access the dashboard to read the
          synopsis, rating and reviews of the movies available.Also you can rate
          and review the movies and will display the aggregrate ratings for each
          movie.
        </Typography>
      </Popover>
    </div>
  )
  const popOverFormDotnet = (
    <div>
      <Typography
        aria-owns={open ? "popOverFormDotnet" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen2}
        onMouseLeave={handlePopoverClose2}
      >
        Bid-A-Car
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open === 3 ? open : null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose2}
        disableRestoreFocus
      >
        <Typography>
          I have used .NETCore and MySql to build this app. It is a book library
          management app which can keep track of all books if borrowed, overdue
          or returned etc.
        </Typography>
      </Popover>
    </div>
  )
  const popOverFormCphp = (
    <div>
      <Typography
        aria-owns={open ? "popOverFormphp" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen3}
        onMouseLeave={handlePopoverClose3}
      >
        Bid-A-Car
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open === 4 ? true : false}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose3}
        disableRestoreFocus
      >
        <Typography>
          This application I have build with php by fetching an API where it
          gives you facts about the random years and will provide data about the
          given cordinates
        </Typography>
      </Popover>
    </div>
  )
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
        <div className={classes.containter1}>{popOverFormCSharp}</div>

        <div className={classes.containter2}>
          <h2>{popOverFormReactJs}</h2>
        </div>

        <div className={classes.containter3}>
          <h2>{popOverFormDotnet}</h2>
        </div>
        <div className={classes.containter4}>
          <h2>{popOverFormCphp}</h2>
        </div>
      </div>
    </div>
  )
}
