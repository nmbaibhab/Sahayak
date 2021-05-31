import React from 'react'
import { Switch, Route } from 'react-router'
import Admin from './Admin'
import Home from './Home'
import Student from './Student'
import Teacher from './Teacher'

const MainPage = () => {
    return (
        <div>
           <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/student" exact>
                    <Student/>
                </Route>
                <Route path="/teacher" exact>
                    <Teacher/>
                </Route>
                <Route path="/admin" exact>
                    <Admin/>
                </Route>
           </Switch>
        </div>
    )
}

export default MainPage
