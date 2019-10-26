import React from "react";
// import CardContainer from '../CardContainer/CardContainer';
import "./Nav.css";

function Nav(props) {
    return (
        <nav className="nav navbar nav-pills flex-column flex-sm-row nav-justified">
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/">Clicky Game</a>
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/"><span>Click an Image to Start!</span></a>
            <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/">Score: {props.score} | Top Score: {props.topScore}</a>
            {/* <a className="nav-item flex-sm-fill text-sm-center nav-link" href="/">Score: <CardContainer />{props.currentScore} | Top Score: 9</a> */}
        </nav>
    );
}

export default Nav;