import React, { Component } from "react";
import Container from "../Container";
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
import Character from '../Character';
import "./style.css";

class CardContainer extends Component {
    state = {
        characters: {},
        selectedChar: {},
        currentScore: 0,
        topScore: 0,
        score: {}
    };


    // When this component mounts, pass loading boolean
    // componentDidMount() {
    //     this.loadStuff('loading');
    // }

    // loadStuff = props => {

    // };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-3">
                        <Card 
                        handleInputChange={this.handleInputChange}>
                            {/* <Character 
                            src={this.state.result.Poster}
                            value={this.state.result.score}
                            /> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CardContainer;