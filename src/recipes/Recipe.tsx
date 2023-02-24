import style from './Recipe.module.css'
import CardRecipe from '../assets/CardRecipe'
import dummyRecipe from '../types/TypeDummyRecipe'



function Recipe({name, image}: dummyRecipe){
    return(
        <CardRecipe>
            <img className={style.img} src={image} alt="wdw" />
            <h3 className={style.h3}>{name}</h3>
        </CardRecipe>
        
    )
}

export default Recipe