import React, { Component } from "react";
import Form from "./from/Form";
import { Container, Row, Col, Badge } from "reactstrap";

class Home extends Component {
    state = {
        activeForm: false
    };

    componentDidMount() {
        console.log(this.state.activeForm);
    }
    componentDidUpdate() {
        console.log(this.state.activeForm);
    }

    toggle = () => {
        this.setState({
            activeForm: !this.state.activeForm
        });
    };

    render() {
        if (!this.state.activeForm) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <h1> My Forms </h1>
                                <p> Create your very special form </p>
                                <button
                                    onClick={this.toggle}
                                    className=" btn btn-dark"
                                >
                                    Create Form
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Form />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default Home;
