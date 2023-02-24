import style from './Button.module.css'
import { BsSearch } from 'react-icons/bs'


function Button(){
    return(
        <button type='submit' className={style.button}><BsSearch size='19px'color='white'></BsSearch></button>
    )
}

export default Button