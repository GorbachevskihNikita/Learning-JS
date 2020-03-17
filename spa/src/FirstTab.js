import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import logo from "./img/testimg.svg";

class FirstTab extends Component {
    render() {
        return (
            <div>
                <Card.Title className="font-weight-normal">title 1</Card.Title>
                <Card.Text>
                    <Image src={logo} fluid/>
                </Card.Text>
            </div>  
        );
    }
}

export default FirstTab;

