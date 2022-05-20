import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService) { }

  public users:IUser[]=[];

  ngOnInit(): void {
    this.userService.users().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    });
  }

}
