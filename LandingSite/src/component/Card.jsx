import style from './style/Card.module.css'
import { useState, useContext } from 'react'
import spartak from "./assets/spartak.jpg"
import logospartak from "./assets/logospartak.webp"
import lightLike from "./assets/lightLike.png"
import darkLike from "./assets/darkLike.png"

import { currentTheme } from '../Contexts'

function Card() {

  let lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, esse quae. Ullam amet maxime soluta nesciunt nobis incidunt tenetur aperiam facilis ut. Maxime ad neque, eos beatae velit perspiciatis sapiente.'

  const [likes, setLike] = useState(0)

  const theme = useContext(currentTheme)

  return (
    <div className={style.card} data-theme={theme}>
      <img className={style.cover} src={spartak} alt="Лучшая команда" />
      <p className={style.text}>{lorem}</p>
      <p className={style.likes}>{likes}</p>
      <button className={style.likeBtn} onClick={() => setLike(l => l + 1)}>
        {theme == "dark" ?
          <img className={style.likeIcon} src={lightLike} alt="" /> :
          <img className={style.likeIcon} src={darkLike} alt="" />}
      </button>
    </div>
  )
}

export default Card