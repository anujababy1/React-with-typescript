

class Todo {
    data:string;
    id:number;

    constructor(param:string){
        this.data = param;
        this.id =Math.floor(new Date().valueOf() * Math.random())
    }
}
export default Todo