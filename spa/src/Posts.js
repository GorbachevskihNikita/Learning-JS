import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MDBContainer, MDBInput, MDBAlert } from "mdbreact";
import FeaturedContent from "./Featured content";
import Content from "./Content";
import Main from "./Main";

class Posts extends Component {
    render() {
        return (
            <BrowserRouter>
                <MDBContainer>
                    <MDBAlert color="primary" className="link"><p as={Link} to="./Option1" className="font-weight-light">Option 1</p></MDBAlert>
                    <MDBAlert color="primary" className="link"><p as={Link} to="./Option2" className="font-weight-light">Option 2</p></MDBAlert>
                    <MDBAlert color="primary" className="link"><p as={Link} to="./Option3" className="font-weight-light">Option 3</p></MDBAlert>
                </MDBContainer>
                
                <Route path={`/Option1`} component={Main} />
                <Route path={`/Option2`} component={Main} />
                <Route path={`/Option3`} component={Main} />
            </BrowserRouter>
        );
    }
}

export default Posts;