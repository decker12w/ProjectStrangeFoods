import Recipe from './Recipe'
import style from './RecipesList.module.css'
import dummyRecipe from '../types/TypeDummyRecipe'
import RecipeContext from '../store/RecipeContext'
import React, { useContext } from 'react';

interface RecipeListProps {
  list: dummyRecipe[]
}

const RecipeList = ({list}: RecipeListProps) => {
  const { search, searchValid } = useContext(RecipeContext);
  const filteredList = list.filter((recipe) => {
    return searchValid ? recipe.name.toLowerCase().includes(search.toLowerCase()) : true
  })
  return(
    <div className={style.grid}>
      {filteredList.map((recipe) => (
        <Recipe 
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
        />
      ))}
    </div>
  )
}

export default RecipeList