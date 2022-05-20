export class User{
    id?: number;
    name?:string;
    status?:number;
    age?:number;
    email?:string;
    password?:string;
}

export interface IUser{
    id : number,
    name : string,
    status : number,
    age : number,
    email : string,
    password : string,
}