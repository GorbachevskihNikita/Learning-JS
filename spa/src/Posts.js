import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <ListGroup>
                    <ListGroup.Item>No style</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Posts;