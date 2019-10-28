import React, { Component } from "react";
import Nav from '../Nav';
import Header from '../Header';
import Container from "../Container";
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
import Modal from "../Modal";
import Images from '../../components/images.json';
import "./style.css";

// const maxScore = 75;
const maxCorrect = 15;
let numCorrect = 0;
let selectedImages = [];

class BodyContainer extends Component {

    state = {
        status: "",
        currentScore: 0,
        topScore: 0,
        points: 1,
        allImages: Images
    };

    getRandomPoints = () => {
        const num = Math.floor(Math.random() * 5) + 1;
        this.setState({
            points: num
        });
    }

    renderCards = Images => {
        this.state.allImages.shuffle();
    }

    renderMessage = str => {
        switch (str) {
            case 'win':
                alert('WINNER! You Guessed 15 out of 15 Correct!');
                break;
            case 'lost':
                alert('Sorry You Guessed Wrong');
                break;
            default:
                alert('Hello');
        }
    }
    validateSelection = selectedId => {

        // for (character of selectedImages) {
        //     if(selectedId == i) {
        selectedImages.indexOf(selectedId, 0)
        if (selectedId) {
            this.setState({
                status: 'end'
            })
        }
        else {
            selectedImages.push(selectedId)
            this.setState({
                status: 'play'
            })
        }
    }

    handleCardClick = event => {

        event.preventDefault();
        // Get the id of the clicked card
        // const selectedId = event.target.attributes.getNamedItem('data-id');
        const selectedId = event.target.attributes.value;
        console.log(selectedId)

        // call this function
        this.validateSelection(selectedId);

        if (this.state.status === 'play') {

            numCorrect += 1;

            // clone state obj
            const newState = { ...this.state };

            // set score to the sum of current score & points
            newState.currentScore += this.state.points;

            // conditional to find top score
            if (newState.currentScore > newState.topScore) {
                newState.topScore = newState.currentScore
            }

            // set Images isClicked property to true
            // newState.allImages.isClicked = true;

           // Replace our component's state with newState
            this.setState(newState);
            // load new random points value to card
            this.getRandomPoints();
        }

        // conditional to end game if player picked all 15 cards only once
        if (numCorrect === maxCorrect) {
            this.setState({ status: 'end' })
            this.renderMessage('win')
        }
    }

    render() {
        return (
            <div>
                <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
                <Header />
                <Container>
                    <Row>
                        {this.state.allImages.map((character, i) => {

                            return (
                                <Col size="md-3" key={character.title}>
                                    <Card
                                        id={character.id}
                                        points={this.state.points}
                                        alt={character.title}
                                        characterImage={character.image}
                                        clicked={character.isClicked}
                                        handleCardClick={this.handleCardClick} />
                                </Col>
                            );
                        })}

                    </Row>
                </Container>
                <Modal />
            </div>
        );
    }
}

export default BodyContainer;