import React from 'react'
import Navbar from  './components/Navbar/Navbar'
import './App.css'
import {BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
        <div className="App" style={{background: 'black'}}>
            <Navbar />
        </div>
        </BrowserRouter>
    )
}

export default App;