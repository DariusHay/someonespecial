import React from 'react'
// React Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import Heart from "./images/Heart.webp"

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-default navbar-static-top">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/someonespecial"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ color: "white" }}>Happy Valentine's Day</Link>
                <img
                    src={Heart}
                    style={{ height: "40px", width: "40px", marginRight: "100px" }}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span> */}
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <a className={location.pathname === "/flexiblechorehandlers" ? "nav-item active" : "nav-item"}
                            style={{ color: "white", marginRight: "50px" }}>
                            For Simone... Click me!!
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar