import axios from 'axios';
//for local access this url
// const baseURL='http://localhost:5000';
//After deployed 
const baseURL='https://todo-backend-app-biwu.onrender.com'

const getAll=(setnewTodo)=>{
    axios
    .get(baseURL)
    .then((data)=>{
            setnewTodo(data.data)
    })
}

const addTodo=(title,desc,setnewdesc,settitle,setnewTodo)=>{
    axios
    .post(`${baseURL}/save`,{title,desc})
    .then((data)=>{
        console.log(data);
        getAll(setnewTodo);
        settitle("");
        setnewdesc("");
        
    })
}

const updateTodo=(title,desc,settitle,setdesc,setnewTodo,setTodoId,todoId,setUpdate)=>{
    axios
    .post(`${baseURL}/update`,{_id:todoId,title,desc})
    .then((data)=>{
        settitle("")
        setdesc("")
        setUpdate(false);
        getAll(setnewTodo);
    })
}
const deleteToDo=(_id,setnewTodo)=>{
    axios
    .post(`${baseURL}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAll(setnewTodo);
    })
}

export {getAll,addTodo,updateTodo,deleteToDo};

