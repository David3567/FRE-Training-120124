import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-title-plus',
  standalone: false,

  templateUrl: './title-plus.component.html',
  styleUrl: './title-plus.component.css',
})
export class TitlePlusComponent {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todoService.subject$.subscribe((val) => {
      console.log('title plus component: ', val);
    });
  }
}
