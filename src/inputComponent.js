import React from "react"
import {Divider, IconButton, InputBase, Paper} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 20,
    zIndex: 10,
  },
  input: {
    width: "100%"
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  button: {
    padding: 10,
  },
};


class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  onSubmit = () => {
    this.props.addElement(this.state.value);
    this.setState({value: ""})
  };

  handleInputChange = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return <Paper style={styles.root} elevation={1}>
      <InputBase
        style={styles.input}
        autoComplete='off'
        placeholder={"Введите заметку"}
        onChange={this.handleInputChange}
        id={"submit"}
        value={this.state.value}
      />
      <Divider style={styles.divider}/>
      <IconButton style={styles.button} onClick={() => this.onSubmit()}>
        <AddIcon color="secondary"/>
      </IconButton>
    </Paper>

  }
}

export default InputComponent