import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  register() {
    console.log('register');
  }
  cancel() {
   this.cancelRegister.emit(false);
    console.log('cancalled');
  }
}
