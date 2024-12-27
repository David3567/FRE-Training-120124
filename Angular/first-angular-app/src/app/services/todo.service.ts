import { inject, Injectable } from '@angular/core';
import { Todo } from './todo.interfaces';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  // todo$ = new BehaviorSubject(this.todos);
  baseUrl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';
  userPath = 'users';
  // moviesUrl = 'https://api.themoviedb.org/3/discover';

  // private http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  gettodo() {
    return this.http.get<any>(`${this.baseUrl}/${this.userPath}`).pipe(
      map((users: any[]) => {
        return users.map((user) => ({ email: user.email }));
      })
    );
  }
}
