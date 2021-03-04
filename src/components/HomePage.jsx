import React from 'react'
import { makeStyles } from '@material-ui/core'


export default function HomePage() {
    const useStyle = makeStyles((theme => ({
        diagonalbox:{
                position:'relative',
                backgroundImage: "linear-gradient(45deg, #171717, #292A29)",
                transform: 'skewY(-11deg)',
                height: '20em',
                marginTop:'5em',
                margin:'0',
                width: '100%',
                 
        },
        content1:{
            maxWidth: '60em',
            margin: '0 auto',
            color: '#7B7F7C',
            transform: 'skewY(11deg)',
            position: 'relative',
            backgroundColor: '#7B7F7C',
            height: "25em",  
            
          
        },
        content2:{
            width: '30em',
            color: '#161716',
            backgroundColor: '#7B7F7C',
            height: "25em", 
            float: 'left' 
            
          
        },
        content3:{
            width: '30em',
            color: '#7B7F7C',
          
            backgroundColor: '#161716',
            height: "25em", 
            float: 'right',
            
          
        },
        title:{
          maxWidth:'80%',
          margin:'20px 20px 20px 20px',
          padding: '10px'

        }
     
    })))
    const classes = useStyle()
    return (
        <div>
            <h1 style={{color: "#ffffff"}}></h1>
            <div className={classes.diagonalbox}>
	<div className={classes.content1}> 
    <div className={classes.content2}> <h1 className={classes.title}>Hello! My Name is Ummer. I am married to React JS </h1></div>
    <div className={classes.content3}><h2 className={classes.title}> </h2>I am experienced in Front End Frameworks <br/>like React JS & JavaScript, <br/>Backend Languages like <br/>,C#, PHP, Python, GraphQl & Apollo</div>
    </div>
    </div>
        </div>
    )
}
