export class TodoManager{
//   todoId: number;
// default scope is public
// private and protected scopes
  protected task: string;
  constructor(task:string){
    // this is used to access the data from a class
      this.task = task;
  }  
  // the function into a class
  getTask(){
      return this.task;
  }
}




  