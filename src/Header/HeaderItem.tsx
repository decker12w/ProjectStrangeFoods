import React from "react"
import './HeaderItem.css'


const HeaderItem: React.FC <{value:string, link:string}> = (props) => {
    return (<a href={props.link}><li>{props.value}</li></a>)
}


export default HeaderItem