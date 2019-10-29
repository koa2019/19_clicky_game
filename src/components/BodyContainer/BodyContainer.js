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
// const clickedImgs = [];

class BodyContainer extends Component {

    state = {
        status: 'go',
        numCorrect: 0,
        currentScore: 0,
        topScore: 0,
        points: 1,
        allImages: Images,
        // clickedImgs: [],
        message: ''
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadImgObjs();
    }

    loadImgObjs = () => {
        if (Images.length > 0) {
            console.log('componentDidMount!')
        }
        else {
            console.log('Error. JSON file empty')
        }
    }

    shuffle = arr => {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

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
        this.setState({ points: num });
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

    // eventListener function to handle card user selects
    handleCardClick = event => {
        // event.preventDefault();

        // Get the data-value of the clicked card
        // const currentImg = event.target.attributes.getNamedItem("data-value").value;
        const currentImg = event.target.attributes.getNamedItem("data-value");
        console.log(currentImg)

        // clone state obj. Easier way to update multiple state key props at once
        const newState = { ...this.state };

        // conditional checks if the img user clicks on has already been clicked on by searching for it in the clickedImgs array
        // const clickedImgs = [];
        // clickedImgs.filter(currentImg, cb => {

        // // newState.clickedImgs.filter(currentImg, cb => {

        //     if (currentImg) {
        //     // if (newState.clickedImgs) {
        //         this.renderMessage('stop')
        //     }
        //     else {
        //         // push this img obj into new array & set Images isClicked property to true
        //         clickedImgs.push(currentImg)
        //         // newState.clickedImgs.push(currentImg)
        //         //  newState.allImages.isClicked = true;
        //         this.state.allImages.isClicked = true;
        //     }
        // })

        // conditional to continue playing game
        if (newState.status === 'go') {

            // increament correct guesses by 1
            newState.numCorrect += 1;

            // set score to the sum of current score & points
            newState.currentScore += this.state.points;

            // conditional to find top score
            if (newState.currentScore > newState.topScore) {
                newState.topScore = newState.currentScore
            }

            // Replace our component's state with newState, load random points & shuffle imgs
            this.setState(newState);
            this.getRandomPoints();
            this.shuffle(this.state.allImages)
        }

        // conditional to stop game if user picked all 15 cards only once
        if (newState.numCorrect === maxCorrect || newState.currentScore === maxScore) {
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
                        {/* loop through allImages arry & callbk function returns each card */}
                        {this.state.allImages.map((character, i) => {
                            return (
                                <Col size="md-3" key={character.title}>
                                    <Card
                                        id={character.id}
                                        points={this.state.points}
                                        name={character.title}
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