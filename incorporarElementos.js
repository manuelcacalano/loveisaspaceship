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



let nombre = prompt("Ingresa tu nombre");
let mensajeBienvenida = document.getElementById("bienvenido")

mensajeBienvenida.innerHTML= `<h1>Hola ${nombre}!</h1>`





for (const producto of productos){
    let contenedor = document.createElement("button");
    let carrito = document.createElement("li");
contenedor.innerHTML = `<h2> Producto: ${producto.nombre} </h2>
                        <p> $${producto.precio} </p>`;
document.body.appendChild(contenedor);        
contenedor.onclick = () => {alert(`Compraste el producto ${producto.nombre}`)

producto.vender();
carrito.innerHTML=`
<h2>Compraste</h2>
<h4> Producto: ${producto.nombre} </h4>
<p> $${producto.precio} </p>
<b> Stock: ${producto.cantidad} </b>`;
document.body.appendChild(carrito); 


}           
}





