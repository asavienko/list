import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";

const ListStyleComponent = ({index, element}) => {
  return <ListItem key={index.toString()} dense button onClick={this.handleToggle(element)}>
    <Checkbox
      checked={this.state.checked.indexOf(element) !== -1}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText primary={element}/>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => this.props.delete(index)}>

      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
};

export default ListStyleComponent