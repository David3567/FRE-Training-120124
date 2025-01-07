import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  obj = {
    c: 'jump',
    a: 'jojo',
    // b: '23',
    // d: '6',
  };
  counter = 0;
  // arr = [{a: 1}, {b: 2}]
  subscription!: Subscription;
  todos: any;

  todos$ !: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    // this.subscription = this.getTodos().subscribe(data => {
    //   this.todos = data;
    // })
    this.todos$ = this.getTodos();
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }


  sorting(a: KeyValue<string,string>, b: KeyValue<string,string>): number {
    console.log(a.key);
    console.log(b.key);
    console.log(a.key.localeCompare(b.key))
    // return a.key.localeCompare(b.key);
    return a.key.localeCompare(b.key);
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}
