import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/producto.interface';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productList:IProducto[] = [];

  constructor(private readonly productoService:ProductoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productoService.getProducts().subscribe(
      data => this.productList = data
    );
  }

  deleteProduct(productid: number) {
    this.productoService.deleteProduct(productid).subscribe (
      
      res =>{
        this.getProducts();
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
