import React, { Component } from "react";
import Container from "../Container";
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
// import Character from '../Character';
import "./style.css";

class CardContainer extends Component {
    // state = {
    //     characters: {},
    //     selectedChar: {},
    //     alreadySelected: false,
    //     currentScore: 0,
    //     topScore: 9,
    //     points: 1,
    //     img: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'
    // };


    // // When this component mounts, pass loading boolean
    // componentDidMount() {
    //     this.loadStuff();
    // }

    // loadStuff = props => {
    //     // data-value={Math.floor(Math.random() * 10) + 1}

    // };

    // handleCardClick = event => {

    //     event.preventDefault();

    //     // Get the data-value of the clicked card
    //     // const cardVal = event.target.attributes.getNamedItem("value").value;
    //     const cardVal = event.target.attributes.value;
    //     console.log(cardVal)

    //     // Clone this.state to the newState object
    //     // We'll modify this object and use it to set our component's state
    //     // const newState = { ...this.state };
    //     // Set the state for the appropriate input field
    //         // newState.points = cardVal;
    //         // newState.currentScore = newState.points;


    //     // Replace our component's state with newState, load the next dog image
    //     this.setState({value: cardVal});
    //     console.log(this.state.value)
    //     this.loadStuff();
    // };


    render(props) {
        return (
            <Container>
                <Row>
                    <Col size="md-3">
                        <Card />
                        {/* <Card  */}
                        {/* // image={props.state.image}  */}
                        {/* points={Math.floor(Math.random() * 10) + 1}  */}
                        {/* handleCardClick={props.handleCardClick} /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CardContainer;