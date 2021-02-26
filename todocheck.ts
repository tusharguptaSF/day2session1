import { TodoManager } from "./todoManager";

export class Todocheck extends TodoManager{
    static todocount:number;
    date:string = "";
    constructor(date:string){
        super("check");
        this.date = date
        
    }
    getTaskWithDate(){
        return `task = ${this.task} date = ${this.date}`;
    }
}