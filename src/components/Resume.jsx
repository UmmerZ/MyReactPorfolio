import { Button, Paper } from "@material-ui/core"
import React from "react"
import DownloadLink from "react-download-link"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Resume() {
  const getDataFromURL = url =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("./images/resume.pdf")
          .then(response => response.text())
          .then(data => {
            resolve(data)
            console.log(data)
          })
      })
    }, 2000)
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            background: "#BDBDBD",
          }}
        >
          <div style={{ width: "90%", margin: "20px auto" }}>
            <h1>UMMER ZAMAN</h1>{" "}
            <h2
              style={{
                background: "#761630",
                color: "#ffffff",
                paddingTop: "5px ",
                paddingBottom: "5px",
              }}
            >
              Edmonton, AB T6T 0N6 | (780) 239-9050 | ummer@ualberta.ca
            </h2>{" "}
            <h1>Professional Summary</h1>{" "}
            <p>
              Skilled in back-end programming using C#, ASP.NET, Node JS,
              GrandStack and Microsoft SQL Server, PHP. Proficient in front-end
              programming using HTML, CSS, JavaScript, React JS and Redux.
              Experienced in reviewing technical contracts, researching and
              advising management on technology procurement, and writing reports
              and documentation. Recognized for being dedicated, hardworking,
              reliable and professional. Strong problem solving, troubleshooting
              and communication skills.
            </p>
            <h4
              style={{
                background: "#761630",
                color: "#ffffff",
                paddingTop: "10px ",
                paddingBottom: "10px",
              }}
            >
              <div style={{ float: "right", marginRight: "50px" }}>
                {" "}
                GitHub:
                <a
                  style={{
                    color: "#ffffff",
                  }}
                  href="https://github.com/UmmerZ"
                >
                  https://github.com/UmmerZ
                </a>
              </div>
              <div style={{ marginLeft: "50px" }}>
                Portfolio:
                <a style={{ color: "#ffffff" }} href="https://ummerdar.com">
                  https://ummerdar.com
                </a>
              </div>
            </h4>
            <h2>Technical Skills</h2>
            <ul>
              <li>C#/ASP.NET Core</li>
              <li>React JS/Redux</li>
              <li>GraphQL Apollo</li>
              <li>C#/ASP.NET Core</li>
              <li>WordPress</li>
              <li>CSS</li>
              <li> Version Control(Git)</li>
              <li>HTML</li>
              <li>PHP</li>
              <li>JavaScript(ES6)</li>
              <li>System & Network Administration</li>
              <li> AWS Cloud Associate</li>
              <li>REST APIs</li>
              <li>MySQL</li>
              <li>Neo4J</li>
            </ul>{" "}
            <h2>Professional & Soft Skills</h2>
            <ul>
              <li>Leadership </li>
              <li>Team Player</li>
              <li>Documentation </li>
              <li>Presenter</li>
              <li>Time Management</li>
              <li>Project Management</li>
            </ul>
            <h2>Work Experience</h2>
            <h4>Software Developer-Intern</h4>{" "}
            <h4>12/2020 to Present Untribe – Edmonton, Alberta</h4>
            <p>
              {" "}
              Working on a data management Application using GrandStack. Main
              Focuses are:
            </p>
            <ul>
              <li>
                Role based authorization and authentication using React, Apollo
                and Graphql.{" "}
              </li>
              <li>Analyzes, designs or develops information systems.</li>
            </ul>
            <h4>Technical Support</h4>
            <h4>02/2010 to 07/2011 IBM – New Delhi, India</h4>
            <p>Responsibilities:</p>
            <ul>
              <li>
                Resolution of the technical issues related to Intuit QuickBooks
                and TurboTax software.
              </li>
              <li>
                {" "}
                Helping consumers with accounting problems with the software.
              </li>
            </ul>
            <h2>Projects</h2>
            <hr />
            <h3>Bidding Web App(Bid-A-Car)</h3>
            <h3>Languages used:</h3>
            <p>C#/ASP.NET WEB API, MySQL and React</p> Built this app for my
            capstone from scratch where a user can bid on the posted Ad as well
            can post a car for others to bid on it. User has to create a profile
            and login with a username and password to use the app using front
            end authentication with React JS.{" "}
            <h3>
              Github link:
              <a
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
                href="https://github.com/UmmerZ/REACT_ASP.NET-BID-A-CAR"
              >
                Click Me
              </a>
            </h3>
            <hr />
            <h3>MOVIE REVIEW APP(GoodReels)</h3>
            <h3>Languages used:</h3>
            <p>React/Redux Application</p> gives a user experience to browse the
            movies we have in the list, Every movie contains synopsis and users
            can rate or review the movies, ratings are cumulative using state
            management with redux.{" "}
            <h3>
              Github link:
              <a
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
                href="https://github.com/UmmerZ/GoodReels"
              >
                Click Me
              </a>
            </h3>
            <hr />
            <h3>Book Library Management</h3>
            <h3>Languages used:</h3>
            <p>C#/ASP.NET/MVC and MySQL</p> one of my projects during my
            bootcamp where I created this app where books can be issued,
            extended dates, returned with respective timestamps with proper
            inventory management.{" "}
            <h3>
              Github link:
              <a
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
                href="https://github.com/UmmerZ/.NET_MVC_LIBRARY"
              >
                Click Me{" "}
              </a>
            </h3>
            <hr />
            <h3>Coordinates API App</h3>
            <h3>Languages used:</h3>
            <p>PHP/API</p> Created this app where a user can enter latitude and
            longitude and will all get the information about day length,
            sunrise, sunset, temperature, local time.{" "}
            <h3>
              Github link:
              <a
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
                href="https://github.com/UmmerZ/PHP_API_GUESSING_GAME_CORDINATE_INFO"
              >
                Click Here{" "}
              </a>
            </h3>
            <hr />
            <h2>Education</h2>
            <hr /> <h4>Full Stack Application Developer</h4>{" "}
            <p>12/2020 University of Alberta – Edmonton, Canada</p>
            <h4>Post graduate Diploma: International Business Management</h4>
            <p>07/2012 Centennial College – Toronto, Canada</p>
            <h4>Bachelor’s: Business Administration</h4>
            <p>02/2009 University of Kashmir – Srinagar, India</p> <hr />
            <h2>Certifications</h2>
            <ul>
              <li>System Admin and IT Infrastructure Services 6/2020</li>
              <li>Technical Support Fundamentals 7/2020</li>
              <li>AWS Cloud Associate (Pending Certification)</li>
            </ul>
          </div>
        </div>
      </div>
      <DownloadLink
        label="Download "
        filename="resume.txt"
        exportFile={() =>
          Promise.resolve(getDataFromURL("./images/resume.pdf"))
        }
      />
      <Footer />
    </div>
  )
}
