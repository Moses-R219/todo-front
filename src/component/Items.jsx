import React from 'react'
import Lists from './lists';
import { addTodo,updateTodo,deleteToDo } from '../utils/HandleApi';

const Items=({
  updateMode,
  handledelete,
  complete,
  setComplete,
  setdesc,
  settitle,
  newtodo,
  title,
  desc,
  setnewTodo,
  update,
  setUpdate,
  todoId,
  setTodoId})=> {
  return (
    <div>    
        <h1>Todo</h1>
      <div className="container">
        <div className="inputs">
          <div className="input-item">
            <label>Title</label>
            <input 
            type="text"
            placeholder="title" 
            onChange={e=>settitle(e.target.value)} 
            value={title}
            />
          </div>
          <div className="input-item">
            <label>Desc</label>
            <input 
            type="text" 
            placeholder="description"  
            onChange={e=>setdesc(e.target.value)}
            value={desc}/>
          </div>
          <div className="input-item">
            <button className="btn" 
            onClick={
              update?()=>updateTodo(title,desc,settitle,setdesc,setnewTodo,setTodoId,todoId,setUpdate)
              :()=>addTodo(title,desc,settitle,setdesc,setnewTodo)}>{update?"Update":"Add"}</button>
          </div>
        </div>
        <div className="btns">
          <button
            className={`sec ${complete === false && "active"}`}
            onClick={() => setComplete(false)}
          >
            Todo
          </button>
          <button
            className={`sec ${complete === true && "active"}`}
            onClick={() => setComplete(true)}
          >
            Completed
          </button>
        </div>
          <Lists 
          updateMode={updateMode} 
          deleteToDo={deleteToDo}
          newtodo={newtodo} 
          setnewTodo={setnewTodo}
          />
        </div>
        </div>

  )
}

export default Items