import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  user = {
    name: 'a',
    email: 'a',
    phone: 'a'
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
