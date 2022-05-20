import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)])
  })

  register(data:any){
   console.warn(this.registerForm.value);
   if(data.password==data.confirmpassword)
   {
     
   }
   else
   {
     this.router.navigate(['register']);
   }
  }

}
