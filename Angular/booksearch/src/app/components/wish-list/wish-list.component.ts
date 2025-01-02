import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-wish-list',
  standalone: false,

  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  wishList: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.bookService.wishListSubject$.subscribe((wishList) => {
      this.wishList = wishList;
    });
  }
}
