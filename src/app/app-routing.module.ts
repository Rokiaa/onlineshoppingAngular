import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdditonProductComponent } from "./additon-product/additon-product.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { AppComponent } from "./app.component";
import { CategoriesComponent } from "./categories/categories.component";
import { LoginComponent } from "./login/login.component";
import { OrderService } from "./order.service";
import { OrdersComponent } from "./orders/orders.component";
import { PaymentsComponent } from "./payments/payments.component";
import { ProductsComponent } from "./products/products.component";
import { RegiserUserComponent } from "./regiser-user/regiser-user.component";



const appRoutes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'products/:category', component:CategoriesComponent},
  {path:'orders',component:OrdersComponent},
  {path:'register',component:RegiserUserComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:AdditonProductComponent},
  {path:'showProducts',component:AdminProductsComponent},
  {path:'payments',component:PaymentsComponent}
  
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]

})
export class AppRoutingModule{

}