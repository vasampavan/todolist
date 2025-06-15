import { use, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './ToDoList.css';
export default function ToDoList(){
    let [todos,setTodos]=useState([{task: "sample",id:uuidv4(),isDone:false}]);
    let [newTodo,setnewTodo]=useState("");
    let addNewTask=()=>{
        if(newTodo===""){
            alert("Enter Some Task!");
        }
        else{
        setTodos((prevtodos)=>{
            return [...prevtodos,{task:newTodo,id:uuidv4(),isDone:false}]
            
        });
        setnewTodo("");
        }
        
    }
    let deleteTodo=(id)=>{
        let newtodos=todos.filter((todo)=>todo.id!=id);
        setTodos(newtodos);
    }
    let deleteallTodo=()=>{
        setTodos([]);
    }

    let updateTaskValue=(event)=>{
        setnewTodo(event.target.value);
    }
    let markallasdone=()=>{
         setTodos(
            todos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
        }));
    }
     let markasdone=(id)=>{
         setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id===id){
            return{
                ...todo,
                isDone:true,
            };
        }else{
                return todo;
            }
        
        }));
    }
    return(
        <div>
            <input type="text" value={newTodo} placeholder="add a task" onChange={updateTaskValue}/>
            <br />
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br />
            <hr />  
            <h3>Tasks to do</h3>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li key={todo.id}>
                            <span className="todo"  style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                             &nbsp;&nbsp;&nbsp;
                             <button onClick={()=>markasdone(todo.id)}>mark as done</button>
                             
                             </li>
                           

                    })
                }
            </ul>
            <br />
            
            <button onClick={()=>deleteallTodo()}>Delete all</button>
            &nbsp; 
            <button onClick={markallasdone}>make All as done</button>
        </div>
    );
}  