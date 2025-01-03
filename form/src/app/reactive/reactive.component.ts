import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit{

  contactForm!: FormGroup;
  // @Input() initialInfo!: any;
  @Input() initialInfo: any = undefined;
  @Output() data = new EventEmitter();

  constructor(private fb: FormBuilder){
   
  }

  ngOnInit() {
    // this.contactForm = new FormGroup({
    //   name: new FormControl('Joe'),
    //   email: new FormControl(),
    // })
    this.contactForm = this.fb.group({
      name: [this.initialInfo.name],
      email: [this.initialInfo.email]
    })
  }

  onSubmit(){

    console.log(this.contactForm.value)
    this.data.emit(this.contactForm.value);

  }

}
