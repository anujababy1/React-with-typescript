import Todo from "../modals/todo"
import classes from "./TodoItem.module.css";

const TodoItem:React.FC<{item:Todo,removeItem : (id:number) =>void}> = (props) =>{
    
    const removeElemnt = () =>{
        props.removeItem(props.item.id)
    }
    return (
    <li key={props.item.id} className={classes.item} onClick={removeElemnt}>{props.item.data}</li>
    )
}

export default TodoItem;