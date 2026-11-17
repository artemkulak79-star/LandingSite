import {Routes,Route,} from "react-router"
import App from "./App"
import style from "./Core.module.css"
import { useState } from 'react'

import Button from './component/Button'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'

import spartak from "./component/assets/spartak.jpg"
import logo from './component/assets/logo.jpg'

import { currentTheme } from './Contexts'

  const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nemo et ea harum dolor molestias cumque tempora, quia illo illum quod doloremque laboriosam laborum ipsum delectus aspernatur in omnis corporis.'




function Core(){

    const [theme, setTheme] = useState('dark')

    function switchTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return(
        <>
        <currentTheme.Provider value={theme}>
            <Header switchTheme={switchTheme} />
                
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/second" element={<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt aperiam exercitationem vel illum possimus molestias nemo cupiditate ex, modi quaerat ab sint harum, illo nulla voluptatem. Omnis, voluptatem qui.</h1>}/>
                </Routes>
            <Footer />
        </currentTheme.Provider>
        </>
    )
}


export default Core