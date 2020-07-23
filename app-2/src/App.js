import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tvShows:["Stargate", "Avatar", "Supernatural","The Office", "Seinfeld", "The Mentalist"]
    };
  }
  render(){
    let showsToDisplay = this.state.tvShows.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return <div className="App">{showsToDisplay} </div>;
  }
}

export default App