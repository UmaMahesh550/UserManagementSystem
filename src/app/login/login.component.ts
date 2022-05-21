import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router,private userService:UserService) { }

  public k=false;
  @Output() newItemEvent = new EventEmitter();
  public email1:any;

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  })
  login(data:any){
    console.warn(data)
    if(data.email==data.password)
    {
      // this.k=true;
      // this.email1=data.email;
      // this.newItemEvent.emit(this.k);
      this.router.navigate(['userlist'])
    }
    else{
      alert("Not Matched")
    }
  }
  register()
  {
    this.router.navigate(['register'])
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
