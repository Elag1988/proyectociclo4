/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("inventario")

export class InventarioEntity{
  
  @PrimaryGeneratedColumn()  
  idProducto: number;
  @Column({default:"Ajiaco"})  
  nombre: string;
  @Column({default: "1"})
  precioDeVenta: number;
  @Column({default: "1"})
  precioDeCompra:number;
  @Column({default: "1"})
  stock: number;
  @Column({default: "1"})
  descuento: number;
}