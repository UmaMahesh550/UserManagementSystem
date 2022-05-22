import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  user: User = new User();

  constructor(private userService:UserService) { }

  public k=false;
  @Output() newItemEvent = new EventEmitter();
  public email1:any;

  ngOnInit(): void {
  }
  delForm=new FormGroup({
    id:new FormControl('',[Validators.required])
  })

  deleteUser(data:any){
    console.warn(data);
    this.userService.deleteUser(data);
    console.warn(data);
  }

}
