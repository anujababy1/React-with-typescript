import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Todo from './modals/todo';
import NewTodo from './component/NewTodo';


function App() {

  const [todoList,setTodoList] = useState<Todo[]>([]);
  // const todoList = [
  //   new Todo('Learn React'),
  //   new Todo('learn type script')
  // ];

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

 

  return (
    <div >
      <NewTodo addTodoList={addToListHandler}/>
      <Todos items={todoList} removeItem={removeItemHandler}/>
    </div>
  );
}

export default App;
