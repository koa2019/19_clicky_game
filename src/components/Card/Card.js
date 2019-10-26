import React, { Component } from "react";
import "./style.css";
import Character from '../Character';
// import Img from './marioBrothers7';
// import img from '../../../public/images/marioBrothers7.png';

class Card extends Component {


    state = {
        characters: {},
        selectedChar: {},
        alreadySelected: false,
        currentScore: 0,
        topScore: 9,
        points: 1,
        img: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'
    };


    // When this component mounts, pass loading boolean
    componentDidMount() {
        this.loadStuff();
    }

    loadStuff = props => {

    };

    getRandomPoints = () => {
        const num = Math.floor(Math.random() * 10) + 1;
        console.log(num)
        this.setState({
            points: num
        });
    }

    handleCardClick = event => {
        // Get the data-value of the clicked card
        const cardVal = event.target.attributes.value;
        console.log(cardVal)
        const newState = { ...this.state };

        newState.currentScore += this.state.points;

        this.setState(newState);
        // load new random points value to card
        this.getRandomPoints();
    }


    render() {
        return (
            <div className='card-deck'>

                {/* map each imgArray and display one card with one img in card */}
                {/* {props.results.map(result => ( */}

                <div className="card"
                    name='points'
                    value={this.state.points}
                    onClick={this.handleCardClick}
                > 
                <p>Current Score: {this.state.currentScore}</p>
                <p>Card Value: {this.state.points}</p>
                    {/* <div className="card-body"> {props.children} </div> */}
                </div>
                {/* ))} */}

            </div>
        );
    }
}

export default Card;
