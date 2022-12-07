import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './order.service';
import { RegiserUserComponent } from './regiser-user/regiser-user.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdditonProductComponent } from './additon-product/additon-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    RegiserUserComponent,
    LoginComponent,
    PaymentsComponent,
    AdditonProductComponent,
   AdminProductsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 

    
  ],
  providers: [ProductService, OrderService, ProductsComponent, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
