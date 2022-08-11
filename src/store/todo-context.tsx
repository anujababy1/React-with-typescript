
import React,{useState} from "react";
import Todo from '../modals/todo';

type cntxtType ={
    todos:Todo[],
    addTodo : (data:string) => void,
    removeTodo :(id:number) => void
}
const TodoContext = React.createContext<cntxtType>({
    todos:[],
    addTodo:() =>{},
    removeTodo : () =>{}
}) 


export const TodoContextProvider:React.FC<{children: React.ReactNode}> = (props) =>{

    const [todoList,setTodoList] = useState<Todo[]>([]);

    const addToListHandler = (text:string) =>{
        const obje = new Todo(text);
        setTodoList(
         (prevState)=>{
           return [...prevState,obje];
         }
        )
     }

     const removeItemHandler = (id:number) =>{
        setTodoList(
          (prevState)=>{
            const newArray = [...prevState];
            const index = newArray.findIndex ( (item)=>{
              return item.id === id
            });
             newArray.splice(index,1);
            return newArray;
          }
        )
    }

    const object:cntxtType = {
        todos:todoList,
        addTodo : addToListHandler,
        removeTodo :removeItemHandler
    }

    return (
        <TodoContext.Provider value={object}>
            {props.children}
        </TodoContext.Provider>
    )


}

export default TodoContext;