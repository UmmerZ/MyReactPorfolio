import "./App.css"
import React from "react"
import HomePage from "./components/HomePage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import PDF from "./components/images/resume.pdf"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/resume-download" component={PDF} />
        <Route  path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
