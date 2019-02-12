import React, {Component} from 'react';
import './App.css';
import InputComponent from "./inputComponent";
import ShowComponent from "./showComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {arrayOfElements: []};

  }

  addElement = (value) => {
    const newArray = this.state.arrayOfElements.concat(value);
    this.setState({arrayOfElements: newArray});
  };

  deleteElement = (id) => {
    const newArray = this.state.arrayOfElements.filter((element, index) => id !== index);
    this.setState({arrayOfElements: newArray});

  };


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <InputComponent addElement={this.addElement.bind(this)}/>
        <ShowComponent array={this.state} delete={this.deleteElement.bind(this)}/>
      </div>
    );
  }
}

export default App;
