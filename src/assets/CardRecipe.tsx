import { ReactNode } from "react"
import style from './CardRecipe.module.css'

type child = {
    children: ReactNode
}

const CardRecipe = ({children}: child ) => {
    return(
        <div className={style.card}>{children}</div>
    )
}

export default CardRecipe