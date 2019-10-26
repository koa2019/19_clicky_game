import React, { Component } from "react";
import "./style.css";
import Character from '../Character';
import Background from './marioBrothers7.png';


class Card extends Component {


    state = {
        isWinner: false,
        characters: [1,2,3,4,5,6,7,8,9],
        selectedChar: [],
        alreadySelected: false,
        currentScore: 0,
        topScore: 3,
        points: 1,
        image2: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'
    };




    getRandomPoints = () => {
        const num = Math.floor(Math.random() * 10) + 1;
        console.log(num)
        this.setState({
            points: num
        });
    }

    renderCards = () => {

    }
    handleCardClick = event => {
        // Get the data-value of the clicked card
        const cardVal = event.target.attributes.value;
        // console.log(cardVal)
        const newState = { ...this.state };

        newState.currentScore += this.state.points;

        if(newState.currentScore > newState.topScore){
            newState.topScore = newState.currentScore
        }

        this.setState(newState);
        // load new random points value to card
        this.getRandomPoints();
    }


    render(props) {
        return (
            <div className='card-deck'>

               
                {/* {this.state.characters.map()} */}

                <div className="card"
                    // style={{
                        // backgroundImage: `url(${Background})`
                        // backgroundImage: props.image ? `url(${Background})` : "none"
                    // }}
                    // data-id=''
                    value={this.state.points}
                    onClick={this.handleCardClick}
                >
                     <img src= {Background} />
                    <p>Current Score: {this.state.currentScore}</p>
                    <p>Card Value: {this.state.points}</p>
                    <p>Total Score: {this.state.topScore}</p>
                   
                    {/* <div className="card-body"> {props.children} </div> */}
                </div>
             

            </div>
        );
    }
}

export default Card;
