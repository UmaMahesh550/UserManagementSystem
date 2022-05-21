import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { }

  user(){
    return this.http.get(this.url);
   }
 
  users1() :Observable<IUser[]>{
     return this.http.get<IUser[]>("/assets/user.json");
   }
  //   saveUser(data : any){
  //   const httpOptions = { headers:new HttpHeaders({ 'Content-Type':'application/json; charset=UTF-8'})};
  //   data = JSON.stringify(data)
  //   return this.http.post("/assets/user.json",data,httpOptions);
  // }


  saveUser(data : any){
    const httpOptions = { headers:new HttpHeaders({ 'Content-Type':'application/json; charset=UTF-8'})};
    data = JSON.stringify(data)
    return this.http.post("http://localhost:8080/addUser",data,httpOptions);
  }
  users():Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:8080/getAllUsers");
  }
}
