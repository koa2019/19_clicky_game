import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav navbar nav-pills flex-column flex-sm-row nav-justified">
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/">Clicky Game</a>
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/"><span>Click an Image to Start!</span></a>
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/">Score: 0 | Top Score: 9</a>
        </nav>
    );
}

export default Nav;