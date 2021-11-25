/* eslint-disable prettier/prettier */

export interface IProducto {
    
    readonly idProducto?: number,
    readonly nombre: string,
    readonly photoUrl: string,
    readonly precioDeVenta: number,
    readonly preciodeCompra: number,
    readonly stock: number,
    readonly descuento: number
}