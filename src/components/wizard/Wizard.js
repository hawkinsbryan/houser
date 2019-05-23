import React, { Component } from 'react';
// import Dashboard from '../dashboard/Dashboard';
import { Link } from 'react-router-dom'
// import axios from "axios"


export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            houses: []
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     axios.post("/api/house/", {
    //         name: this.state.name,
    //         address: this.state.address,
    //         city: this.state.city,
    //         state: this.state.state,
    //         zipcode: this.state.zipcode
    //     }).then(response => {
    //         console.log(response)
    //         this.setState({ houses: houses.data })
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    render() {
        return (
            <div className="Wizard">
                <h1>Add New Listing</h1>

                <Link to="/dashboard"><button>Cancel</button></Link>
                <form>
                    <label> Property Name<input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label> <br />
                    <label> Address <input type="text" name="address" value={this.state.address} onChange={this.handleChange} /></label>
                    <br />
                    <label> City <input type="text" name="city" value={this.state.city} onChange={this.handleChange} /></label>
                    <label> State <input type="text" name="state" value={this.state.state} onChange={this.handleChange} /></label>
                    <label> Zip <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} /></label>
                    <div>
                        <button onClick={this.handleSubmit}>Complete</button>
                    </div>
                </form>
            </div>
        );
    }
}