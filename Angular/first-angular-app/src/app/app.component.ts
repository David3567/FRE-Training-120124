import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ` <h1>hello world</h1> `,
  standalone: false,
  styleUrl: './app.component.css',
  // styles: ['']
})
export class AppComponent {
  title = 'first-angular-app';
  counter = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.subject$.next('1');
    this.todoService.subject$.next('2');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.subject$.subscribe((val) => {
    //   console.log('subscribe1: ', val);
    // });

    // this.subject$.next('1');
    // this.subject$.next('2');

    // this.subject$.subscribe((val) => {
    //   console.log('subscribe2: ', val);
    // });

    // this.subject$.next('3');
    // this.subject$.next('4');

    // this.subject$.complete();
  }

  emitData() {
    this.todoService.subject$.next(this.counter++);
  }
}
