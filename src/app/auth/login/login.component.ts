import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  token;
  constructor(private service: ServiceService) {
    if ( localStorage.getItem('token')) {
      this.token =  localStorage.getItem('token');
    }
   }
  ngOnInit() {
    this.LoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  log() {
    this.service.Login(this.LoginForm.value).subscribe(res => {
      console.log(res);
      this.token = res ;
      localStorage.setItem('token', this.token.token);
    });
  }
}
