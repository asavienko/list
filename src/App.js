import React, {Component} from 'react';
import './App.css';
import InputComponent from "./inputComponent";
import ListStyleComponent from "./listStyleComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {arrayOfElements: []};

  }

  addElement = (value) => {
    const newArrayOfToDos = this.state.arrayOfElements.concat(value);
    this.setState({arrayOfElements: newArrayOfToDos});
  };

  render() {
    const {arrayOfElements} = this.state;
    return (
      <div className="App">
        <InputComponent addElement={this.addElement.bind(this)}/>
        <ul>
          {arrayOfElements.length > 0 && arrayOfElements.map((element, index) => {
              return (
                  <ListStyleComponent element={element} index={index}/>
              )}
          )}
        </ul>
      </div>
    );
  }
}

export default App;
