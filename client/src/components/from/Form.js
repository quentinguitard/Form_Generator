import React, { Component } from "react";
import Question from "./Question";

class Form extends Component {
    state = {
        questions: 1
    };

    componentDidMount() {
        console.log(this.state.quesitons);
    }

    componentDidUpdate() {
        console.log(this.state.questions);
    }

    addQuestion = e => {
        e.preventDefault();
        this.setState({
            questions: this.state.questions + 1
        });
    };

    deleteQuestion = e => {
        e.preventDefault();
        if (this.state.questions < 1) {
            this.setState({
                questions: 0
            });
        } else {
            this.setState({
                questions: this.state.questions - 1
            });
        }
    };

    render() {
        var question = [];
        for (let i = 0; i < this.state.questions; i += 1) {
            question.push(<Question key={i} number={i} />);
        }

        return (
            <div className="container">
                <form>
                    <h2>New Form</h2>
                    <div className="form-group">
                        <input
                            name="form-name"
                            type="text"
                            id="form-name"
                            placeholder="Form Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="form-description"
                            type="text"
                            id="form-description"
                            placeholder="Form Description"
                            className="form-control"
                        />
                    </div>
                    {question}
                    <button
                        className="btn btn-dark mr-3"
                        onClick={this.addQuestion}
                    >
                        Add question{" "}
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={this.deleteQuestion}
                    >
                        Delete question{" "}
                    </button>
                    <div className="row mt-4">
                        <div className="col">
                            <button className="btn btn-success">
                                Send Form
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
