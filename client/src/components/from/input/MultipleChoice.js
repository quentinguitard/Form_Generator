import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbCheck: 1
        };
    }

    render() {
        return (
            <div className="input-group m-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" />
                    </div>
                </div>
                <input type="text" className="form-control" />
            </div>
        );
    }
}

export default Checkbox;
