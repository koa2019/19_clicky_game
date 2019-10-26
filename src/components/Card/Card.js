import React, { Component } from "react";
import "./style.css";

// class Card extends Component {

// props = {
//     isWinner: false,
//     characters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     selectedChar: [],
//     alreadySelected: false,
//     currentScore: 0,
//     topScore: 3,
//     points: 1,
// };

// getRandomPoints = () => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     console.log(num)
//     setprops({
//         points: num
//     });
// }

// renderCards = () => {

// }

// handleCardClick = event => {
//     // Get the data-value of the clicked card
//     const cardVal = event.target.attributes.value;
//     // console.log(cardVal)
//     const newprops = { ...props };

//     newprops.currentScore += props.points;

//     if(newprops.currentScore > newprops.topScore){
//         newprops.topScore = newprops.currentScore
//     }

//     setprops(newprops);
//     // load new random points value to card
//     getRandomPoints();
// }

// render(props) {
function Card(props) {

    return (
        <div className='card-deck'>

            <div className="card"
                value={props.points}
                onClick={props.handleCardClick}

            // value={props.points}

            >
                <img src={props.characterImage} />
                <p>Current Score: {props.currentScore}</p>
                <p>Card Value: {props.points}</p>
                <p>Total Score: {props.topScore}</p>
            </div>
        </div>
    );
}

export default Card;
