import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Payment } from "./payment.model";

@Injectable({
    providedIn:'root'
})
export class PaymentService{
    private apiserverUrl=environment.apiBaseUrl;
    constructor(private http:HttpClient){}
    
    public getPayments():Observable<Payment[]>{
        return this.http.get<Payment[]>(`${this.apiserverUrl}/api/auth/payments/all`)
    }
    public addPayments(payment: Payment):Observable<Payment>{
        return this.http.post<Payment>(`${this.apiserverUrl}/api/auth/payments/add`,payment);
    } 
}