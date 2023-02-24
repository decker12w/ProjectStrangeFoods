import { createContext } from "react";

type RecipeContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
  searchValid: boolean;
  setSearchValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecipeContext = createContext<RecipeContextType>({
  search:'',
  setSearch: () => {},
  searchValid: false,
  setSearchValid: () => {},
});

export default RecipeContext;