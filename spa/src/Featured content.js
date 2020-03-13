import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class FeaturedContent extends Component {
    render() {
        return (
            <div className="col 6">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="holder.js/171x180" rounded />
                            <span>image1</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FeaturedContent;