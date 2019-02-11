import React from "react"

class InputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}
  }

  onSubmit = (e) => {
    this.props.addElement(this.state.value);
    document.getElementById("submit").value=""; /*i don`t know how to do it by other way*/
    e.preventDefault();
  };

  handleInputChange = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return <form onSubmit={this.onSubmit}>
      <input onChange={this.handleInputChange} id={"submit"}/>
      <input type={"submit"}/>
    </form>
  }
}

export default InputComponent