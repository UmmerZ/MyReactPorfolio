import "./App.css"
import React, { useState, useEffect } from "react"
import HomePage from "./components/HomePage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import { MyContext } from "./Context"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth)
  const breakPoint = 750

  const handleResize = () => {
    setIsMobile(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <MyContext.Provider value={{ isMobile, breakPoint }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/resume" component={Resume} />

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  )
}

export default App
