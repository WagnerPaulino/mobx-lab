import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './domain/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mobx-lab';

  todoList: Array<Todo> = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.setContacts([{
      descricao: 'comprar leite',
      prazo: new Date()
    }]);
    this.todoList = this.getTodos();
  }

  getTodos() {
    return this.todoService.findAll();
  }

  doSomething() {
    this.todoService.doSomething();
  }

}
