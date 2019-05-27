import React, { Component } from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom'
import axios from "axios"


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        };
    }
    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
        axios.get("/api/houses")
            .then(res => {
                this.setState({ houses: res.data });
            })
            .catch(err => console.log(err));
    };

    deleteHouse = (id) => {
        axios.delete(`api/houses/${id}`).then(res => this.getHouses())
            .catch(error => console.log(error))
    }

    render() {
        const { houses } = this.state;
        const mappedHouses = houses.map((house, i) => {
            return (
                <House
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    img={house.img_url}
                    mortgage={house.mortgage}
                    rent={house.rent}
                    key={i}
                    deleteHouse={this.deleteHouse}
                />
            );
        });
        return (
            <div className="Dashboard">
                <Link to="wizard/wizard1"><button>Add New Property</button></Link>
                <h1>Dashboard</h1>
                <h2>Home Listings</h2>
                {mappedHouses}
            </div>
        );
    }
}

