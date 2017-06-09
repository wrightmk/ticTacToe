// for compoent types that only consist of a render method use functional components instead
import React from 'react';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {/* onclick() would call it immediately */}
        {props.value}
      </button>
    );
  }

export default Square;
