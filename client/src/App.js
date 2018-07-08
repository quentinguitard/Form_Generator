import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <Home />
            </div>
        );
    }
}

export default App;
