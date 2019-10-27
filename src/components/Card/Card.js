import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className='card-deck'>
            <div className="card"
                value={props.points}
                onClick={props.handleCardClick}
            >
                <img src={props.characterImage} />
            </div>
        </div>
    );
}

export default Card;
