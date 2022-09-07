function saludar(){
    let nombre=prompt("Ingrese su nombre"); 
    let mensaje=`Bienvenido ${nombre}`;
    if(nombre==("")){
        alert(`Ingrese un nombre correcto`);
        let nombre=prompt("Ingrese su nombre"); 
    }else {
    alert(mensaje);
}
}
function listarProductos() {
    let listarProductos = "Nuestros productos son: \n";
    for (const producto of productos){
        listarProductos += `\n ${producto.nombre}, $${producto.precio}`
    }
    alert (listarProductos)
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
productos.push(new Producto ("1 - Remera 1", "2500", "10"));
productos.push(new Producto ("2 - Remera 2", "2500", "10"));
productos.push(new Producto ("3 - Remera 3", "2500", "10"));
productos.push(new Producto ("4 - Remera 4", "2500", "10"));
productos.push(new Producto ("5 - Remera 5", "2500", "10"));
productos.push(new Producto ("6 - Remera 6", "2500", "10"));
productos.push(new Producto ("7 - Totebag1", "1200", "10"));

const productosComprados = [];

function comprar(){
    listarProductos();
     let agregarProducto=true;
    let numero;
     while(agregarProducto){
         numero=parseInt(prompt("Ingrese numero del producto a comprar"));
         productosComprados.push(productos[numero-1]);
         agregarProducto = confirm("Desea agregar algun producto?");
        }    if(numero > 0 && numero < 7){
            const total = productosComprados.reduce((acumulador, item) => acumulador + item.precio, 0);
             alert(`Su importe a pagar es de $ ${total}`);
            } else{
                alert(`Uno o mas de los productos ingresados no son validos, por favor intente nuevamente`);
                comprar();
            }
       }
saludar();
comprar();
