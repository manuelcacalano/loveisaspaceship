
/*class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;    
    }
    vender(){
        this.cantidad= this.cantidad -1
        if(this.cantidad===0){
            this.cantidad="Sin Stock"
        }
    }
}
let producto1=new Producto("Remera1", 2500, 10);
let producto2=new Producto("Remera2", 2500, 10);
let producto3=new Producto("Remera3", 2500, 10);
let producto4=new Producto("Remera4", 2500, 10);
let producto5=new Producto("Remera5", 2500, 10);
let producto6=new Producto("Totebag1", 1200, 10);

producto1.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto6.vender();
producto6.vender();
producto6.vender();
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
*/
function saludar(){
    let nombre=prompt("Ingrese su nombre"); 
    let mensaje=`Bienvenido ${nombre}, a continuación ingrese el importe a pagar de su pedido`;
    if(nombre==("")){
        alert(`Ingrese un nombre correcto`);
        let nombre=prompt("Ingrese su nombre"); 
    }else {
    alert(mensaje);
}
} 
function importe(){
    let agregarProducto=true;
    while(agregarProducto==true){
        let nuevoImporte = parseInt( prompt("Ingrese el nuevo importe a pagar") );
        let importeTotal = nuevoImporte+importeTotal;
        let agregarProducto = confirm ("Desea agregar otro importe?");
    } 
    let importeFinal = importeTotal*1.15;  /*Service Charge*/
    alert(`Su importe final es de $ ${importeFinal}`);
}
saludar();
importe();








