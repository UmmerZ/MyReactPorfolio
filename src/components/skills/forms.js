import Code from "../images/code.jpg"

const defaultF = {
  backgroundImage: `url(${Code})`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  marginTop: "-10px",
  color: "#e9ecf2",
}
const content2 = {
  display: "block",
  color: "#323336",
  backgroundColor: "#e9ecf2",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "scroll",
  padding: "10px auto",
}
const text={
  color:"#ffffff",
  fontWeight:"normal",
  fontSize:"15px"
}
const head ={
  color:"#C2A22B"
}
const a={
  textDecoration: "none",
  color:"#C2A22B",
  background: "transparent"
}
export const defaultForm = (
  <div style={defaultF}>
    <h1>Click on tabs to read description</h1>
  </div>
)
export const JavaScriptForm = (
  <div style={content2}>
    <h2>JavaScript Skills</h2>
    <ul>
      <h3>Proficient with Front End javaScript with HTML/CSS</h3>
      <h3>Proficient with Back End Nodejs</h3>
      <h3>Expreinced in Express Server deployment</h3>
      <h3>Automation and Building Tools/ Web performance</h3>
      <h3> Familiar with Debugging and Testing tools</h3>
    </ul>
  </div>
)
export const ReactForm = (
  <div style={content2}>
    <h2>React JS Skills</h2>
    <ul>
      <h3>Experienced in Front End React Deployment</h3>
      <h3>InDepth knowledge and experience in State Management</h3>
      <h3>Profiencent with React Hooks</h3>
      <h3>Profiencient in using CSS libraries like bootstrap and materialUI</h3>
      <h3>
        Have build more than dozen application using front end as React JS
      </h3>
    </ul>
  </div>
)
export const CSharpForm = (
  <div style={content2}>
    <h2>CSharp skills</h2>
    <ul>
      <h3>Was my focussed Object Oriented Language during my Course</h3>
      <h3>
        InDepth knowledge and experience 4 pillars of OOP
        <ul>
          <li>Encapsulation</li>
          <li>Abstraction</li>
          <li>Inheritance</li>
          <li>Polymorphism</li>
        </ul>
      </h3>
      <h3>Experienced in .NET framework with Code First Database approach</h3>
      <h3>Experienced in Unit Testing</h3>
      <h3>
        Extensive experience in creating RestAPI's (GET, POST, PATCH, DELETE)
      </h3>
      <h3>
        Have worked on numerous projects using .NetCore as backend language with
        MySql and MongoDB
      </h3>
      <h3>
        Have used C# with React JS and MySql for my Capstone Project(BidACar)
        with code first approach and Web API's, source code is on my github
      </h3>
    </ul>
  </div>
)
export const PHPForm = <div style={content2}>PhP skills</div>
export const GraphQLForm = (
  <div style={content2}>
    {" "}
    <h2>GraphQl Skills</h2>
    <ul>
      <h3>Currently working on a project with Graphql as our query language</h3>
      <h3>Proficient with Querying and Mutations of APIs</h3>
      <h3>Experience with GraphQL Shield used for Authorization purposes</h3>
      <h3>Expert in creating Graphql Schema such as TypeDefs and Resolvers</h3>
      <h3>
        Experience in making Graphql with most of the JavaScript frond end
        libraries like React JS
      </h3>
    </ul>
  </div>
)
export const ApolloForm = (
  <div style={content2}>
    {" "}
    <h2>Apollo Skills</h2>
    <ul>
      <h3>Working currently on a Application using Apollo Client</h3>
      <h3>Experience in Data fetching and mutations using Apollo client </h3>
      <h3>
        Experience in deploying Apollo client as a statemanagemant tool which
        takes burden off the caching and using context hooks in React
      </h3>
      <h3>
        knowledge of implememting Apollo with any Stack using graphql api's for
        quering and mutating
      </h3>
      <h3>
        It being one of the latest creation of facebook to make React and
        Graphql work seamlessly is just awesome and should be one of the top
        sought language in statemanagemt tool
      </h3>
    </ul>
  </div>
)

export const CSSForm = (
  <div style={content2}>
    {" "}
    <h2>CSS Skills</h2>
    <ul>
      <h3>Have been using CSS to style my most projects.</h3>
      <h3>Expert in CSS for:</h3>
      <ul>
        <li>Animations</li>
        <li>Transition Effects</li>
        <li>Media queries for different screen sizes</li>
        <li>Designing Grid layout using CSS Grid</li>
        <li>Conditional styling on hover, scroll, screen size and onClick</li>
      </ul>
      <h3>Experience with GraphQL Shield used for Authorization purposes</h3>
      <h3>Expert in creating Graphql Schema such as TypeDefs and Resolvers</h3>
      <h3>
        Experience in making Graphql with most of the JavaScript frond end
        libraries like React JS
      </h3>
    </ul>
  </div>
)
export const SQLForm = (
  <div style={content2}>
    <h2>SQL Skills</h2>
    <ul>
      <h3>
        Have used SQL as my primary database for most of my projects during my
        training as a Full Stack Developer
      </h3>
      <h3>I have worked extensively on SQL using: </h3>
      <ul>
        <li>
          Creating tables with both Database First aprroach & Code First
          approach using C#.
        </li>
        <li>Quering using LINQ linear expressions and SQL querying itself.</li>
        <li>Migrating tables with code first and database appoaches</li>
      </ul>
      <h3>Expert in creating table releationship via primary, foreign key.</h3>
      <h3>
        Expert in data querying from multiple tables using inner or outerjoin
      </h3>
    </ul>
  </div>
)
export const AWSForm = (
  <div style={content2}>
    <h2>AWS Skills</h2>
    <ul>
      <h3>Have a took a 3 months long course from SimpliLearn.</h3>
      <h3>During my course I was taught following:</h3>
      <ul>
        <li>EC2.</li>
        <li>Using EC2, deploying using Windows and Linux via SSH.</li>
        <li>
          Creating instances ensuring 99.999 percent of redundancy and data
          security.
        </li>
        <li>S3 Bucket.</li>
        <li>Static website hosting using S3.</li>
        <li>Lambda.</li>
        <li>
          Cloud Formation to deploy the application across multiple datacenters
          to reduce lag.
        </li>
        <li>Load balancing when creating an instance.</li>
        <li>
          Using geo restriction by blocking incoming traffic from any country.
        </li>
        <li>DNS management using Route 53.</li>
        <li>
          Deploying SNS for periodic push email or notification for specific
          changes or instances.
        </li>
        <li>Using SQS. </li>
        <li>Long term storage services by Glacier. </li>
      </ul>
    </ul>
  </div>
)
export const aboutMeBio = (
  <div>
    <h1 style={head}>UMMER ZAMAN</h1>
     <p style={text}>
     
       A React JS and .Net developer who has passion for coding. Currently I work as a Junior Software Engineer at UnTribe working on GrandStack. I am highly skilled in React as I use it for front end and Redux or Apollo as state mangememt tools for most of my projects. As a full stack developer I use GraphQL or .NET for creating API's to to make my front end work with the backend. As a Junior Engineer at unTribe I have been working with graph database Neo4J.
       <h2>Hobbies</h2>
       <p>I play video games mainly Call of Duty and FIFA <br/> 
       I love to travelling whenever I get time. I am always fascinated with nature. My favorite destination is Rockies<br/>
       I am passionate about photography as hobby mostly nature.<br/>
       If I am bored home and dont want to code or hop onto my gaming console I watch netflix. I am currentlly watching The Irregulars</p>
     
     <h2>
      Favorites
     </h2>
     <p>
       Video Game: <a style={a}>FIFA</a><br/>
       Desitnation: <a style={a}>Yellowstone National Park/Banff</a><br/>
       Personality: <a style={a}>Muhammad Ali</a><br/>
       Sport: <a style={a}>Soccer</a><br/>
       Movie: <a style={a}>The A Team</a><br/>
       Programming Language: <a style={a}>React/ C#</a><br/>
       Car: <a style={a}>BMW M5 Competition</a>

     </p>
     </p>
  </div>
 
  
)
