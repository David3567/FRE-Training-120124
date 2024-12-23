import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'first-angular-app';
  form!: FormGroup;

  firstNameTmp = 0;

  get firstname() {
    return this.form.get('firstname') as FormControl;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      gender: [],
      isMarried: [],
      address: this.fb.group({
        city: [],
        street: [],
        pincode: [],
        country: [],
      }),
    });
    console.log('this is on init~~~~~~~~');
  }

  onSubmit() {
    this.setFirstName();
  }

  setFirstName() {
    this.firstNameTmp++;
    this.firstname.setValue(this.firstNameTmp);
    console.log(this.form.value);
  }
}
