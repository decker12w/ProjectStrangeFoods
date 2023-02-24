import React from "react"
import './logo.css'


const Logo: React.FC<{name:string}> = (props) =>{
    return(
        <a href="./"><h1>{props.name}</h1></a>
    )
}

export default Logo