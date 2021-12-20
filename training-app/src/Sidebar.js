import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/add-product">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">Add Product</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/all-products">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">All Products</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;