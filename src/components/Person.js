import React from 'react';

const Person = (props) => {
    const {name, age, skills} = props.peeps;
    return <div> <h2>Hello My Name Is {name}, I Am {age} Years Old And My Skills Are {skills}</h2> </div>
}

export default Person;