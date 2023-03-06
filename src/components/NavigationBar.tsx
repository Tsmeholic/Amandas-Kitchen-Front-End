import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navbar() {
    function handleClick() {
        console.log("Buttons work!")
    };

    return (
        <header>
            <div className="container-fluid position-relative no-side-padding">
                <div className="menu-nav-icon" data-nav-menu="#main-menu">
                    <i className="ion-navicon" />
                </div>
                <ul className="main-menu visible-on-click" id="main-menu">
                    <li><Link className={"nav-link"} to={"/"}> Home </Link></li>
                    {(
                    <li><Link className={"nav-link"} to={"/create"} onClick={handleClick}> Add Recipe </Link></li>
                    )}
                </ul>
            </div>
        </header>
    );
}
export default withRouter(Navbar);