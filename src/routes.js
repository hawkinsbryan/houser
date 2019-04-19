import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from "./components/dashboard/Dashboard"
import Wizard from './components/wizard/Wizard';
// import { Link } from 'react-router-dom'


export default (
    <Switch>
        <Route path="/wizard" component={Wizard} />
        <Route path="/" component={Dashboard} />
    </Switch>
)