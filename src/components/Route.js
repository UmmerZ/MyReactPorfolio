import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutMe from "./AboutMe"

export default function Routes() {
  return (
    <Router>
      <Route exact path="/about-me" component={AboutMe} />
    </Router>
  )
}
