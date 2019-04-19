import React, { Component } from 'react';
// import Dashboard from '../dashboard/Dashboard';
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    //name is not referencing property_name its referencing name in the input

    // handleSubmit(){

    // }



    render() {
        return (
            <div className="Wizard">
                <h1>Add New Listing</h1>

                <Link to="/dashboard"><button>Cancel</button></Link>

                <form>
                    <label> Property Name<input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange} /></label>
                    <br />
                    <label> Address <input type="text" name="address" defaultValue={this.state.address} onChange={e => this.handleChange} /></label>
                    <br />
                    <label> City <input type="text" name="city" defaultValue={this.state.city} onChange={e => this.handleChange} /></label>
                    <label> State <input type="text" name="state" defaultValue={this.state.state} onChange={e => this.handleChange} /></label>
                    <label> Zip <input type="text" name="zipcode" defaultValue={this.state.zipcode} onChange={e => this.handleChange} /></label>
                    <div>

                        <button onClick={this.handleSubmit}>Complete</button>
                    </div>
                </form>
            </div>
        );
    }
}