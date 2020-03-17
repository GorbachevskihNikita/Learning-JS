import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { MDBContainer } from "mdbreact";

class SecondTab extends Component {
    render() {
        return (
            <div>
                <Card.Title className="font-weight-normal">title 2</Card.Title>
                <Card.Text>
                    <MDBContainer>
                        <p className="font-weight-light">Content for first tab</p>
                    </MDBContainer>
                </Card.Text>
            </div> 
        );
    }
}

export default SecondTab;

