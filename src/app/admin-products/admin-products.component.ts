import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public products:Products[]=[];
  public editProduct!: Products;
  public deleteProduct !: Products;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.getProducts();
 
  }

  public getProducts():void{
    this.productService.getProducts().subscribe(
      (response: Products[])=>{
        this.products= response;
        
      }
    )
  }

  public onDeleteProduct(productid:number):void{
    this.productService.deleteProduct(productid).subscribe(
      (res:void)=>{
        this.getProducts();
      }
    );
  }

  public onUpdateProduct(product:Products):void{
    this.productService.updateProduct(product).subscribe(
      (response: Products) =>{
        console.log(product);
        this.getProducts();
      },(error: HttpErrorResponse)=>{
        console.log(product);
        console.log(error);
        alert(error.message);
      }
    );

  }

  public onOpenModal( product: Products, mode:string):void{
    const container= document.getElementById('main-container');
    const button= document.createElement('button');
    button.type= 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'edit'){
      this.editProduct= product;
      button.setAttribute('data-target','#updateProductModal');
    }
    if(mode === 'delete'){
      this.deleteProduct = product;
      button.setAttribute('data-target','#deleteProductModal');
    }

    container?.appendChild(button);
    button.click();

  }

}
