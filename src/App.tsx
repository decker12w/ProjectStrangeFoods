
import Header from './Header/Header';
import TitleRecipes from './recipes/TitleRecipes';
import RecipesList from './recipes/RecipesList';
import dummyRecipes from './dummyRecipes/dummyRecipes';
import './App.css'
import RecipeProvider from './store/RecipeProvider';
import About from './About';



function App() {
  

  return (
  <RecipeProvider>
      <div className="App">
        <Header></Header>
        <main>
            <TitleRecipes subTitle={'Veja as receitas que separei pra você!'} 
            title={'Bem vindo ao StrangeFood'}></TitleRecipes>
             <RecipesList list={dummyRecipes}></RecipesList>
             <About></About>
        </main>
      </div>
    </RecipeProvider>
  );
}

export default App;
