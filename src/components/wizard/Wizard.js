import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import store, { RESET_STATE } from '../../store'
import Wizard1 from './Wizard1'
import Wizard2 from './Wizard2'
import Wizard3 from './Wizard3'

export default class Wizard extends Component {
    resetReduxState = () => {
        store.dispatch({
            type: RESET_STATE
        })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/wizard/Wizard1"} component={Wizard1} />
                    <Route path={"/wizard/Wizard2"} component={Wizard2} />
                    <Route path={"/wizard/Wizard3"} component={Wizard3} />
                </Switch>
                <button onClick={() => this.resetReduxState()}>
                    <Link to={"/"}>Cancel</Link>
                </button>
            </div>
        );
    }
}