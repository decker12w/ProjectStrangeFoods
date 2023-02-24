import React, { useContext } from 'react';
import Button from './Button';
import style from './SearchBar.module.css';
import RecipeContext from '../store/RecipeContext';

function SearchBar() {
  const {setSearchValid,setSearch,search } = useContext(RecipeContext);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch('')
    setSearchValid(true)
    ;
  };

  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className={style.formGroup}>
        <input
          value={search}
          onChange={handlerChange}
          className={style.bar}
          placeholder="O que vamos comer hoje?"
          id="user"
          type="text"
        />
        <Button />
      </div>
    </form>
  );
}

export default SearchBar;