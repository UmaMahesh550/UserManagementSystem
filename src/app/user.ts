export class User{
    id?: number;
    firstname?:string;
    lastname?:string;
    role?:String;
    age?:number;
    email?:string;
    password?:string;
}

export interface IUser{
    id : number,
    firstname : string,
    lastname : string,
    role : string,
    age : number,
    email : string,
    password : string,
}