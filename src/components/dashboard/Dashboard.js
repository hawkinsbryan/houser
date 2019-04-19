import React, { Component } from 'react';
import House from './Components/house/House';



export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="Dashboard">
                <House />
            </div>
        );
    }
}