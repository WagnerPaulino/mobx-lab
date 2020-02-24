import { Todo } from './domain/todo';
import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  @observable
  todoList: Todo[] = [];

  constructor() { }

  findAll(): Todo[] {
    return Object.assign([], this.todoList);
  }

  @action
  setContacts(todos: Todo[]) {
    console.log(todos);
    this.todoList = todos;
  }

  doSomething() {
    const todos = this.todoList;
    todos.push(todos[0]);
    this.todoList = todos;
    // this.setContacts(todos);
  }

  @computed
  get printSomething() {
    console.log(this.todoList);
    return this.todoList;
  }

}
