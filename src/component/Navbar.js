import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg back">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fw-semibold font" to="/">
                        <img src="image/nayanlogo.png" width="150px" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse show justify-content-lg-end ul1" id="navbarNavDropdown">
                        <ul className="navbar-nav fs-2">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fw-bold p-3 fs-4" aria-current="page" to="/">
                                    <i className="fa-solid fa-house" /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fw-bold p-3 fs-4" aria-current="page" to="/aboutus">
                                    <i className="fa-solid fa-address-card" /> About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fw-bold p-3 fs-4" aria-current="page" to="/Service">
                                    <i className="fa-solid fa-address-card" /> Services
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle nav-link-custom fw-bold p-3 fs-4" to="/gallery" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-image" /> Gallery
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/gallery"><b>Image</b></Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/video"><b>Video</b></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fw-bold p-3 fs-4" aria-current="page" to="/contactus">
                                    <i className="fa-solid fa-phone" /> Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
