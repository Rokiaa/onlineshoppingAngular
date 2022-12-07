import { Orders } from "./order.model";
import { User } from "./user.model";

export class Payment{
    id!:number;
    total!:number;
    order_id!:Orders;
    user_id!:User;

    constructor(id:number,total:number,order_id:Orders,user_id:User){
        this.id=id;
        this.order_id=order_id;
        this.total=total;
        this.user_id=user_id;

    }
   
}