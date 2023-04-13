import React from "react";
import { Link } from "react-router-dom";

function NavBar(props){
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme} p-3`}>
            <div className="container-fluid">
            
            <a className="navbar-brand" href="/">{props.title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="/">Our Service</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="/">Our Team</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="/">Contact Us</a>
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.theme==="dark"?"light":"dark"}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
                </div>
            </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;