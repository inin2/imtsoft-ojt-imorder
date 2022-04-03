import React from "react";
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <ul>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/menu">menu</Link></li>
                <li><Link to="/order">order</Link></li>
                <li><Link to="/counter">counter</Link></li>
            </ul>
        </div>
    );
}

export default Main;