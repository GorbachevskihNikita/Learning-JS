import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MDBContainer, MDBInput, MDBAlert } from "mdbreact";

class Posts extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBAlert color="primary" className="link"><a href="#!" className="alert-link">Option 1</a></MDBAlert>
                <MDBAlert color="primary" className="link"><a href="#!" className="alert-link">Option 2</a></MDBAlert>
                <MDBAlert color="primary" className="link"><a href="#!" className="alert-link">Option 3</a></MDBAlert>
            </MDBContainer>
        );
    }
}

export default Posts;