import React from "react";

function Nav(props) {
    return (
        <nav className="nav navbar nav-pills flex-column flex-sm-row nav-justified fixed-top">
            <a className="nav-item flex-sm-fill text-lg-center nav-link" href="/">Clicky Game</a>
            <a className="nav-item flex-sm-fill text-lg-center nav-link" href="/"># Correct Guesses: {props.correct}</a>
            <a className="nav-item flex-sm-fill text-lg-center nav-link" href="/">Score: {props.currentScore} | Top Score: {props.topScore}</a>
        </nav>
    );
}

export default Nav;