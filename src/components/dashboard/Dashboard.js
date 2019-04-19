import React, { Component } from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom'




export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    addNewProperty() {

    }

    render() {
        return (
            <div className="Dashboard">
                Dashboard
                <Link to="/wizard"><button>Add New Property</button></Link>
                <House />
            </div>
        );
    }
}