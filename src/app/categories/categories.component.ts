import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from '../order.model';
import { OrderService } from '../order.service';
import { Payment } from '../payment.model';

import { Products } from '../product.model';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  productbyId!:Products;
  pay!:Payment;
  category:string='';
  p: Products[]=[];
 // public kk:number=this.productsComponent.k;
  constructor(private productsComponent:ProductsComponent,private orderService: OrderService,private router: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
   // console.log(this.kk);
    this.category=this.router.snapshot.params?.['category'];
    console.log(this.category);
    this.getByCategory(this.category);
  }

  public getByCategory(category: string):void{
    this.productService.getByCategory(this.category).subscribe(
      (res: Products[])=>{
        this.p= res;

      }
    )
  }

  public searchProducts(key:string):void{
    const result: Products[]=[];
    for(const product of this.p){
      if(product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        result.push(product);
      }
    }
    this.p=result;
    if(result.length ===0 || !key){
      this.getByCategory(this.category);
    }
  }

  AddToOrder(Proid:number){
   //this.kk++;
     console.log("order");
    this.productService.getById(Proid).subscribe(
       (response: Products)=>{
         console.log(response)
         this.productbyId=response;
          
         const order=new Orders(5,this.pay,this.productbyId);  
     
     
     this.orderService.addOrders(order).subscribe({
 
    });
       }
     ); 
     //console.log(this.kk);
     // user:User=new User(1,"r",'a','r','o','a','6');
     //const pay:Payment= new Payment(1,20,'r',500,undefined,user);
  
   }
 


}
