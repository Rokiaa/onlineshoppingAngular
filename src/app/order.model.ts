
import { Payment } from "./payment.model";
import { Products } from "./product.model";

export class Orders{
    id:number;
   
    payment_id:Payment|undefined;
    product_id:Products;
   
   constructor(id:number,payment_id:Payment,product_id:Products){
    this.id=id;
    
    this.payment_id=payment_id;
    this.product_id=product_id;
   }
}