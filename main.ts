// const todoManager = require('./todoManager.ts');
import {TodoManager} from './todoManager';
import {Todocheck} from './todocheck';
// let todos = new TodoManager("Js Session");
// console.log(`task =${todos.getTask()}` );
// console.log(`task 2 = ${todos.task}`);

let todocheck = new Todocheck("12/12/2020");
console.log(` ${todocheck.getTaskWithDate()}`);
Todocheck.todocount=10;
console.log(Todocheck.todocount);



