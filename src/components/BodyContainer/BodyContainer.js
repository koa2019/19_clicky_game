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

const maxScore = 140;
const maxCorrect = 14;

class BodyContainer extends Component {

    state = {
        numCorrect: 0,
        isSelected: false,
        currentScore: 0,
        topScore: 0,
        points: 1,
        allImages: Images,
        clickedImgs: [],
        message: ''
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount = () => this.loadImgObjs()

    loadImgObjs = () => {
        if (Images.length > 0) { 
            console.log('componentDidMount!') 
        }
        else { 
            console.log('Error. JSON file empty') 
        }
    }

    shuffle = arr => {
        arr.sort(() => Math.random() - 0.5);
        return arr
    }

    resetGame = () => {
        this.setState({
            currentScore: 0,
            numCorrect: 0,
            clickedImgs: [],
            isSelected: false
        })
        this.getRandomPoints();
    }

    getRandomPoints = () => {
        const num = Math.floor(Math.random() * 10) + 1;
        this.setState({ points: num });
    }

    renderMessage = str => {
        switch (str) {
            case 'win':
                this.setState({ message: 'WINNER! You Guessed 15 out of 15 Correct!' })
                break;
            case 'stop':
                // this.setState({ message: 'GAME OVER. You Guessed Wrong' })
                // alert(this.state.message)
                alert('GAME OVER. You Guessed Wrong')
                break;
            default:
                this.setState({ message: 'Hello' })
        }
    }

    // eventListener function to handle card user selects
    handleCardClick = event => {

        // Get the data-value of the clicked card
        const target = event.target.parentNode.attributes.getNamedItem('data-value').value;
        console.log('data-value', target)
        // console.log('Image[1].isClicked: ', Images[1].isClicked)

        // clone state obj. Easier way to update multiple state key props at once
        const newState = { ...this.state };

        // conditional to continue playing game
        // if (newState.isSelected) {
        if (newState.clickedImgs.includes(target)) {
            this.renderMessage('stop')
            this.resetGame()
        }

        // if (!newState.isSelected) {
        // if(!Images.isClicked) { 
        else {

            // push target value into array & set Images isClicked property to true
            newState.clickedImgs.push(target)
            console.log(newState.clickedImgs)
            // newState.isSelected = true;

            // increament correct guesses by 1
            newState.numCorrect += 1;

            // set score to the sum of current score & points
            newState.currentScore += this.state.points;
        }
        // conditional to find top score
        if (newState.currentScore > newState.topScore) {
            newState.topScore = newState.currentScore
        }

        // Replace our component's state with newState, load random points & shuffle imgs
        this.setState(newState);
        this.getRandomPoints();
        this.shuffle(this.state.allImages)


        // conditional to stop game if user picked all 15 cards only once
        if (newState.numCorrect === maxCorrect || newState.currentScore === maxScore) {
            // console.log('WINNER! You Guessed 15 out of 15 Correct!')
            this.renderMessage('win')
            this.resetGame()
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
                                        // clicked={this.state.isSelected}
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