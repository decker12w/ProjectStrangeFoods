import Logo from "./logo"
import NavBar from "./navBar"
import "./Header.css"
import SearchBar from "./SearchBar"

function Header(){
    return(
       <div className={'containerHeader'}>
            <header>
                <nav className={'container'}>
                    <Logo name={'StrangeFood'}></Logo>
                    <NavBar></NavBar>
                </nav>
            </header>
            <section>
                <SearchBar></SearchBar>
            </section>
         </div> 
       

    )
}

export default Header