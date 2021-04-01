import { Button, makeStyles, Paper, TextField } from "@material-ui/core"
import React, { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "axios"

export default function Contact() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      maxWidth: "40em",
      height: "40em",
      background: "#BDBDBD",
      alignItems: "center",
      justifyContent: "center",
      margin: "100px auto",
      borderRadius: "10px",
      boxShadow: "5px 5px 3px  #201c1c",
    },
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    message: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: 420,
      },
    },
  }))
  const classes = useStyles()
  const [status, setStatus] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [emailMessage, setemailMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    axios({
      method: "POST",
      url: "http://localhost:3006/send",
      data: { firstName, lastName, email, phone, emailMessage },
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.")
        setStatus("Message was sent")
        setfirstName("")
        setlastName("")
        setphone("")
        setemail("")
        setemailMessage("")
      } else if (response.data.status === "fail") {
        alert("Message failed to send.")
      }
      console.log(response.data.status)
    })
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className={classes.container}>
          <div>
            <form onSubmit={handleSubmit}>
              <Paper
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  boxShadow: "none",
                  marginBottom: "20px",
                }}
              >
                Please fill out the form{" "}
              </Paper>
              <div className={classes.root}>
                <div>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="First Name"
                    onChange={e => setfirstName(e.target.value)}
                    required
                  />

                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Last Name"
                    onChange={e => setlastName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Email"
                    type="email"
                    onChange={e => setemail(e.target.value)}
                    required
                  />
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Phone"
                    type="number"
                    onChange={e => setphone(e.target.value)}
                  />
                </div>
              </div>
              <div className={classes.message}>
                <TextField label="Subject" fullWidth variant="outlined" />
                <TextField
                  multiline
                  fullWidth
                  rows={6}
                  variant="outlined"
                  label="Message"
                  onChange={e => setemailMessage(e.target.value)}
                  required
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px auto",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    background: "#298A08",
                    marginRight: "10px",
                    color: "#ffffff",
                  }}
                  type="submit"
                >
                  Send
                </Button>
                <Button
                  variant="contained"
                  style={{ background: "#6E6E6E", color: "#ffffff" }}
                >
                  Cancel
                </Button>
              </div>

              {status ? status : null}
            </form>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "0", position: "relative" }}>
        <Footer />
      </div>
    </div>
  )
}
