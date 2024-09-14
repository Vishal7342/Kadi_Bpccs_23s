import React from "react";

function Navbar() {
    return (
        <div className="row">
          <div className="col-sm-12"></div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand pd-20" href="#">HMS</a>
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Login / SignUp</a>
            </li>
            </ul>
        </nav>
    </div>
    
    )
}

export default Navbar