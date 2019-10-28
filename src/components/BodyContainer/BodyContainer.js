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
let count = 0;

class BodyContainer extends Component {

    state = {
        isWinner: false,
        selectedChar: [],
        alreadySelected: false,
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

    renderCards = (Images) => {
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

    handleCardClick = event => {

        event.preventDefault();
        // Get the id of the clicked card
        // const selectedId = event.target.attributes.getNamedItem('data-id').value;
        const selectedId = event.target.attributes.value;
        console.log(selectedId)
    
        const newState = { ...this.state };

        if(count < maxCorrect) {
            count += 1;
            newState.currentScore += this.state.points;
            if (newState.currentScore > newState.topScore) {
                newState.topScore = newState.currentScore
            }
            // newState.allImages = this.state.allImages === true;

            this.setState(newState);
            // load new random points value to card
            this.getRandomPoints();

        }
        else {
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
                <Modal/>
            </div>
        );
    }
}

export default BodyContainer;