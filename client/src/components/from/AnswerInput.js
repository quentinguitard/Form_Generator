import React, { Component } from "react";
import Checkbox from "./input/Checkbox";
import MultipleChoice from "./input/MultipleChoice";

class AnswerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: 1,
            checkbox: 1
        };
    }
    addRadio = e => {
        e.preventDefault();
        this.setState({
            radio: this.state.radio + 1
        });
    };
    deleteRadio = e => {
        e.preventDefault();
        if (this.state.radio < 1) {
            this.setState({
                radio: 0
            });
        } else {
            this.setState({
                radio: this.state.radio - 1
            });
        }
    };

    addCheckbox = e => {
        e.preventDefault();
        this.setState({
            checkbox: this.state.checkbox + 1
        });
    };
    deleteCheckbox = e => {
        e.preventDefault();
        if (this.state.checkbox < 1) {
            this.setState({
                checkbox: 0
            });
        } else {
            this.setState({
                checkbox: this.state.checkbox - 1
            });
        }
    };

    render() {
        var radios = [];
        for (let i = 0; i < this.state.radio; i += 1) {
            radios.push(<Checkbox key={i} number={i} />);
        }

        var checkboxs = [];
        for (let i = 0; i < this.state.checkbox; i += 1) {
            checkboxs.push(<MultipleChoice key={i} number={i} />);
        }

        switch (this.props.value) {
            case "short":
                return (
                    <div className="form-group">
                        <input className="form-control" type="text" />
                    </div>
                );
            case "paragraphe":
                return (
                    <div className="form-group">
                        <textarea className="form-control" />
                    </div>
                );
            case "checkbox":
                return (
                    <div className="row">
                        <div className="col">
                            {radios}
                            <button
                                className="btn btn-outline-dark btn-sm mr-2"
                                onClick={this.addRadio}
                            >
                                Add 0ption
                            </button>
                            <button
                                className="btn btn-outline-dark btn-sm"
                                onClick={this.deleteRadio}
                            >
                                Delete Option
                            </button>
                        </div>
                    </div>
                );
            case "multiple":
                return (
                    <div className="row">
                        <div className="col">
                            {checkboxs}
                            <button
                                className="btn btn-outline-dark btn-sm mr-2"
                                onClick={this.addCheckbox}
                            >
                                Add Checkbox
                            </button>
                            <button
                                className="btn btn-outline-dark btn-sm"
                                onClick={this.deleteCheckbox}
                            >
                                Delete Checkbox
                            </button>
                        </div>
                    </div>
                );
        }
    }
}

export default AnswerInput;
