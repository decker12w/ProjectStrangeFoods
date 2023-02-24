import { ReactNode, useRef, useState } from "react"
import RecipeContext from "./RecipeContext"


const ReactProvider = (props:{children:ReactNode}) => {
    const [search,setSearch] = useState('')
    const [searchValid,setSearchValid] = useState(false)
    
    const recipeContext = {
        search: search,
        setSearch: setSearch,
        searchValid:searchValid,
        setSearchValid:setSearchValid
    }
    return(
        <RecipeContext.Provider value={recipeContext}>
            {props.children}
        </RecipeContext.Provider>
    )
}


export default ReactProvider