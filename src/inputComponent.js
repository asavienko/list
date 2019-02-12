import React from "react"

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""}
  }

  onSubmit = () => {
    this.props.addElement(this.state.value);
    this.setState({value: ""})
  };

  handleInputChange = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return <React.Fragment>
      <input onChange={this.handleInputChange} id={"submit"} value={this.state.value}/>
      <button onClick={()=>this.onSubmit()}>Submit</button>
    </React.Fragment>
  }
}

export default InputComponent