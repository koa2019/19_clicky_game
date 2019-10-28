import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className='card-deck'>
            <div className="card"
                data-id={props.id}
                value={props.points}
                data-clicked={props.clicked}
                onClick={props.handleCardClick}
            >
                <img src={props.characterImage} alt={props.alt} />
            </div>
        </div>
    );
}

export default Card;
