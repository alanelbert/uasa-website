import React from "react";
import {Link, Outlet} from 'react-router-dom';
import "./Header.css";




function Header() {

    return (
        <div>
            <header className="uasa-header">
                <Link to="/"><img className="uasa-logo" src="/logo.png"></img></Link>

                <div className="uasa-links">
                    
                    <Link to="/" className="uasa-home uasa-link"><b>Home</b></Link>
                    <Link to="/about" className="uasa-link"><b>About</b></Link>
                    <Link to="/donate" className="uasa-link"><b>Donate</b></Link>
                    <Link to="/contact" className="uasa-link"><b>Contact Us</b></Link>
                    
                </div>
            </header>
            <Outlet />
        </div>
    );

}


export default Header;