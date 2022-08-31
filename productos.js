class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre.toUpperCase();
        this.precio=parseFloat(precio);
        this.cantidad=cantidad;    
    }
    vender(){
        this.cantidad= this.cantidad -1
        if(this.cantidad===0){
            this.cantidad="Sin Stock"
        }
    }
}

const productos = [];
productos.push(new Producto ("Remera 1", "2500", "10"));
productos.push(new Producto ("Remera 2", "2500", "10"));
productos.push(new Producto ("Remera 3", "2500", "10"));
productos.push(new Producto ("Remera 4", "2500", "10"));
productos.push(new Producto ("Remera 5", "2500", "10"));
productos.push(new Producto ("Remera 6", "2500", "10"));
productos.push(new Producto ("Totebag1", "1200", "10"));

console.log(productos);

for (producto of productos){
   producto.vender();
   producto.vender();
   producto.vender();
   producto.vender();
   producto.vender();
}
console.log(productos);

for (producto of productos){
    producto.vender();
    producto.vender();
    producto.vender();
    producto.vender();
    producto.vender();
 }
 console.log(productos);

