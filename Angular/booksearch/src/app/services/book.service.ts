import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/book.interface';
import { BehaviorSubject, catchError, map, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new BehaviorSubject<ExpectBook[]>([]);
  // private wishList: string[] = [];

  private wishlist$ = new BehaviorSubject<string[]>([]);
  wishListSubject$ = this.wishlist$.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(name: string) {
    return this.http.get<BookRes>(this.baseUrl + name).pipe(
      map((val: BookRes) => {
        return val.items?.map(({ volumeInfo: info }: ItemsEntity) => {
          return {
            bookName: info.title,
            bookPic: info.imageLinks.thumbnail,
            publisher: info.publisher,
            publishDate: info.publishedDate,
            description: info.description,
          } as ExpectBook;
        });
      }),
      tap((val: ExpectBook[]) => {
        this.bookSubject$.next(val);
      }),
      catchError((err) => {
        return of({ bookName: '' });
      })
    );
  }

  addToWishList(book: ExpectBook) {
    // this.wishList = [book.bookName, ...this.wishList];
    this.wishlist$.next([book.bookName, ...this.wishlist$.value]);
  }
}

// book pickture,
// 	book name,
// 	publisher,
// 	publish date,
// 	description.
