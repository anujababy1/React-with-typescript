import React from "react"
import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo:React.FC<{addTodoList : (parm:string) => void}> = (props) => {
    const todoRef = useRef<HTMLInputElement>(null);
    const submitHandler =  (event:React.FormEvent) => {
        event.preventDefault();
        
       const todo = todoRef.current!.value;

       if(todo.trim().length === 0){
            return;
       }

       props.addTodoList(todo);
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