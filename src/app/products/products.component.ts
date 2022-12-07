import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../order.model';
import { OrderService } from '../order.service';
import { Payment } from '../payment.model';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Products[]=[];
 // public k:number=0;
  public p: Products[]=[];
  productbyId!:Products;
  pay!:Payment;
  public category="";

  constructor(private productService:ProductService,private router: Router
    ,private orderService:OrderService){}
ngOnInit(): void {
    this.getProducts();
   // this.getByCategory(this.category );
}
  public getProducts():void{
    this.productService.getProducts().subscribe(
      (response: Products[])=>{
        this.products= response;
        
      }
    )
  }

  AddToOrder(Proid:number){
  // this.k++;
    console.log("order");
   this.productService.getById(Proid).subscribe(
      (response: Products)=>{
        // console.log(response)
        this.productbyId=response;
        const order=new Orders(5,this.pay,this.productbyId);  
    
    
    this.orderService.addOrders(order).subscribe({

   });
      }
    );
    // user:User=new User(1,"r",'a','r','o','a','6');
    //const pay:Payment= new Payment(1,20,'r',500,undefined,user);
 
  }

  public searchProducts(key:string):void{
    const result: Products[]=[];
    for(const product of this.products){
      if(product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        result.push(product);
      }
    }
    this.products=result;
    if(result.length ===0 || !key){
      this.getProducts();
    }
  }


  

 


}
