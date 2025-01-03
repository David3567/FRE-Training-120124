import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  formdata: {name: string, email: string}  = {name: "Mike", email: "12345@gmail.com"}
  handleData(data: any){
    this.formdata = data
  }
}
