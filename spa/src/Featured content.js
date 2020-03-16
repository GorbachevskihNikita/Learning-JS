import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";


class FeaturedContent extends Component {
    render() {
        return (
            <Card>
                <BrowserRouter>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey={1}>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Preview" eventKey={1}>Preview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Info" eventKey={2}>Info</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Route exact path={`/`} component={FirstTab}/>
                        <Route path={`/Preview`} component={FirstTab}/>
                        <Route path={`/Info`} component={SecondTab}/>
                    </Card.Body>
                </BrowserRouter>
            </Card>
        );
    }
}

export default FeaturedContent;