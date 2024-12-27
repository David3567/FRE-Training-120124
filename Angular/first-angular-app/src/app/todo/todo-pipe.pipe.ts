import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../services/todo.interfaces';

@Pipe({
  name: 'todoPipe',
  standalone: false,
})
export class TodoPipePipe implements PipeTransform {
  transform(todos: Todo[], keyword: string): Todo[] {
    return todos.filter((ele) => {
      return ele.title.includes(keyword);
    });
  }

  // transform(context: string, length: string): string {
  //   return context.length > +length ? context.substring(0, +length) + '...' : context;
  // }
}

// {{ 'target' | cutlength: 3}} // 'tar...'
