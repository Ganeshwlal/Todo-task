import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos =[
    {
      sl_no: 1,
      work:'food',
      done:false
    },
    {
      sl_no: 2,
      work:'game',
      done:true
    },
    {
      sl_no: 3,
      work:'cleaning',
      done:false
    },
    {
      sl_no: 4,
      work:'sleep',
      done:true
    }
  ];
done: any;
work: any;
newTodo: any;
// deleteTodo: any;

addTodo(newTodoLabel: any){
  var newTodo={
    sl_no: 4,
      work:newTodoLabel,
      done:true
  };
  this.todos.push(newTodo)
}

deleteTodo(todo:any){
  this.todos = this.todos.filter(t=>t.work !== todo.work)
}
}
