import React, {Component} from "react";
import './App.css';
import Image from './Image';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Image url={"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/stunning-black-and-white-portrait-of-barbary-lion-on-black-background-matthew-gibson.jpg"} />
      </div>
    )
  }
}
export default App