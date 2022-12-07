import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Orders } from "./order.model";
@Injectable({
    providedIn:'root'
})
export class OrderService{
    private apiserverUrl=environment.apiBaseUrl;
    constructor(private http:HttpClient){}
    
    public getOreders():Observable<Orders[]>{
        return this.http.get<Orders[]>(`${this.apiserverUrl}/api/auth/orders/all`)
    }
    public addOrders(order: Orders):Observable<Orders>{
        return this.http.post<Orders>(`${this.apiserverUrl}/api/auth/orders/add`,order);
    }

    public deleteOrder(orderid:number):Observable<void>{
        return this.http.delete<void>(`${this.apiserverUrl}/api/auth/orders/delete/${orderid}`);
    }

    public getById(id:number):Observable<Orders>{
        return this.http.get<Orders>(`${this.apiserverUrl}/api/auth/orders/id/${id}`)
    }
 


    
}