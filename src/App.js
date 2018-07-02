import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">{routes}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
