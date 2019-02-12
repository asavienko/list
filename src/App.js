import React, {Component} from 'react';
import './App.css';
import InputComponent from "./inputComponent";
import ShowComponent from "./showComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {arrayOfElements: ["asd", "adasda"]};

  }

  addElement = (value) => {
    const newArray = this.state.arrayOfElements.concat(value);
    this.setState({arrayOfElements: newArray});
  };

  render() {
    //debug what you have here in this.state
    const {arrayOfElements} = this.state;
    return (
      <div className="App">
        <InputComponent addElement={this.addElement.bind(this)}/>
        <ul>
          {arrayOfElements.length > 0 && arrayOfElements.map((element, index) => {
              return (
                  <li key={index}>
                    {element}
                    <button>Delete</button>
                  </li>
              )}
          )}
        </ul>
      </div>
    );
  }
}

export default App;
