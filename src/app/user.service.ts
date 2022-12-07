import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Orders } from "./order.model";
import { User } from "./user.model";
@Injectable({
    providedIn:'root'
})
export class UserService{
    private apiserverUrl=environment.apiBaseUrl;
    user:User[] = [];
    constructor(private http:HttpClient){}
    
    public getUsers():Observable<User[]>{
        return this.http.get<User[]>(`${this.apiserverUrl}/users/all`)
    }
    public addUser(user: User):Observable<User>{
        return this.http.post<User>(`${this.apiserverUrl}/users/add`,user);
    }

    public deleteUser(userid:number):Observable<void>{
        return this.http.delete<void>(`${this.apiserverUrl}/users/delete/${userid}`);
    }
    public getByEmail(email:string):Observable<User[]>{
        return this.http.get<User[]>(`${this.apiserverUrl}/users/email/${email}`)
    }
   
    // public  loginUser():Observable<User>{
    //     return this.http.get<User>(`${this.apiserverUrl}/users/user`)
    // }
    // loginUser(user:User):Observable<object>{
    //     return this.http.get(`${this.apiserverUrl}/users/user`);
    // }
   
    public loginUser(user:User):Observable<any>{
        return this.http.post<any>(
            "http://localhost:8080/api/auth/signin",
            '{"usernameOrEmail":"'+user.username+'", "password":"'+user.password+'"}',
            {
                headers:new HttpHeaders({"Content-Type":"application/json"})
            }
        )
    }
   
    // public getByCategory(cat:string):Observable<Products[]>{
    //     return this.http.get<Products[]>(`${this.apiserverUrl}/products/category/${cat}`)
    // }
    

    
}