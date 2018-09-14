import React from 'react';
import './Person.css';



const Person = (props) => {

    return(
        <div className="Person">
          <p 
            onClick={props.delete}>I'm {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
          <input 
            value={props.name}
            onChange={props.changed}
            className="input"
            type="text" />
        </div>
    );
}; 
        
export default Person;