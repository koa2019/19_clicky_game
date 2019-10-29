import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className='card-deck'>
            <div className="card"
                data-id={props.id}
                data-value={props.name}
                value={props.points}
                data-clicked={props.clicked}
                onClick={props.handleCardClick}
                // onClick={() =>props.handleCardClick(props.id)}>
            >
                <img src={props.characterImage} alt={props.name} />
            </div>
        </div>
    );
}

export default Card;
