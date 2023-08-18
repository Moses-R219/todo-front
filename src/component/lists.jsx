import React from 'react'
import { TiDelete } from "react-icons/ti";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const Lists = ({newtodo,setnewTodo,updateMode,deleteToDo}) => {
  return (
    <div>
        {
          newtodo.map((item)=>{
              return(
                <div className="list" key={item._id}>
                <div className="lists" >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                 </div>
            <div className="action">
              <TiDelete onClick={()=>deleteToDo(item._id,setnewTodo)} className="icon" />
              <AiFillCheckCircle className="check" />
              <AiOutlineEdit className='edit' onClick={()=>updateMode(item._id,item.title,item.desc)}/>
              </div>
              </div>
              )
            })
          }
    </div>
  )
}

export default Lists