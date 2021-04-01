import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Link } from "@material-ui/core"

export default function Footer() {
  const linkCSS = {
    textDecoration: "none",
    color: "#ffffff",
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <p>Connect </p>
        <Link
          style={linkCSS}
          href="https://www.facebook.com/ummer.zamaan/"
          target="_blank"
        >
          <FacebookIcon style={{ marginLeft: "20px", fontSize: "40px" }} />
        </Link>
        <Link style={linkCSS} href="https://github.com/UmmerZ" target="_blank">
          <GitHubIcon style={{ marginLeft: "20px", fontSize: "40px" }} />
        </Link>
        <Link
          style={linkCSS}
          href="https://www.linkedin.com/in/ummer-zaman-27106112b/"
          target="_blank"
        >
          <LinkedInIcon style={{ marginLeft: "20px", fontSize: "40px" }} />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 0 40px 0",
          justifyContent: "center",
          color: "#ffffff",
          background: "#1C1C1C",
        }}
      >
        <p>© 2021 Ummer Zaman</p>
      </div>
    </div>
  )
}
