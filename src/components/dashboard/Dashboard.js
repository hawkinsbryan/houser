import React, { Component } from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom'
import axios from "axios"
// import Wizard from '../wizard/Wizard';



export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        };
    }
    componentDidMount() {  // this is step 3 invoking the method as soon as Dashboard view loads
        axios.get("/api/houses").then(response => {
            this.setState({ houses: response.data });
        });
    }

    getHouses() {
        axios.get("/api/houses")
            .then(house => {
                this.setState({
                    houses: {
                        ...this.state.house,
                        house: house.data
                    }
                })
            })
            .catch(error => console.log(error))
    }

    render() {

        let mappedHouses = this.state.houses.map(val => <House house={val} />) //trying to pass props to House.js

        return (
            <div className="Dashboard">

                <Link to="/wizard"><button>Add New Property</button></Link>
                <h1>Dashboard</h1>
                <h2>Home Listings</h2>
                <div>{mappedHouses}</div>

                <House />
            </div>
        );
    }
}

