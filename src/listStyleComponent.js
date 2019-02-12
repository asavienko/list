import React from "react";

const ListStyleComponent = ({index, element}) => {
  return <li key={index}>
    {element}
    <button>Delete</button>
  </li>
};

export default ListStyleComponent