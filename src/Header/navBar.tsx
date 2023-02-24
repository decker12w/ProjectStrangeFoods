import HeaderItem from "./HeaderItem"
import  Style  from "./navBar.module.css"

function NavBar() {
    return (
        <ul className={Style.container}>
            <HeaderItem value="Sobre" link="#sobre"></HeaderItem>
            <HeaderItem value="Receitas" link="sdsds"></HeaderItem>
            <HeaderItem value="Contato" link="sdsds"></HeaderItem>
            <HeaderItem value="Pessoal" link="sdsds"></HeaderItem>
        </ul>
    )
}


export default NavBar