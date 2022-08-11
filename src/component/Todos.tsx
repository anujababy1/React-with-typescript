import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from '../component/Todos.module.css';
import TodoContext from '../store/todo-context';
import { useContext } from "react";

const Todos:React.FC = () =>{

    const context =  useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            { context.todos.map((item) =>{
               return <TodoItem item={item} />
            })} 
        </ul>
    )
}

export default Todos;