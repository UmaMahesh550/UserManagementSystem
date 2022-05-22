import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: User = new User();

  constructor(private router:Router,private userService:UserService) { }
  
  public k=false;
  @Output() newItemEvent = new EventEmitter();
  public email1:any;

  ngOnInit(): void {
  }
  addForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)]),
    firstname : new FormControl(),
    lastname : new FormControl(),
    age : new FormControl(),
    role : new FormControl(),
  })

  addUser(data:any){
    console.warn(data);
    if(data.password==data.confirmpassword)
    {
      console.warn(data);
      this.userService.saveUser(data).subscribe((result)=>{
        console.warn(result);
      })
      // this.router.navigate(['success']);
    }
    else
    {
      alert("Enter valid information");
      // this.router.navigate(['adduser']);
    }
   }
   get email(){
    return this.addForm.get('email')
  }
  get confirmpassword(){
    return this.addForm.get('confirmpassword')
  }
  get password(){
    return this.addForm.get('password')
  }


}
