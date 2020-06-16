import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.registerform = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  reg() {
this.service.Register(this.registerform.value).subscribe(res => {
  console.log(res);
});
  }

}
