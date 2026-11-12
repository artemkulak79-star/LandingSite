import { useState } from 'react'

import Button from './component/Button'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'

import { currentTheme } from './Contexts'

import style from './App.module.css'

function App() {
  const [theme, setTheme] = useState('dark')

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <currentTheme.Provider value={theme}>
      <div className={style.main}>
        <Header switchTheme={switchTheme} />
        <Card />
        <Card />
        <Card />
        <Footer />
      </div>
    </currentTheme.Provider>
  )
}

export default App
