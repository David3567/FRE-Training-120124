import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Route } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { WishListPageComponent } from './components/wish-list-page/wish-list-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './services/book.service';

export const BaseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    BookItemComponent,
    WishListComponent,
    HomeComponent,
    WishListPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    // BookService,
    { provide: BookService, useClass: BookService },
    {
      provide: BaseUrl,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=',
    },
    // { provide: 'hello', useFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
