function saludar(){
    let nombre=prompt("Ingrese su nombre"); 
    let mensaje=`Bienvenido ${nombre}, a continuación se mostrará una lista de productos del 0 al 6`;
    if(nombre==("")){
        alert(`Ingrese un nombre correcto`);
        let nombre=prompt("Ingrese su nombre"); 
    }else {
    alert(mensaje);
}
}
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

const productosComprados = [];

function comprar(){
alert(JSON.stringify(productos, null, 0));
let agregarProducto=true;
let numero;
while(agregarProducto){
    numero=parseInt(prompt("Ingrese numero del producto a comprar"));
    productosComprados.push(productos[numero]);
    agregarProducto = confirm("Desea agregar algun producto?");
}
const total = productosComprados.reduce((acumulador, item) => acumulador + item.precio, 0);
alert(`Su importe a pagar es de $ ${total}`);
}
saludar();
comprar();
