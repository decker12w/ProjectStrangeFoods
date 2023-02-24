import React from "react"
import style from './Title.module.css'

const Recipes : React.FC <{title:string, subTitle:string}> = (props) =>{
    return (
        <section className={style.container}>
            <h1 className={style.h1}>{props.title}</h1>
            <h2 className={style.h2}>{props.subTitle}</h2>
        </section>
    )
}

export default Recipes