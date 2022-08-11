import Todo from "../modals/todo"
import classes from "./TodoItem.module.css";
import TodoContext from '../store/todo-context';
import { useContext } from "react";

const TodoItem:React.FC<{item:Todo}> = (props) =>{
    const context =  useContext(TodoContext)
    const removeElemnt = () =>{
        context.removeTodo(props.item.id)
    }
    return (
    <li key={props.item.id} className={classes.item} onClick={removeElemnt}>{props.item.data}</li>
    )
}

export default TodoItem;