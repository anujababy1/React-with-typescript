import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from '../component/Todos.module.css';

const Todos:React.FC<{items:Todo[],removeItem: (id:number) =>void}> = (props) =>{

    
    return (
        <ul className={classes.todos}>
            { props.items.map( (item) =>{
               return <TodoItem item={item} removeItem={props.removeItem}/>
            })} 
        </ul>
    )
}

export default Todos;