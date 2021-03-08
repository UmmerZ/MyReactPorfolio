import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Skills from "./components/skills/Skills"

import Routes from "./components/Route"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
