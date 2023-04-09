import React from "react";

function NavBar(props){
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme} p-3`}>
            <div className="container-fluid">
            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Links --> */}
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">About Us</a>
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
                    <label className="form-check-label" for="flexSwitchCheckDefault">Light Mode</label>
                </div>
                {/* <div className="navbar-nav">
                <button type="button" className="btn btn-primary mx-2">Login</button>
                </div> */}
            </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;