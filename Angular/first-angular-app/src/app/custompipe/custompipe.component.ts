import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css'],
})
export class CustompipeComponent implements OnInit, OnDestroy {
  // variables
  title: string = 'Angular Custom Pipe Example';
  celcius: string = '';
  Fahrenheit: string = '';
  dateMark = new Date();

  obj = {
    name: 'David',
    age: 33,
  };

  // lifecycle
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // methods

  track() {
    return 0;
  }
}
