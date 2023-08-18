import { useEffect, useState } from "react";
import "./App.css";
import Items from "./component/Items";
import { getAll } from "./utils/HandleApi";

function App() {
  const [complete, setComplete] = useState(false);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [newtodo, setnewTodo] = useState([]);
  const [update,setUpdate]=useState(false);
  const [todoId,setTodoId]=useState("");
  
  
  // const AddTodo=()=>{
  //   let newitem={
  //     title:title,
  //     desc:desc,
  //   }

  //   let updated=[...newtodo]
  //   updated.push(newitem);
  //   setnewTodo(updated);
  //   localStorage.setItem('todo',JSON.stringify(updated));
  // }
const handledelete=(index)=>{
    const removeitem=[...newtodo];
    removeitem.splice(index)
    localStorage.setItem('todo',JSON.stringify(removeitem));
    setnewTodo(removeitem);
}

const updateMode=(_id,title,desc)=>{
  setUpdate(true);
  settitle(title);
  setdesc(desc);
  setTodoId(_id);
}
  // useEffect(()=>{
  //   let localsave=JSON.parse(localStorage.getItem('todo'))
  //   if(localsave)
  //       setTodo(localsave)
  // },[title])

  useEffect(()=>{
    getAll(setnewTodo);
  },[])

  return (
    <div className="App">
      <Items 
      updateMode={updateMode}
      handledelete={handledelete} 
      complete={complete}
      title={title}
      desc={desc}
      newtodo={newtodo}
      todoId={todoId}
      update={update}
      settitle={settitle} 
      setdesc={setdesc}
      setComplete={setComplete} 
      setnewTodo={setnewTodo}
      setUpdate={setUpdate}
      setTodoId={setTodoId}
      />
    </div>
    


  );
}

export default App;
