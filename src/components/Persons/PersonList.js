import React, { PureComponent } from 'react';
import Person from './Person/Person';



//! when using props in a class component you have to call it by using this.
class PersonList extends PureComponent{

    constructor(props) {
        super(props);
        console.log('[PersonList.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
      }

      componentDidMount() {

      }
    
   

    render() {
        return(
            this.props.persons.map((person, index) => {
                return <Person 
                    deleteThis={() => this.props.delete(index)}
                    position={index}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} 
                    authenticated={this.props.isAuthenticated}
                    />
            })
        );
    }

} 






export default PersonList;