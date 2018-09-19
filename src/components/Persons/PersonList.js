import React from 'react';
import Person from './Person/Person';

const PersonList = (props) =>  props.persons.map((person, index) => {
    return <Person 
        deleteThis={() => props.delete(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />
});






export default PersonList;