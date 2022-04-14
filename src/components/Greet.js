import React from 'react';

// function Greet(){
//     return <h1>I LOVE VICTORIA!</h1>
// }

const Greet = (props) =>{
    const {name, children} = props;
    return (
        <div>
         <h1>Hello there, {name}</h1>  
          {children}
        </div>
    )
    
    
}

export default Greet;