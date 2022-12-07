import { Component, OnInit } from '@angular/core';
import { Orders } from '../order.model';
import { OrderService } from '../order.service';
import { PaymentService } from '../payment.service';
import { User } from '../user.model';
import { Payment } from '../payment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
public orders: Orders[]=[];
orderbyId!:Orders;
price!:number;
user!:User;
  constructor(private orderService:OrderService, private paymentService: PaymentService, private route:Router) { }

  ngOnInit(): void {
    this.getOrders();
  
  }

  public getOrders():void{
    this.orderService.getOreders().subscribe(
      (response: Orders[])=>{
        this.orders= response;
       //console.log(this.orders)
      }
    )
  }
  public onDeleteOrder(orderid:number):void{
    this.orderService.deleteOrder(orderid).subscribe(
      (res:void)=>{
        this.getOrders();
      }
    );
  }

  AddToOrder(id:number){
    this.orderService.getOreders().subscribe(
      (res: Orders[])=>{
        this.orders=res;
      }
    )
    
  }


  AddToPayments(orderid:number, price:number){

      console.log("order");
     this.orderService.getById(orderid).subscribe(
        (response: Orders)=>{
          this.orderbyId=response;
          const payment = new Payment (20,this.price, this.orderbyId, this.user);
      this.paymentService.addPayments(payment).subscribe({
     });
        }
      );
    this.route.navigate(['payments']);
    }
  

}
