import {useContext } from 'react'
import {Link} from "react-router"
import style from './style/Header.module.css'
import logo from './assets/logo.jpg'
import toLight from './assets/toLight.png'
import toDark from './assets/toDark.png'
import Button from './Button'

import { currentTheme } from '../Contexts'

function Header({switchTheme}) {
  
  const theme = useContext(currentTheme)

  

  return (
    <>
      <header className ={style.headerWrapper} data_theme = {theme}>
        <img className={style.logo} src={logo} alt="логотип" />
        <h1 className={style.title}>Самый крутой сайт</h1>
        <Link className={style.btnLink} to='/'>На главную </Link>
        <Link className={style.btnLink} to='/second'>Доп</Link>
        <Button img={theme == "dark" ? toDark : toLight}
        action = {switchTheme}>
      </Button>
      </header>
    </>
  )
}

export default Header

