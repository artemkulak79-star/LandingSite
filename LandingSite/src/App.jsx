import { useState } from 'react'

import Button from './component/Button'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'

import spartak from "./component/assets/spartak.jpg"
import logo from './component/assets/logo.jpg'

import { currentTheme } from './Contexts'

import style from './App.module.css'

function App() {

  const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nemo et ea harum dolor molestias cumque tempora, quia illo illum quod doloremque laboriosam laborum ipsum delectus aspernatur in omnis corporis.'
  const [theme, setTheme] = useState('dark')

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <currentTheme.Provider value={theme}>
      <div className={style.main}>
        <Card  img = {spartak} content = {lorem}/>
        <Card  img = {logo} content = {lorem}/>
        <Card  img = {spartak} content = {lorem}/>
      </div>
    </currentTheme.Provider>
  )
}

export default App
