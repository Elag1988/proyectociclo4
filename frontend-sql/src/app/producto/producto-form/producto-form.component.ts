import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/producto.interface';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {


  productList:IProducto[] = [];


  product: IProducto = {
    nombre: '',
    photoUrl: '',
    precioDeVenta: 0,
    precioDeCompra: 0,
    stock: 0,
    descuento: 0,
  }

  constructor(
    private readonly productoService: ProductoService,
    private readonly router:Router
     ) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.productoService.getProducts().subscribe(
      data => this.productList = data
    );
  }

  createProduct() {
    this.productoService.createProduct(this.product). subscribe (
      res => {
        console.log(res);
        this.router.navigate(["producto/list"]);
        this.getProducts();
      },
      err => console.log(err) 
    );
  }

}
