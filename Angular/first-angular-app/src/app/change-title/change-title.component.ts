import { Component } from '@angular/core';

@Component({
  selector: 'app-change-title',
  standalone: false,

  templateUrl: './change-title.component.html',
  styleUrl: './change-title.component.css',
})
export class ChangeTitleComponent {
  // btncolor = ['red', 'green', ...]

  cards: Card[] = [
    {
      id: 3,
      btncolor: 'red',
      title:
        'Our ProductService returns the hard-coded products when getProduct method invoked',
      context:
        'Our ProductService returns the hard-coded products when getProduct method invoked,Our ProductService returns the hard-coded products when getProduct method invoked',
    },
    {
      id: 4,
      btncolor: 'black',
      title:
        'Our ProductService returns the hard-coded products when getProduct method invoked',
      context:
        'Our ProductService returns the hard-coded products when getProduct method invoked,Our ProductService returns the hard-coded products when getProduct method invoked',
    },
    {
      id: 6,
      btncolor: 'green',
      title:
        'Our ProductService returns the hard-coded products when getProduct method invoked',
      context:
        'Our ProductService returns the hard-coded products when getProduct method invoked,Our ProductService returns the hard-coded products when getProduct method invoked',
    },
    {
      id: 9,
      btncolor: 'blue',
      title:
        'Our ProductService returns the hard-coded products when getProduct method invoked',
      context:
        'Our ProductService returns the hard-coded products when getProduct method invoked,Our ProductService returns the hard-coded products when getProduct method invoked',
    },
  ];

  titlecolor = '';

  handleclick(color: string) {
    this.titlecolor = color;
  }
}

export interface Card {
  id: number;
  btncolor: string;
  title: string;
  context: string;
}
