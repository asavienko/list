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
    this.state.arrayOfElements.push(value);
    console.log(this.state.arrayOfElements)
    //possible todo
    //const newArray = this.state.arrayOfElements.concat(value);
    //this.setState({arrayOfElements: newArray});
    //
  };

  showElements = ({arrayOfElements: array}) => {
    const elements = array.length > 0 && array.map((element, index) => {
        return (<li key={index.toString()}>{element}
          <button>Delete</button>
        </li>)
      }
    );
    return elements;
  };

  render() {
    //debug what you have here in this.state
    return (
      <div className="App">
        <InputComponent addElement={this.addElement.bind(this)}/>
        <ul>{this.showElements(this.state)}</ul>
      </div>
    );
  }
}

export default App;
