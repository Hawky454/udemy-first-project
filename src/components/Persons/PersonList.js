import React, { Component } from 'react';
import Person from './Person/Person';



//! when using props in a class component you have to call it by using this.
class PersonList extends Component{

    constructor(props) {
        super(props);
        console.log('[PersonList.js] Inside Constructor', props);
      }
    
   

    render() {
        return(
            this.props.persons.map((person, index) => {
                return <Person 
                    deleteThis={() => this.props.delete(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        );
    }

} 






export default PersonList;