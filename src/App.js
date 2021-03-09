import "./App.css"
import React from "react"
import HomePage from "./components/HomePage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </Router>
  )
}

export default App
