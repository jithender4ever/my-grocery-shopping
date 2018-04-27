import React from 'react';

const Item = (props) => {
  return (
    <li onClick={props.onClick}>{props.itemName}</li>
  );
};

export default Item;
