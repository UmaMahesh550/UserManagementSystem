export class User{
    id?: number;
    firstname?:string;
    lastname?:string;
    roles?:String;
    age?:number;
    email?:string;
    password?:string;
}

export interface IUser{
    id : number,
    firstname : string,
    lastname : string,
    roles : string,
    age : number,
    email : string,
    password : string,
}