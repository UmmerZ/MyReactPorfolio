import "./App.css"
import React from "react"
import HomePage from "./components/FrontPage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </Router>
  )
}

export default App
