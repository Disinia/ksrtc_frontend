import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-flu">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="nav-link" to="">KSRTC APP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">ADD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/view">VIEW</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">SEARCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/delete">DELETE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
