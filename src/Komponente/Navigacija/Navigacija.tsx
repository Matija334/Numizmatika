import React from 'react';
import {Link} from "react-router-dom";

export default function Navigacija() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/seznamKovancev">Seznam kovancev</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}