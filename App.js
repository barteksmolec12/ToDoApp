import React from 'react';
import logo from './logo.svg';
import './App.css';
import Taski from './Taski'
import TaskToDo from './TaskToDo'

class App extends React.Component
{
  state = {
    taski: [ 
]
    
      ,
    defaultTask:"",
    defaultDate:"",
    defaultID:"",
    defaultImportant:"",
    dateNow:"",
    status:true

    
    
  }
 
  

  handleDeleteElement = (id) =>
  {
   
    console.log(id)
   var array = [...this.state.taski]
    const index=this.state.taski.filter(i=> i.id===id).map(n=>this.state.taski.indexOf(n))
  
    
    if(index>-1)
    {
      array.splice(index,1)
      this.setState({taski:array});

    }
  
  }

  handleMoveTask = (id) =>
  {
    
    let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var minuts=today.getMinutes();
var hours=today.getHours();
var sec=today.getSeconds();

today=dd+`.`+mm+`.`+yyyy+`  godz:  `+hours+`.`+minuts+`:`+sec;
    console.log("Move task")
    const taskii=Array.from(this.state.taski)
     taskii.forEach(t=>
      {
        if(t.id===id)
        {
          t.active=false
          t.finishDate=today
        }
      }
    )

    this.setState({taski:taskii})
    // this.setState(taskiDO:)
    

  }
 
   

  handleChange = (e) =>
{
  console.log("CHANGE")
   this.setState({defaultID:this.state.taski.length})
  const type = e.target.type;
  
    if(type==="text")
  {
    const value = e.target.value;
    this.setState({defaultTask:value})
  }
    if(type==="date")
  
  {
    const value = e.target.value;
    this.setState({defaultDate:value})
  

  }
    if(type==="checkbox")
    {
      const value=e.target.checked;
      if(value===true)
      {
        console.log("ZAZNACZONO")
        this.setState({defaultImportant:value})
      }
      else
      {
        console.log("nie zaznaczone")
        this.setState({defaultImportant:value})
      }
      
    }
 
 
}
handleClick = () =>

{
  console.log("handleClick")

 this.setState({taski:this.state.taski.concat({id:this.state.defaultID,text:this.state.defaultTask,date:this.state.defaultDate,important: this.state.defaultImportant, active: this.state.status, finishDate: null})})

 this.setState({defaultTask:""})
 this.setState({defaultDate:""})


}

  render()
  {
    
    console.log("render")
    
    // console.log(this.state.taski)
    const taskiActive=this.state.taski.filter(t=>t.active===true).map(t=><Taski key={t.id} id={t.id}title={t.text} data={t.date} move={this.handleMoveTask}important={t.important} delete={this.handleDeleteElement} ></Taski>)
    const taskiFalse=this.state.taski.filter(t=>t.active===false).map(t=><TaskToDo key={t.id} id={t.id}title={t.text} data={t.finishDate} delete={this.handleDeleteElement} ></TaskToDo>)
    
    
    

   
    return(
     <div>
       
         <input type="text" id="task" name="task" placeholder="dodaj zadanie" onChange={this.handleChange} value={this.state.defaultTask}></input>
         <input type="checkbox" id="check" name="check" onChange={this.handleChange}></input><label>Piorytet</label>
      <br></br>
         <label>Do kiedy zrobić</label>   <input type="date" id="birthday" name="birthday" value={this.state.defaultDate} onChange={this.handleChange}></input>
        <br></br>
        <input type="submit" onClick={this.handleClick}value="DODAJ"/>
    <h2>Zadania do zrobienia <em>{taskiActive.length}</em> </h2>
        
        
        {taskiActive} 

    <h2>Zadanie zrobione <em>{taskiFalse.length}</em></h2>
    <div className="linia">{taskiFalse}</div>
    
        </div>

      
    )
  }

}

export default App;
