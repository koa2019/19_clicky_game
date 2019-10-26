import React, { Component } from "react";
import Container from "../Container";
import Row from '../Row';
import Col from "../Col";
import Card from '../Card/Card';
import Images from '../../images/marioBrothers7.png';
// import Character from '../Character';
import "./style.css";

class CardContainer extends Component {
  
    state = {
        image: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'
    }

    // When this component mounts, pass loading boolean
    componentDidMount() {
        this.loadStuff();
        // this.getImages();
    }

    loadStuff = props => {

    };

    // getImages = () => {
    //     this.setState({image: 'https://img.pngio.com/yoshi-vector-transparent-background-image-free-stock-yoshi-super-yoshi-transparent-820_1314.png'})
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-3">
                        <Card image={this.state.image}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CardContainer;