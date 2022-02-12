import React from 'react';
import { Link } from "react-router-dom";
const Logo = 'images/logo.png';

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/"><img src={Logo} alt="logo" style={{ width: "75px" }} className="img-fluid" /></Link>
                <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="stick"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="stick"></span>
                    </button>
                    <ul className="navbar-nav ms-auto">
                        <li className=""><Link to="/">Home</Link></li>
                        <li className=""><Link to="/shop">Shop</Link></li>
                        <li className=""><Link to="/mint">Mint</Link></li>
                    </ul>
                </div>
                <button className="navbar-toggler" id="navoverlay" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"></button>
            </nav>
        </div>
    )
}

export default Header;