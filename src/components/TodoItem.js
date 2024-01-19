import React from 'react';
import "../css/todoItem.css";

const TodoItem = (props) => {
   const{data,id,fn,input,list,fn2}=props;

   const delitem=(data)=>{
      let info=JSON.parse(localStorage.getItem("todos"));
          info=info.filter((tasks)=>tasks !=data);
          fn(info);
   }
   const edititem=(id)=>{
    input.current.value=list[id];
    fn2(id);      
   }

  return (
    <div className='todoitems'>
       <div className='todoitems-text'>
          {id+1} .{data}  
           
          <i className="fa-regular fa-trash-can fa-pull-right" onClick={()=>{delitem(data)}}></i> 
          <i className="fa-regular fa-pen-to-square fa-pull-right" onClick={()=>{edititem(id)}}></i>
       </div>         
    </div>
  );
}

export default TodoItem;
