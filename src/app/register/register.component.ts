import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor( private router: Router,private userService:UserService, private httpclient:HttpClient) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)]),
    firstname : new FormControl(),
    lastname : new FormControl(),
    age : new FormControl(),
    role : new FormControl(),
  })

  register(data:any){
   console.warn(data);
   if(data.password==data.confirmpassword)
   {
     console.warn(data);
     this.userService.saveUser(data).subscribe((result)=>{
       console.warn(result);
     })
     this.router.navigate(['success']);
   }
   else
   {
     alert("Enter valid information");
     this.router.navigate(['register']);
   }
  }

  login()
  {
    this.router.navigate(['login'])
  }

  get email(){
    return this.registerForm.get('email')
  }
  get confirmpassword(){
    return this.registerForm.get('confirmpassword')
  }
  get password(){
    return this.registerForm.get('password')
  }

  addUser(){
    console.warn(this.user);
  }
}
