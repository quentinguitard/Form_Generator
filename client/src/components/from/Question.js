import React, { Component } from "react";
import AnswerType from "./AnswerType";
import AnswerInput from "./AnswerInput";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "short" };
    }

    componentDidMount() {
        console.log(this.state.value);
    }

    componentDidUpdate() {
        console.log(this.state.value);
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h5>New Question</h5>
                        <div className="form-group">
                            <input
                                name="form-question"
                                type="text"
                                id="form-name"
                                placeholder="Type your question"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <h6>Answer type</h6>
                        <AnswerType handleChange={this.handleChange} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <AnswerInput value={this.state.value} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
