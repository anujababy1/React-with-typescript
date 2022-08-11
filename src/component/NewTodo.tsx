import React,{useContext} from "react"
import { useRef } from "react";
import classes from './NewTodo.module.css';
import TodoContext from '../store/todo-context';

const NewTodo:React.FC = () => {

    const context =  useContext(TodoContext)
    const todoRef = useRef<HTMLInputElement>(null);
    const submitHandler =  (event:React.FormEvent) => {
        event.preventDefault();
       const todo = todoRef.current!.value;
       if(todo.trim().length === 0){
            return;
       }
       context.addTodo(todo);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="todo" >Todo</label>
        <input id="todo" ref={todoRef}/>
        <button>ADD</button>
        </form>
    )
}

export default NewTodo; 