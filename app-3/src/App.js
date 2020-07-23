import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      cars: ["Lamborghini", "Devil 16", "Toyota 4runner", "Toyota Tundra"]
    }
  };

handleChange(filter) {
  this.setState({ filterString: filter});
}

  render() {
    let carsToDisplay = this.state.cars.filter((element,index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.  target.value)} type="text"/>
        {carsToDisplay}
      </div>
    );
  }
}

export default App;