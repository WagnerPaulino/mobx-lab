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

  insertInitial() {
    this.setContacts([{
      descricao: 'comprar leite',
      prazo: new Date()
    }]);
  }

  @action
  setContacts(todos: Todo[]) {
    console.log(todos);
    this.todoList = todos;
  }

  @computed
  get printSomething() {
    console.log(this.todoList);
    return this.todoList;
  }

}
