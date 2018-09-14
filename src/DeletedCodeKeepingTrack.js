
//! This is just an example of how I originally had the data rendered, I am now using a map method to render this info instead.
const DeletedCodeKeepingTrack = (props) => {
return(
  <div>
    <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
    <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        clicked={this.handleClick.bind(this, ' Bibbidy Bibbidy Bop!')}
        changed={this.nameChangedHandler}>My Hobbies: Gym!</Person>
    <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
);
};