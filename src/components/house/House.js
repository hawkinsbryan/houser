import React from "react";
import { Link } from "react-router-dom";

export default function House(props) {
    return (
        <div>
            <Link to={`/house/${props.id}`}>
                <img src={props.img} alt={props.name} />
            </Link>
            <h2>Property Name: {props.name}</h2>
            <h2>Address: {props.address}</h2>
            <h2>City: {props.city}</h2>
            <h2>State: {props.state}</h2>
            <h2>Zip Code: {props.zip}</h2>

            <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>
    );
}