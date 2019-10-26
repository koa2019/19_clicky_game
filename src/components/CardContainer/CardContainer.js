import React, { Component } from "react";
import Container from "../Container";
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
import Images from '../../components/images.json';
// import Character from '../Character';
import "./style.css";

class CardContainer extends Component {

    state = {
        allImages: Images
    }



    // getImages = () => {
    //     this.setState({image: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'})
    // }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.allImages.map(character => {
                        return (
                            <Col size="md-3">
                                <Card characterImage={character} />
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        );
    }
}

export default CardContainer;