import React from "react"

class ShowComponent extends React.Component {

  showElements = ({arrayOfElements: array}) => {
    const elements = array.length > 0 && array.map((element, index) => {
        return (<li key={index.toString()}>{element}
          <button onClick={()=> this.props.delete(index)}>Delete</button>
        </li>)
      }
    );
    return elements;
  };


  render() {
    return <ul>{this.showElements(this.props.array)}</ul>
  }
}

export default ShowComponent