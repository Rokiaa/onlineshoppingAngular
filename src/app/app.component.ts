import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Products } from './product.model';
import {  ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private productService:ProductService,private router: Router){}
 
ngOnInit(): void {
   
}
 


}

