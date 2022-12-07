import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "./product.model";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})

export class ProductService{
    private apiserverUrl=environment.apiBaseUrl;
   

    constructor(private http:HttpClient){}
   
    public getProducts():Observable<Products[]>{
        return this.http.get<Products[]>(`${this.apiserverUrl}/api/auth/products/all`);
    }
    public getById(id:number):Observable<Products>{
        return this.http.get<Products>(`${this.apiserverUrl}/api/auth/products/id/${id}`)
    }
    public getByCategory(cat:string):Observable<Products[]>{
        return this.http.get<Products[]>(`${this.apiserverUrl}/api/auth/products/category/${cat}`)
    }
    public addProduct(product: Products):Observable<Products>{
        return this.http.post<Products>(`${this.apiserverUrl}/api/auth/products/add`,product);
    }
    public deleteProduct(productid:number):Observable<void>{
        return this.http.delete<void>(`${this.apiserverUrl}/api/auth/products/delete/${productid}`);
    }
    public updateProduct(product: Products): Observable<Products> {
        return this.http.put<Products>(`${this.apiserverUrl}/api/auth/products/update`,product);
      }

    
}

// let authorizationData = 'Basic ' + btoa('user' + ':' + 'user123');

// const headerOptions = {
//     headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'Authorization': authorizationData
//     })
// };
// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'Basic ' + btoa('"user":"user123"')
//     })
//   };