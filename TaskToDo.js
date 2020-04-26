
import React from 'react';

const TaskToDo = (props) =>
{
return(
    
<h3>{props.title} <p>{props.data}</p> <button onClick={()=>props.delete(props.id)}> X </button></h3>
     
)

}
export default TaskToDo

  
