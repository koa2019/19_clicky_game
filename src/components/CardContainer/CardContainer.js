import React, { Component } from "react";
import Container from "../Container";
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
import Images from '../../components/images.json';
import "./style.css";

class CardContainer extends Component {

    state = {
        isWinner: false,
        // characters: [1,2,3,4,5,6,7,8,9],
        selectedChar: [],
        alreadySelected: false,
        currentScore: 0,
        topScore: 3,
        points: 1,
        allImages: Images
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
   
    render() {
        return (
            <div> 
            <Nav score={this.state.currentScore} />
            <Header />
            <Container>
                <Row>
                    {this.state.allImages.map(character => {
                        console.log(character)

                        return (
                            <Col size="md-3">
                                <Card  characterImage={character.image} 
                                points={this.state.points}
                                handleCardClick={this.handleCardClick} key={character.title} />
                            </Col>
                        )
                    })}

                </Row>
            </Container>
            </div>
        );
    }
}

export default CardContainer;