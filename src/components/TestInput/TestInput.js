import React from 'react';
import classes from './TestInput.css';

const TestInput = (props) => {
    return (
      <div>
        <p>Play around with typing below, go on, do it... IT'S FUN!!!!</p>
        <input 
          className={props.passingAlongClassName}
          onChange={props.changeThisBiatch}
      />
        <p>{props.length}</p>
        <p className={classes.p}>{props.inputText}</p>
    </div>
  );
}

export default TestInput;