import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../services/todo.interfaces';

@Component({
  selector: 'app-todo-item',
  standalone: false,

  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() todoidRef = new EventEmitter();

  constructor() {
    console.log('constructor: ', this.todo);
  }

  ngOnInit(): void {
    console.log('onInit: ', this.todo);
  }

  delectTodo() {
    this.todoidRef.emit(this.todo.id);
  }
}
