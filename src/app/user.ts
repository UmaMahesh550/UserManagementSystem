export class User{
    id?: number;
    firstname?:string;
    lastname?:string;
    status?:number;
    age?:number;
    email?:string;
    password?:string;
}

export interface IUser{
    id : number,
    firstname : string,
    lastname : string,
    status : number,
    age : number,
    email : string,
    password : string,
}