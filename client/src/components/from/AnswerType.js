import React, { Component } from "react";

class AnswerType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>
                        <select
                            className="form-control"
                            value={this.props.value}
                            onChange={this.props.handleChange}
                        >
                            <option value="short">Short Answer</option>
                            <option value="paragraphe">Paragraphe</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="multiple">Multiple Choice</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default AnswerType;
