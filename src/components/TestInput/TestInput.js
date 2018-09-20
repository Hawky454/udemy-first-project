import React from 'react';
import classes from './TestInput.css';


const TestInput = (props) => {

    let colorz = '';

        if(props.length <= 50) {
            colorz = 'green';
        } else {
            colorz = 'red';
        }

    return (
      <div>
        <p>Play around with typing below, go on, do it... IT'S FUN!!!!</p>
        <input 
          className={props.passingAlongClassName}
          onChange={props.changeThisBiatch}
      />
        <p>{props.length}</p>
        <p className={classes.p} style={{color: colorz}}>{props.inputText}</p>
    </div>
  );
}

export default TestInput;