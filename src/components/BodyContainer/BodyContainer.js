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

const maxScore = 150;
const maxCorrect = 3;

class BodyContainer extends Component {

    state = {
        status: 'go',
        numCorrect: 0,
        currentScore: 0,
        topScore: 0,
        points: 1,
        allImages: Images,
        message: ''
    };

    resetGame = () => {

        // clone state obj
        const newState = { ...this.state };
        newState.currentScore = 0;
        newState.status = 'go';
        newState.numCorrect = 0;
        this.getRandomPoints();
        this.setState(newState)
        console.log(newState)
    }

    getRandomPoints = () => {
        const num = Math.floor(Math.random() * 10) + 1;
        this.setState({
            points: num
        });
    }

    renderMessage = str => {
        switch (str) {
            case 'win':
                this.setState({ message: 'WINNER! You Guessed 15 out of 15 Correct!' })
                this.setState({ status: 'stop' })
                this.resetGame()
                break;
            case 'stop':
                this.setState({ message: 'GAME OVER. You Guessed Wrong' })
                this.setState({ status: 'stop' })
                this.resetGame()
                break;
            default:
                this.setState({ message: 'Hello' })
                this.setState({ status: 'go' })
        }
    }

    // function to render images in random order
    renderCards = Images => {
        this.state.allImages.shuffle();
    }

    // function checks if the img user clicks on has already been clicked on 
    // by searching for it in the clickedImgs array
    validateSelection = currentImg => {

        let clickedImgs = [];
        // for (character of selectedImages) {
        //     if(selectedId == i) {
        clickedImgs.filter(currentImg)
        if (currentImg) {
            this.renderMessage('stop')
        }
        else {
            clickedImgs.push(currentImg)
        }
    }


    // eventListener function to handle card user selects
    handleCardClick = event => {
        event.preventDefault();

        // Get the id of the clicked card
        // const selectedId = event.target.attributes.getNamedItem('data-id');
        const selectedId = event.target.attributes.value;
        console.log(selectedId)

        // clone state obj. Easier way to update multiple key prop at once
        const newState = { ...this.state };

        // call this function
        // this.validateSelection(selectedId);
        if (newState.status === 'go') {

            newState.numCorrect += 1;

            // set score to the sum of current score & points
            // this.getCurrentScore()
            newState.currentScore += this.state.points;

            // conditional to find top score
            // this.getTopScore()
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

        // conditional to stop game if goer picked all 15 cards only once
        if (newState.numCorrect === maxCorrect) {
            console.log('WINNER! You Guessed 15 out of 15 Correct!')
            this.renderMessage('win')
        }
    }

    render() {
        return (
            <div>
                <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} correct={this.state.numCorrect} />
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
                <Modal>
                    {this.state.message}
                </Modal>
            </div>
        );
    }
}

export default BodyContainer;