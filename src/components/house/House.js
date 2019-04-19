import React, { Component } from 'react';


export default class House extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="House">
                House
                <div key={this.props.id}></div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.address}</h3>
                <h3>{this.props.city}</h3>
                <h3>{this.props.state}</h3>
                <h3>{this.props.zipcode}</h3>
            </div>
        );
    }
}