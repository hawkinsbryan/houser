import React, { Component } from 'react';
// import Dashboard from '../dashboard/Dashboard';
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="Wizard">
                <h1>Add New Listing</h1>

                <Link to="/dashboard"><button>Cancel</button></Link>

                <form>
                    <label> Property Name <input type="text" name="property_name" value={this.state.image_url} onChange={this.handleChange} /></label>
                    <br />
                    <label> Address <input type="text" name="address" value={this.state.product_name} onChange={this.handleChange} /></label>
                    <br />
                    <label> City <input type="text" name="City" value={this.state.price} onChange={this.handleChange} /></label>
                    <label> State <input type="text" name="State" value={this.state.price} onChange={this.handleChange} /></label>
                    <label> Zip <input type="text" name="Zip" value={this.state.price} onChange={this.handleChange} /></label>
                    <div>

                        <button onClick={this.handleSubmit}>Complete</button>
                    </div>
                </form>
            </div>
        );
    }
}