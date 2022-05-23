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

  loginForm:FormGroup|any;

  user: User = new User();

  constructor(private router: Router,private userService:UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$',),]),
      password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
   }

  public k=false;
  @Output() newItemEvent = new EventEmitter();
  public email1:any;

  ngOnInit(): void {
  }
  
  login(data:any){
    console.warn(data)
    if(data.email=="gorsaumamahesh@gmail.com" && data.password=="Mahesh"||data.email=="akshatashivaji@gmail.com" && data.password=="Akshata"||data.email=="srirampalivela@gmail.com" && data.password=="Sriram")
    {
      // this.k=true;
      // this.email1=data.email;
      // this.newItemEvent.emit(this.k);
      this.router.navigate(['options'])
    }
    else{
      alert("Enter Valid Email and Password")
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
