import React, { useState } from "react"
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  List,
  Grid,
  Typography,
  Card,
  Paper,
} from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"
import NoteBook from "../images/notebook.jpg"

export default function Skills() {
  const [click, setclick] = useState(0)

  const useStyles = makeStyles(theme => ({
    diagonalbox: {
      position: "relative",
      backgroundImage: `url(${NoteBook})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: "skewY(-11deg)",
      height: "20em",
      marginTop: "5em",
      margin: "0",
      width: "100%",
    },
    content1: {
      maxWidth: "50%",
      margin: "10px auto",
      paddingTop: "10px",
      color: "#7B7F7C",
      transform: "skewY(11deg)",
      backgroundColor: "#e9ecf2",
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
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "grey",
      border: "solid",
      borderRadius: "10px",
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
  const defaultForm = (
    <div className={classes.content2}>
      <h2>
        I am a passionate learner. Every day passes by I learn something new.
      </h2>
    </div>
  )
  const JavaScriptForm = (
    <div className={classes.content2}>
      <h2>JavaScript Skills</h2>
      <ul>
        <h3>Proficient with Front End javaScript with HTML/CSS</h3>
        <h3>Proficient with Back End Nodejs</h3>
        <h3>Expreinced in Express Server deployment</h3>
        <h3>Automation and Building Tools/ Web performance</h3>
        <h3> Familiar with Debugging and Testing tools</h3>
      </ul>
    </div>
  )
  const ReactForm = (
    <div className={classes.content2}>
      <h2>React JS Skills</h2>
      <ul>
        <h3>Experienced in Front End React Deployment</h3>
        <h3>InDepth knowledge and experience in State Management</h3>
        <h3>Profiencent with React Hooks</h3>
        <h3>
          Profiencient in using CSS libraries like bootstrap and materialUI
        </h3>
        <h3>
          Have build more than dozen application using front end as React JS
        </h3>
      </ul>
    </div>
  )
  const CSharpForm = (
    <div className={classes.content2}>
      <h2>CSharp skills</h2>
      <ul>
        <h3>Was my focussed Object Oriented Language during my Course</h3>
        <h3>
          InDepth knowledge and experience 4 pillars of OOP
          <ul>
            <li>Encapsulation</li>
            <li>Abstraction</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
          </ul>
        </h3>
        <h3>Experienced in .NET framework with Code First Database approach</h3>
        <h3>Experienced in Unit Testing</h3>
        <h3>
          Extensive experience in creating RestAPI's (GET, POST, PATCH, DELETE)
        </h3>
        <h3>
          Have worked on numerous projects using .NetCore as backend language
          with MySql and MongoDB
        </h3>
        <h3>
          Have used C# with React JS and MySql for my Capstone Project(BidACar)
          with code first approach and Web API's, source code is on my github
        </h3>
      </ul>
    </div>
  )
  const PHPForm = <div className={classes.content2}>PhP skills</div>
  const GraphQLForm = (
    <div className={classes.content2}>
      {" "}
      <h2>GraphQl Skills</h2>
      <ul>
        <h3>
          Currently working on a project with Graphql as our query language
        </h3>
        <h3>Proficient with Querying and Mutations of APIs</h3>
        <h3>Experience with GraphQL Shield used for Authorization purposes</h3>
        <h3>
          Expert in creating Graphql Schema such as TypeDefs and Resolvers
        </h3>
        <h3>
          Experience in making Graphql with most of the JavaScript frond end
          libraries like React JS
        </h3>
      </ul>
    </div>
  )
  const ApolloForm = (
    <div className={classes.content2}>
      {" "}
      <h2>Apollo Skills</h2>
      <ul>
        <h3>Working currently on a Application using Apollo Client</h3>
        <h3>Experience in Data fetching and mutations using Apollo client </h3>
        <h3>
          Experience in deploying Apollo client as a statemanagemant tool which
          takes burden off the caching and using context hooks in React
        </h3>
        <h3>
          knowledge of implememting Apollo with any Stack using graphql api's
          for quering and mutating
        </h3>
        <h3>
          It being one of the latest creation of facebook to make React and
          Graphql work seamlessly is just awesome and should be one of the top
          sought language in statemanagemt tool
        </h3>
      </ul>
    </div>
  )

  const CSSForm = (
    <div className={classes.content2}>
      {" "}
      <h2>CSS Skills</h2>
      <ul>
        <h3>Have been using CSS to style my most projects.</h3>
        <h3>Expert in CSS for:</h3>
        <ul>
          <li>Animations</li>
          <li>Transition Effects</li>
          <li>Media queries for different screen sizes</li>
          <li>Designing Grid layout using CSS Grid</li>
          <li>Conditional styling on hover, scroll, screen size and onClick</li>
        </ul>
        <h3>Experience with GraphQL Shield used for Authorization purposes</h3>
        <h3>
          Expert in creating Graphql Schema such as TypeDefs and Resolvers
        </h3>
        <h3>
          Experience in making Graphql with most of the JavaScript frond end
          libraries like React JS
        </h3>
      </ul>
    </div>
  )
  const SQLForm = (
    <div className={classes.content2}>
      <h2>SQL Skills</h2>
      <ul>
        <h3>
          Have used SQL as my primary database for most of my projects during my
          training as a Full Stack Developer
        </h3>
        <h3>I have worked extensively on SQL using: </h3>
        <ul>
          <li>
            Creating tables with both Database First aprroach & Code First
            approach using C#.
          </li>
          <li>
            Quering using LINQ linear expressions and SQL querying itself.
          </li>
          <li>Migrating tables with code first and database appoaches</li>
        </ul>
        <h3>
          Expert in creating table releationship via primary, foreign key.
        </h3>
        <h3>
          Expert in data querying from multiple tables using inner or outerjoin
        </h3>
      </ul>
    </div>
  )
  const AWSForm = (
    <div className={classes.content2}>
      <h2>AWS Skills</h2>
      <ul>
        <h3>Have a took a 3 months long course from SimpliLearn.</h3>
        <h3>During my course I was taught following:</h3>
        <ul>
          <li>EC2.</li>
          <li>Using EC2, deploying using Windows and Linux via SSH.</li>
          <li>
            Creating instances ensuring 99.999 percent of redundancy and data
            security.
          </li>
          <li>S3 Bucket.</li>
          <li>Static website hosting using S3.</li>
          <li>Lambda.</li>
          <li>
            Cloud Formation to deploy the application across multiple
            datacenters to reduce lag.
          </li>
          <li>Load balancing when creating an instance.</li>
          <li>
            Using geo restriction by blocking incoming traffic from any country.
          </li>
          <li>DNS management using Route 53.</li>
          <li>
            Deploying SNS for periodic push email or notification for specific
            changes or instances.
          </li>
          <li>Using SQS. </li>
          <li>Long term storage services by Glacier. </li>
        </ul>
      </ul>
    </div>
  )
  return (
    <div style={{ background: "#444543" }}>
      <h1 className={classes.headNote}>
        Skills <BuildIcon />
      </h1>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(1)} className={classes.paper}>
              JavaScript
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(2)} className={classes.paper}>
              React JS
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(3)} className={classes.paper}>
              C#
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(5)} className={classes.paper}>
              GraphQl
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(9)} className={classes.paper}>
              Apollo
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(6)} className={classes.paper}>
              SQL
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(4)} className={classes.paper}>
              PHP
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(7)} className={classes.paper}>
              CSS
            </Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper onClick={() => setclick(8)} className={classes.paper}>
              AWS
            </Paper>
          </Grid>
        </Grid>

        {/* <AppBar position="static" className={classes.navbar}>
          <Toolbar variant="dense">
            <List className={classes.list}>
              <Button
                onClick={() => setclick(1)}
                className={classes.button1}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>JavaScript</p>
              </Button>
              <Button
                onClick={() => setclick(2)}
                className={classes.button2}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>ReactJS</p>
              </Button>
              <Button
                onClick={() => setclick(3)}
                className={classes.button1}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>C#</p>
              </Button>
              <Button
                onClick={() => setclick(5)}
                className={classes.button1}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>Graphql</p>
              </Button>
              <Button
                onClick={() => setclick(9)}
                className={classes.button2}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>Apollo</p>
              </Button>
              <Button
                onClick={() => setclick(6)}
                className={classes.button1}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>SQL</p>
              </Button>
              <Button
                onClick={() => setclick(4)}
                className={classes.button2}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>PHP</p>
              </Button>
              <Button
                onClick={() => setclick(7)}
                className={classes.button1}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>CSS</p>
              </Button>
              <Button
                onClick={() => setclick(8)}
                className={classes.button2}
                variant="contained"
                color="inherit"
              >
                <p className={classes.h3}>AWS</p>
              </Button>
            </List>
          </Toolbar>
        </AppBar> */}
      </div>
      <div className={classes.diagonalbox}>
        <div className={classes.content1}>{renderForm()}</div>
      </div>
    </div>
  )
}
