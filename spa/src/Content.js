import React, { Component } from "react";
import FeaturedContent from "./Featured content";
import Posts from "./Posts";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route } from "react-router-dom";

class Content extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><FeaturedContent/></Col>
                    <Col><Posts/></Col>
                </Row>
            </Container>
        );
    }
}

export default Content;