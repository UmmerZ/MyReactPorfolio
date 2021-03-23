import React from "react"
import FrontPage from "./FrontPage"
import Navbar from "./Navbar"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <Skills />
      <Projects />
    </div>
  )
}
