import React from "react"
import './header.css';

function Header() {
    return (
        <div className="header-main">
            <div className="title">
                <h1>Resume</h1>
            </div>

            <div className="link">
                <ul className="list">
                    <li className="list-link">about me</li>
                    <li className="list-link">skills</li>
                    <li className="list-link">project</li>
                    <li className="list-link">contact me</li>

                </ul>
            </div>

            <div className="empty">
         
            </div>

        </div>
    );
}

export default Header;