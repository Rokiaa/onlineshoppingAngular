import { Component, OnInit } from '@angular/core';
import { Products } from '../product.model';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-additon-product',
  templateUrl: './additon-product.component.html',
  styleUrls: ['./additon-product.component.css']
})
export class AdditonProductComponent implements OnInit {

products:Products= new Products();
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  AddToProducts(){
    this.productService.addProduct(this.products).subscribe(data=>{
      
      alert("Product added Successfully")
      
    },error=>alert("Product not added")
    );
    
  }

}
