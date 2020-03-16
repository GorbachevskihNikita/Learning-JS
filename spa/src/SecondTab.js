import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class SecondTab extends Component {
    render() {
        return (
            <div>
                <Card.Title>title 2</Card.Title>
                <Card.Text>
                    <p>Content for first tab</p>
                </Card.Text>
            </div> 
        );
    }
}

export default SecondTab;

