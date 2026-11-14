import style from './style/Card.module.css'
import { useState, useContext } from 'react'
import lightLike from "./assets/lightLike.png"
import darkLike from "./assets/darkLike.png"
import Button from "./Button"

import { currentTheme } from '../Contexts'

function Card({img,content}) {

  const [likes, setLike] = useState(0)

  const theme = useContext(currentTheme)

  return (
    <div className={style.card} data-theme={theme}>
      <img className={style.cover} src={img} alt="Лучшая команда" />
      <p className={style.text}>{content}</p>
      <p className={style.likes}>{likes}</p>
      <Button img={theme == "dark" ? darkLike : lightLike}
        action = {()=>setLike(l=>l+1)}>
      </Button>
    </div>
  )
}

export default Card