import React, { useRef, useState,useEffect } from 'react';
import TodoItem from './TodoItem';
import "../css/todo.css";

const Todo = () => {
  let[todolist,setTodoList]=useState([]);
  let[todoindex,setTodoIndex]=useState(-1);
  const inputRef=useRef(null);

  const add=()=>{
     setTodoList([...todolist,inputRef.current.value]);
     inputRef.current.value="";
  }

  useEffect(()=>{
    setTimeout(()=>{
      console.log(todolist);
      localStorage.setItem("todos",JSON.stringify(todolist));        
    },100)   ;
  },[todolist]);

  useEffect(()=>{
    setTodoList(JSON.parse(localStorage.getItem("todos")));      
  },[]);

  const update=()=>{
     todolist[todoindex]=inputRef.current.value;
     setTodoList([...todolist]);
     inputRef.current.value="";
     setTodoIndex(-1);
  }

  return (
    <div className='todo'>
    <div className='todo-header'>Todo List</div>
     <div className='todo-add'>
       <input ref={inputRef}type="text"  className='todo-input'/>
       {todoindex<0 ? <div className='add-btn' onClick={()=>{add()}}>Add</div>: <div className='add-btn' onClick={()=>{update()}}>Edit</div>}      
      </div> 
      <div>
         {
           todolist.map((items,index)=>{
              return(
                 <TodoItem key={index}data={items} id={index} fn={setTodoList} input={inputRef} list={todolist} fn2={setTodoIndex}/>
              );
           })
         }

      </div> 

     
           
    </div>
  )
}

export default Todo;
