import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { ChangeTitleCardComponent } from './change-title-card/change-title-card.component';
import { MainComponent } from './lifecycle/main/main.component';
import { GrandChildComponent } from './lifecycle/grandchild/grandchild.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { MyPipePipe } from './custompipe/my-pipe.pipe';
import { TestPipe } from './custompipe/test.pipe';
import { TodoPipePipe } from './todo/todo-pipe.pipe';
import { RxjsIntoComponent } from './rxjs-into/rxjs-into.component';
import { TitlePlusComponent } from './title-plus/title-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    ChangeTitleComponent,
    ChangeTitleCardComponent,
    MainComponent,
    GrandChildComponent,
    ChildComponent,
    CustompipeComponent,
    MyPipePipe,
    TestPipe,
    TodoPipePipe,
    RxjsIntoComponent,
    TitlePlusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
