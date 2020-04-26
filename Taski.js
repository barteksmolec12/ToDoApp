import React from 'react';


const Taski = (props) =>
(
    <React.Fragment>
        
        <h3 style={props.important ? {color:"red"}:{color:"black"}}>{props.title} <p>{props.data}</p> <button id={props.id} onClick={()=>props.move(props.id)}>  Zadanie zrobione</button> <button id={props.id} onClick={()=>props.delete(props.id)}> X</button> </h3>

       </React.Fragment>

)
export default Taski

  
