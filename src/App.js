import React, { Component } from "react";
import Movies from "./Movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Movies Component</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
