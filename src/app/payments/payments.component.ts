import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment.model';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
payments:Payment[]=[];
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  public getPayments():void{
    this.paymentService.getPayments().subscribe(
      (response: Payment[])=>{
        this.payments= response;
      }
    )
  }

  addPayments(id:number){
    this.paymentService.getPayments().subscribe(
      (res: Payment[])=>{
        this.payments=res;
      }
    )
    
  }
}
